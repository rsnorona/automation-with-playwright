const { test, expect } = require('@playwright/test');
const { TodoPage } = require('../pages/todo.page');
const { todo } = require('node:test');

test('TodoMVC: add todos, complete one, verify counts and completed filter', async ({
  page,
}) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  // Add todos
  await todoPage.addTodo('Buy milk');
  await todoPage.addTodo('Clean the bathroom');
  await todoPage.addTodo('Take the dog out for a walk');

  // Hard assertion
  await expect(todoPage.todoItems).toHaveCount(3);

  // Soft assertions
  await expect.soft(todoPage.todoLabel('Buy milk')).toBeVisible();
  await expect.soft(todoPage.todoLabel('Clean the bathroom')).toBeVisible();
  await expect
    .soft(todoPage.todoLabel('Take the dog out for a walk'))
    .toBeVisible();

  // Complete one todo
  await todoPage.completeTodo('Take the dog out for a walk');

  // Hard assertion: items left counter
  await expect(todoPage.itemsLeftCounter).toContainText('2');

  // Go to completed filter
  await todoPage.filterCompleted();

  // Hard assertion: completed item is visible in completed view
  await expect(todoPage.todoLabel('Take the dog out for a walk')).toBeVisible();
});

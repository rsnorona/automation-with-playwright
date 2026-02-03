class TodoPage {
  constructor(page) {
    this.page = page;

    // Input where new todos are added
    this.newTodoInput = page.getByPlaceholder('What needs to be done');

    // List of all todo items
    this.todoItems = page.locator('.todo-list li');

    // Counter showing items left
    this.itemsLeftCounter = page.locator('.todo-count');

    // Filters
    this.allFilter = page.getByRole('link', { name: 'All' });
    this.activeFilter = page.getByRole('link', { name: 'Active' });
    this.completedFilter = page.getByRole('link', { name: 'Completed' });
  }
  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc/#/');
  }

  async addTodo(text) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  todoLabel(text) {
    return this.page.getByText(text, { exact: true });
  }

  async completeTodo(text) {
    const item = this.todoItems.filter({ hasText: text });
    await item.getByRole('checkbox', { name: 'Toggle Todo' }).check();
  }

  async filterCompleted() {
    await this.completedFilter.click();
  }
}

module.exports = { TodoPage };

class LoginPage {
  constructor(page) {
    this.page = page;
    // Username input
    this.usernameInput = page.getByPlaceholder('Username');
    // Password input
    this.passwordInput = page.getByPlaceholder('Password');
    // Login button
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
module.exports = { LoginPage };

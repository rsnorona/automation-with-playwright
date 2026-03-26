const { expect } = require("@playwright/test");

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://astroflow.wingflows.com/");
  }

  retrievePageObjectByTypeAndText(type, text) {
    return this.page.getByRole(type, { name: text });
  }

  async openRequestQuote() {
    await expect(
      this.retrievePageObjectByTypeAndText(
        "heading",
        "Optimize Your Operations with",
      ),
    ).toBeVisible();

    await this.retrievePageObjectByTypeAndText("link", "Request a Quote")
      .first()
      .click();

    await expect(
      this.retrievePageObjectByTypeAndText("heading", "Request a Quote"),
    ).toBeVisible();
  }

  // Helpers
  async fillText(label, value) {
    const el = this.page.getByRole("textbox", { name: label });
    await expect(el).toBeVisible();
    await el.fill(String(value));
  }

  async selectByLabel(label, value) {
    const el = this.page.getByLabel(label);
    await expect(el).toBeVisible();
    await el.selectOption(value);
  }

  checkboxByName(name) {
    return this.page.getByRole("checkbox", { name });
  }

  async pickFromList(optionText) {
    await this.page
      .locator("div")
      .filter({ hasText: new RegExp(`^${escapeRegex(optionText)}$`) })
      .click();
  }

  async fillQuoteForm(data) {
    const basicFields = [
      { label: "First Name *", value: data.firstName },
      { label: "Last Name *", value: data.lastName },
      { label: "Email Address *", value: data.email },
      { label: "Phone Number *", value: data.phone },
      { label: "Company Name *", value: data.company },
    ];

    for (const f of basicFields) {
      await this.fillText(f.label, f.value);
    }

    // Selects
    await this.selectByLabel("Industry *", data.industry);
    await this.selectByLabel("Timeline *", data.timeline);

    // Dropdown/list custom (según tu caso actual)
    for (const cap of data.capabilities ?? []) {
      await this.pickFromList(cap);
    }

    // Checkboxes (mejor .check() que .click())
    for (const service of data.services ?? []) {
      await this.checkboxByName(service).check();
    }

    await this.fillText("Estimated Monthly Volume", data.monthlyVolume);
    await this.fillText("Project Details *", data.projectDetails);
  }

  async submitRequestQuote({ dismissDialog = true } = {}) {
    if (dismissDialog) {
      this.page.once("dialog", (dialog) => dialog.dismiss().catch(() => {}));
    }

    await this.page.getByRole("button", { name: "Submit Request" }).click();
  }
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = { HomePage };

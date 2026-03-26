import { test, expect } from "@playwright/test";
const { HomePage } = require("../pages/home_page.js");

test("Request a Quote", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.openRequestQuote();

  await homePage.fillQuoteForm({
    firstName: "Ricardo",
    lastName: "Norona",
    email: "rikkycebas97@gmail.com",
    phone: "+593 983338617",
    company: "Orienta",
    industry: "ecommerce",
    services: ["Technology Integration", "Value-Added Services"],
    capabilities: ["Warehousing & Storage", "Transportation & Distribution"],
    timeline: "1-3-months",
    monthlyVolume: "500",
    projectDetails: "No details",
  });

  await homePage.submitRequestQuote({ dismissDialog: true });
});

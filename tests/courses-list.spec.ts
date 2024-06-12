import { test, expect } from "@playwright/test";

test("create delete", async ({ page }) => {
  // await page.goto("/");
  await page.getByRole("button", { name: "Удалить" }).click();
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("Test course");
  await page.getByPlaceholder("описание").click();
  await page.getByPlaceholder("описание").fill("description");
  await page.getByRole("button", { name: "Добавить" }).click();
});

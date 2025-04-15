import { test, expect } from "@playwright/test";

test("Show the car's list and filtered them:", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const selectBox = await page.getByRole("combobox");
  await expect(selectBox).toBeVisible;

  const carCard = await page.locator(".car-card");
  await expect(carCard).toHaveCount(12);

  const searchBox = await page.getByPlaceholder("Search car's name...");
  await expect(searchBox).toBeVisible;
  await (searchBox).fill("Ford")
  await expect(searchBox).toHaveValue("Ford")
  await expect(carCard).toHaveCount(2)

});

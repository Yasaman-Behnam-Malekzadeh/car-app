import { test, expect } from "@playwright/test";

test("Show the hero page with image and texts", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const image = await page.getByAltText("hero");
  await expect(image).toBeVisible;
  const BGImage= await page.getByAltText("hero-background")
  await expect(BGImage).toBeVisible


  const text=await page.getByText("Find and Show details of a car—quick and super easy!")
  await expect(text).toBeVisible
});

import { expect, test } from "@playwright/test";

test("studio home renders without page errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const res = await page.goto("/");
  expect(res?.status()).toBe(200);
  await expect(page.locator("body")).not.toBeEmpty();
  await expect(page.getByText("Opening the room…")).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("checkout page renders", async ({ page }) => {
  const res = await page.goto("/checkout");
  expect(res?.status()).toBe(200);
  await expect(page.locator("body")).not.toBeEmpty();
});

test("rent API rejects a non-JSON body", async ({ request }) => {
  const res = await request.post("/api/rent", { data: "nope", headers: { "content-type": "text/plain" } });
  expect(res.status()).toBe(400);
});

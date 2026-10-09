import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { services } from "../src/data/site";
const routes = [
  "/",
  "/about/",
  "/services/",
  ...services.map((s) => `/services/${s.slug}/`),
  "/new-patients/",
  "/our-team/",
  "/gallery/",
  "/faqs/",
  "/contact/",
  "/book-appointment/",
  "/privacy/",
  "/terms/",
];
const widths = [320, 375, 390, 430, 768, 1024, 1440, 1920];
for (const width of widths) {
  test(`all 24 pages fit and load at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    for (const route of routes) {
      const response = await page.goto(route, { waitUntil: "networkidle" });
      expect(response?.status(), route).toBe(200);
      await expect(page.locator("h1"), route).toHaveCount(1);
      await expect(page).toHaveTitle(/LUMINA/);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        "content",
        /.{40,}/,
      );
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        /noindex/,
      );
      const dimensions = await page.evaluate(() => ({
        width: document.documentElement.scrollWidth,
        viewport: window.innerWidth,
      }));
      expect(dimensions.width, route).toBeLessThanOrEqual(
        dimensions.viewport + 1,
      );
      await page.locator("img").evaluateAll((images) =>
        images.forEach((img) => {
          (img as HTMLImageElement).loading = "eager";
        }),
      );
      await page.waitForFunction(() =>
        Array.from(document.images).every(
          (img) => img.complete && img.naturalWidth > 0,
        ),
      );
      await expect(page.locator("footer")).toContainText("fictional practice");
    }
    expect(errors).toEqual([]);
  });
}
for (const width of [390, 1440]) {
  test(`all pages have no axe WCAG AA violations at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route, { waitUntil: "networkidle" });
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(
        results.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
        route,
      ).toEqual([]);
    }
  });
}
test("internal links resolve, assets load, and unknown route gives 404", async ({
  page,
  request,
}) => {
  const links = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    for (const href of await page
      .locator("a[href]")
      .evaluateAll((a) => a.map((el) => el.getAttribute("href")!)))
      if (href.startsWith("/") && !href.startsWith("//")) links.add(href);
  }
  for (const href of links) {
    const r = await request.get(href);
    expect(r.status(), href).toBe(200);
  }
  expect((await request.get("/unavailable-page/")).status()).toBe(404);
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "Disallow: /",
  );
});
test("mobile navigation, focus loop, Escape and destination", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 780 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await expect(
    page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: /Our studio/ }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(page.getByRole("button", { name: "Close menu" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(
    page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Book a consultation" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: /Our care/ })
    .click();
  await expect(page).toHaveURL(/\/services\//);
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeHidden();
});
test("service filters show only the selected care category", async ({
  page,
}) => {
  await page.goto("/services/");
  await page
    .getByRole("button", { name: "Cosmetic Dentistry", exact: true })
    .click();
  await expect(page.locator(".service-card")).toHaveCount(3);
  await expect(page.locator(".service-card").first()).toContainText(
    "Teeth Whitening",
  );
  await page.getByRole("button", { name: "All care", exact: true }).click();
  await expect(page.locator(".service-card")).toHaveCount(13);
});
test("gallery filters and accessible dialog close work", async ({ page }) => {
  await page.goto("/gallery/");
  await page.getByRole("button", { name: "Smiles", exact: true }).click();
  await expect(page.locator(".gallery-tile")).toHaveCount(1);
  const imageButton = page.getByRole("button", {
    name: "View A moment of confidence",
  });
  await imageButton.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText("Not a LUMINA patient");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(imageButton).toBeFocused();
});
test("FAQ supports keyboard opening and closing", async ({ page }) => {
  await page.goto("/faqs/");
  const question = page.getByRole("button", {
    name: "What can I expect at a first visit?",
  });
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("region").first()).toContainText(
    "no clinical visit",
  );
  await page.keyboard.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "false");
});
test("appointment validates, clears sample data and never transmits or persists it", async ({
  page,
}) => {
  await page.goto("/book-appointment/");
  await page
    .getByRole("button", { name: "Simulate appointment request" })
    .click();
  await expect(page.getByLabel("Full name")).toBeFocused();
  await expect(page.getByText("Enter a valid sample email")).toBeVisible();
  await page
    .getByRole("button", { name: "Fill with safe sample details" })
    .click();
  await expect(page.getByLabel("Full name")).toHaveValue("Demo Visitor");
  const transmissions: string[] = [];
  page.on("request", (r) => {
    if (r.method() !== "GET" || r.url().includes("demo@example.com"))
      transmissions.push(r.url());
  });
  await page
    .getByRole("button", { name: "Simulate appointment request" })
    .click();
  await expect(page.getByRole("status")).toContainText(
    "No appointment was booked",
  );
  expect(transmissions).toEqual([]);
  expect(
    await page.evaluate(() => ({
      local: localStorage.length,
      session: sessionStorage.length,
      cookies: document.cookie,
    })),
  ).toEqual({ local: 0, session: 0, cookies: "" });
  await page.getByRole("button", { name: "Try another sample" }).click();
  await expect(page.getByLabel("Full name")).toHaveValue("");
});
test("reduced motion and no-JavaScript reading remain usable", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Book a consultation", exact: true }),
  ).toBeVisible();
  await context.close();
});

test("appointment stays private without JavaScript and dates are fresh after the build day", async ({
  page,
  browser,
}) => {
  const errors: string[] = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  await page.clock.setFixedTime(new Date("2030-01-15T14:00:00Z"));
  await page.goto("/book-appointment/", { waitUntil: "networkidle" });
  await page
    .getByRole("button", { name: "Fill with safe sample details" })
    .click();
  await expect(page.getByLabel("Preferred date")).toHaveValue("2030-01-15");
  await page
    .getByRole("button", { name: "Simulate appointment request" })
    .click();
  await expect(page.getByRole("status")).toContainText(
    "No appointment was booked",
  );
  expect(errors).toEqual([]);
  const context = await browser.newContext({ javaScriptEnabled: false });
  const noJS = await context.newPage();
  await noJS.goto("/book-appointment/");
  await expect(noJS.getByLabel("Full name")).toBeDisabled();
  await expect(
    noJS.getByRole("button", { name: "Simulate appointment request" }),
  ).toBeDisabled();
  await expect(
    noJS.getByText("This sample interaction requires JavaScript."),
  ).toBeVisible();
  await context.close();
});

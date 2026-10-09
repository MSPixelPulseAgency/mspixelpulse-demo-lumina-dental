import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
const base = process.argv[2] || "http://127.0.0.1:3001";
const routes = {
  home: "/",
  services: "/services/",
  appointment: "/book-appointment/",
  team: "/our-team/",
  contact: "/contact/",
};
await mkdir("docs/screenshots", { recursive: true });
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ reducedMotion: "reduce" });
  for (const [device, width, height] of [
    ["desktop", 1440, 1000],
    ["mobile", 390, 844],
  ]) {
    await page.setViewportSize({ width, height });
    for (const [name, path] of Object.entries(routes)) {
      await page.goto(new URL(path, base).href, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.locator("img").evaluateAll((images) =>
        images.forEach((img) => {
          img.loading = "eager";
        }),
      );
      await page.waitForFunction(() =>
        Array.from(document.images).every(
          (img) => img.complete && img.naturalWidth > 0,
        ),
      );
      await page.screenshot({ path: `docs/screenshots/${name}-${device}.png` });
      if (name === "home")
        await page.screenshot({
          path: `docs/screenshots/home-${device}-full.png`,
          fullPage: true,
        });
    }
  }
  console.log(
    "Saved production-export screenshots for home, services, appointment, team and contact at 1440px and 390px.",
  );
} finally {
  await browser.close();
}

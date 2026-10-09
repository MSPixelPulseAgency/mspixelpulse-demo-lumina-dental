# QA evidence

Verified locally on 9 October 2026 against the production static export unless noted otherwise.

## Checks

| Check                 | Evidence                                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TypeScript            | `npm run typecheck` passed                                                                                                                                            |
| Lint                  | `npm run lint` passed with no errors or warnings                                                                                                                      |
| Production build      | `npm run build` passed; all content routes prerendered into `out/`                                                                                                    |
| Formatting            | `npm run format:check` passed before handoff                                                                                                                          |
| Dependencies          | `npm audit` reported zero vulnerabilities after toolchain updates                                                                                                     |
| Responsive layout     | 24 content pages × 8 widths: 320, 375, 390, 430, 768, 1024, 1440, 1920; no horizontal overflow; one H1, titles/descriptions, demo disclaimers and every image checked |
| Accessibility         | axe WCAG 2/2.1/2.2 AA scans on all 24 pages at 390 and 1440 px; zero detected violations                                                                              |
| Navigation            | Internal route links return 200; unknown route returns 404; robots disallows indexing                                                                                 |
| Keyboard interactions | Mobile menu focus loop, Escape and destination; gallery dialog Escape/focus restoration; FAQ Enter toggle                                                             |
| Appointment safety    | Required-field validation and focus, safe sample fill, simulated result, cleared values; no POST, data-bearing URL, cookies, localStorage or sessionStorage           |
| No JavaScript         | Reading remains available; form controls and submission remain disabled with an explanatory message                                                                   |
| Date freshness        | Browser clock set to January 2030; sample date and validation use the visit date, not the static build date                                                           |
| Browser errors        | No page exceptions across the responsive route runs; no console errors in the future-date form flow                                                                   |
| Local setup           | Port 3000 returned HTTP 200; VS Code status identified the LUMINA folder in its own workspace; actual edit/save Fast Refresh and source restoration verified          |
| Stop/restart          | Managed stop script successfully stopped only the LUMINA process group; server restarted at localhost:3000                                                            |

Original implementation QA: **18 passed (2.9 minutes)** against implementation commit `35af160`. This includes 192 page/viewport checks and 48 automated accessibility scans. The targeted date/no-JavaScript regression also passed independently before the complete rerun.

## Output-directory repair verification

The existing project's initial deployment `dpl_9dQkd2VNUV9bffWcNuuqBh59jnra` failed after compilation at `70162cb`: the adapter searched for `/vercel/path0/out/routes-manifest.json`. Both repository and dashboard output overrides were `out`; Next.js actually puts that manifest in `.next/`.

- Removed the repository output override and reset the existing project's Output Directory to automatic/default. Framework remains Next.js; root remains repository root; static export stays enabled.
- Stopped only the managed LUMINA dev server, removed generated `.next/`, `out/` and `.vercel/output/`, then ran `vercel build --prod` against the exact existing project. Its internal `npm run build` generated all 28 static outputs and the adapter completed successfully.
- Build Output API version 3, with zero function directories. All 24 content HTML pages and 404 are packaged unchanged, and all 34 public assets match source bytes.
- TypeScript, lint, formatting and diff checks passed. Ignore `.vercel/` in lint and formatting so generated bundles and downloaded environment files are excluded.
- Repair browser regression suite: **18 passed (3.1 minutes)**, including 192 page/viewport checks, 48 accessibility scans, route/asset loading, navigation and safe appointment interactions.
- The production address returned HTTP 404 / `DEPLOYMENT_NOT_FOUND`. No successful production deployment or live-site verification is claimed. Automatic Git deployments are deliberately paused while the Hobby commercial-use restriction remains.
- Website source, assets, Next config, package versions and lockfile are unchanged. The local dev server was restarted on port 3000 after the clean build. When the provider project was externally replaced, the output setting and local link were refreshed to current project `prj_degeuzj9Mh34YuMZxqkNWHmITgqN` and its local production packaging was rechecked.

## Visual review

Production screenshots were captured with local fonts ready and all images loaded. Desktop is 1440 × 1000; mobile is 390 × 844. Homepage full-page screenshots are also included. Actual screenshots of Home, Services, Appointment, Team and Contact were visually inspected, including the homepage FAQ, CTA and footer. No visual defect was left unresolved in that review.

- [Desktop homepage](screenshots/home-desktop.png)
- [Mobile homepage](screenshots/home-mobile.png)
- [Desktop full homepage](screenshots/home-desktop-full.png)
- [Mobile full homepage](screenshots/home-mobile-full.png)
- Services, Appointment, Team and Contact desktop/mobile captures are in `screenshots/`.

To regenerate captures, first build, start `npm start -- --port 3001`, then run `npm run screenshots` in another terminal. Stop the preview afterward; keep the separate development server on port 3000 if desired.

## Performance and limitations

The production site is static, with locally bundled open fonts, responsive WebP photographs, lazy loading below the hero, and no third-party booking, analytics or tracking scripts. All source photo variants together are approximately 980 KB; local font files approximately 136 KB. These are file-size observations, not a claim of field Core Web Vitals or a Lighthouse score.

Browser viewport emulation does not establish physical-device behavior. Automated axe checks do not establish full WCAG certification. Field performance and live-provider route behavior cannot be verified before actual publication.

Production deployment is blocked by the verified Vercel Hobby commercial-use restriction, as required by the brief. There is no verified live website, successful production deployment SHA, live website QA, published portfolio card or Published Aurelion registration. See [the integration handoff](INTEGRATIONS.md).

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

Final Playwright rerun: **18 passed (2.9 minutes)** against implementation commit `35af160`. This includes 192 page/viewport checks and 48 automated accessibility scans. The targeted date/no-JavaScript regression also passed independently before the complete rerun.

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

Production deployment is blocked by the verified Vercel Hobby commercial-use and organization-repository restrictions, as required by the brief. There is no production URL, deployment SHA, live website QA, published portfolio card or Published Aurelion registration. See [the integration handoff](INTEGRATIONS.md).

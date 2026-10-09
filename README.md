# LUMINA Dental Studio

An original premium dental-studio **website demonstration** by MSPixelPulse. Fictional Brampton, Ontario practice. No real appointments, clinical services, patient results or professional credentials.

- Authoritative local folder: `/Users/mahak/Documents/MSPixelPulse/Lumina-Dental-Studio`
- GitHub: https://github.com/MSPixelPulseAgency/mspixelpulse-demo-lumina-dental
- Local development: http://localhost:3000
- Production URL: **not deployed — Vercel Hobby compliance restriction**
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion, Lucide.
- Package manager: npm. Commit `package-lock.json`; use `npm ci` for reproducible installs.

## Start locally and edit in VS Code

Node.js 22 or later compatible with the locked dependencies is required. Setup used the existing Node 22.12.0 installation without changing other environments.

```sh
cd ~/Documents/MSPixelPulse/Lumina-Dental-Studio
npm ci
code ~/Documents/MSPixelPulse/Lumina-Dental-Studio
npm run dev
```

Open http://localhost:3000. Edit a file in `src/` and save; Next.js Fast Refresh updates your browser automatically. You can also use VS Code → Terminal → Run Task → **LUMINA: Start dev server**. Workspace recommendations and tasks affect only this folder; no global VS Code settings or extensions are installed.

If 3000 is busy, choose another port:

```sh
npx next dev --hostname 127.0.0.1 --port 3002
```

The setup session leaves a detached LUMINA development server running on port 3000. Its log and PID are ignored files (`.dev.log`, `.dev.pid`). Do not start a second server on that port.

## Stop the server

For a server you started in a terminal, press **Ctrl+C** in that terminal.

For the detached server started during project setup:

```sh
cd ~/Documents/MSPixelPulse/Lumina-Dental-Studio
npm run dev:stop
```

The stop script verifies the PID’s working directory and command before stopping only this project’s process group. It never kills a different project by port. After stopping, use `npm run dev` to restart in your terminal.

## Make changes

- `src/app/`: Home, About, Services, 13 service details, New Patients, Our Team, Gallery, FAQs, Contact, Book Appointment, Privacy and Terms; original 404 page.
- `src/components/`: reusable navigation, footer, headings, CTA, cards, process steps, accordion, gallery, animation utilities and form.
- `src/data/site.ts`: shared placeholder contact details, services, FAQs, fictional profiles and gallery metadata.
- `src/app/globals.css`: brand tokens, local fonts, responsive layout and reduced-motion styling.
- `public/images/`: optimized local WebP photographs in two sizes.
- `public/brand/`: original SVG logos, fictional profile illustrations, favicon, app icon and social preview.
- `public/fonts/`: bundled open fonts and their licence files.
- `.ai-agents/`: future-maintainer role guidance.

Do not enter real patient information, add real professional credentials or present stock photos as clinical results. The appointment form is browser-only: no API, email, database, cookies or browser storage. It validates fictional entries and displays a simulated result.

## Verify before committing

```sh
npm run format:check
npm run typecheck
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
npm audit
```

The production build creates a static `out/` directory. To preview it locally without using the development server’s port:

```sh
npm start -- --port 3001
```

Press Ctrl+C to stop the static preview. Playwright starts its own preview on port 3001, so stop a manually started preview before running tests. Browser emulation is not proof from a physical mobile device.

## Push updates to GitHub

The `main` branch tracks `origin/main` in the named organization repository. No credentials are stored in this project; Git uses the existing authenticated GitHub connection.

```sh
git status
git pull --ff-only
# Edit and save your changes; run the checks above.
git add src/ public/ README.md
# Adjust the paths to include only your intended files.
git commit -m "Describe your focused change"
git push origin main
```

`.gitignore` excludes dependencies, build output, local environment files, Vercel linkage, process logs and transient test reports. Never commit secrets. This application requires no API keys.

## Production deployment and current restriction

The existing Vercel project is `mspixelpulse-demo-lumina-dental` (`prj_degeuzj9Mh34YuMZxqkNWHmITgqN`) in `mahak-patels-projects`. It is connected to this public GitHub repository and production branch `main`. The initial import at `70162cb` failed during deployment processing; there is no verified live production website.

### Output-directory repair

Keep `next.config.ts` with `output: "export"`, unoptimized images and trailing slashes. `npm run build` continues to export all 24 content pages and their assets to `out/`. Next.js also generates its build manifests, including `routes-manifest.json`, in the default `.next/` build directory.

Vercel's **Next.js** framework adapter needs that `.next/` metadata before packaging the static export. Setting its Output Directory to `out` incorrectly made the adapter look for `out/routes-manifest.json`. The repair removes `outputDirectory` from `vercel.json` and clears the existing project's dashboard override. Framework remains `nextjs`; Root Directory is the repository root; commands remain `npm ci` and `npm run build`. Do not restore the `out` override or copy manifests into it. `out/` remains the correct published directory for a plain static host, not the Next.js adapter's manifest directory.

### Hosting gate and automatic deployments

The connected scope was rechecked as **Hobby** on 9 October 2026. This project's intended use is an agency portfolio/sales asset. Vercel's [fair-use guidelines](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage) restrict Hobby to non-commercial personal use. The brief explicitly requires stopping deployment in this case. Do not upgrade, change billing or work around that restriction.

Correction to the initial setup notes: [public organization repositories are supported](https://vercel.com/docs/git#using-hobby-teams); the organization restriction applies to private repositories. The commercial-use restriction is the current blocker.

`git.deploymentEnabled: false` in `vercel.json` intentionally pauses automatic Git deployments so pushing this repair does not publish an ineligible agency demo. Local builds and the GitHub connection remain usable. Do not manually redeploy or re-enable automatic deployments until the hosting restriction is resolved.

After an eligible hosting decision:

1. Reuse this existing Vercel project; verify account, plan, repository and exact `main` SHA. Do not create another project or transfer the repo to evade limits.
2. Keep Framework **Next.js**, Output Directory **automatic/default** (no override), and Root Directory **./**.
3. Set `NEXT_PUBLIC_SITE_URL` to the actual verified production origin before building. It is public configuration, not a secret. Until then metadata resolves to `http://localhost:3000` and the sitemap is intentionally empty.
4. Remove the automatic-deployment pause only after publication is permitted, then stage/redeploy the exact checked commit through the existing project.
5. Verify the canonical live origin, all 24 pages, 404, forms, assets and deployment SHA. Only then update this README, portfolio listing and Aurelion registration.

Search indexing remains disabled through page `noindex, nofollow`, `robots.txt`, and hosting headers. No real-business LocalBusiness schema, fake reviews or patient-result markup is used.

## Design, assets and integration handoff

See [design notes](docs/DESIGN.md), [asset licences](docs/ASSET-LICENSES.md), [QA evidence](docs/QA.md), and [integration handoff](docs/INTEGRATIONS.md). Desktop/mobile screenshots are in `docs/screenshots/`. Public listing metadata is prepared in `docs/project-registration.json`; its live URL remains `null` until actual publication. The existing MSPixelPulse Projects list and Aurelion database have not been edited.

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

**No Vercel project or Git integration was created, and there is no production URL.** The connected Vercel scope was verified as Hobby on 9 October 2026. This project’s intended use is an agency portfolio/sales asset. Vercel’s current [fair-use guidelines](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage) restrict Hobby to non-commercial personal use; its [Git limits](https://vercel.com/docs/limits#connecting-a-project-to-a-git-repository) also prohibit connecting Hobby to organization-owned repositories. The brief explicitly requires stopping deployment in this case. Do not upgrade, change billing or work around those restrictions.

`vercel.json` is prepared with the actual **Next.js** framework, `npm ci`, `npm run build`, and `out/` export directory. It is configuration only, not evidence of a connected project. The original generic Vite defaults do not apply to this project’s explicitly requested Next.js stack.

After the owner selects an eligible hosting arrangement:

1. Verify the authorized account, plan, repository and exact `main` SHA.
2. Use a supported Git integration for `MSPixelPulseAgency/mspixelpulse-demo-lumina-dental` where the provider permits it. Do not duplicate or transfer the repository to evade plan limits.
3. Set the public `NEXT_PUBLIC_SITE_URL` to the actual verified origin before building; this configures social-image URL resolution and the sitemap. It is not a secret. Until then local metadata resolves to `http://localhost:3000` and the sitemap is intentionally empty.
4. Build and publish `out/`, preserving directory routes, `404.html` and static assets.
5. Verify the canonical live origin, all pages, forms, image loading and deployment SHA. Only then update the README’s URL, portfolio listing and Aurelion registration.
6. On a permitted Vercel Git integration, pushes to `main` can trigger production builds; other branches can create previews. Currently **GitHub pushes do not deploy** because no integration is connected.

Search indexing is disabled through page `noindex, nofollow`, `robots.txt`, and prepared hosting headers. No real-business LocalBusiness schema, fake reviews or patient-result markup is used.

## Design, assets and integration handoff

See [design notes](docs/DESIGN.md), [asset licences](docs/ASSET-LICENSES.md), [QA evidence](docs/QA.md), and [integration handoff](docs/INTEGRATIONS.md). Desktop/mobile screenshots are in `docs/screenshots/`. Public listing metadata is prepared in `docs/project-registration.json`; its live URL remains `null` until actual publication. The existing MSPixelPulse Projects list and Aurelion database have not been edited.

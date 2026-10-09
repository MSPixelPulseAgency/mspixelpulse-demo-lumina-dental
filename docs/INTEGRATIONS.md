# Publication and integration handoff

Status checked 9 October 2026. The website is implemented locally; **production deployment and both published registrations are blocked**. No live URL is invented and no pending item is marked Published/Available.

## Hosting restriction

Connected Vercel scope: `mahak-patels-projects` (`team_zccbJjixiq0C3YRhUkZlSnF9`), plan **Hobby**. The brief defines this as an MSPixelPulse portfolio and sales asset and explicitly requires stopping if that use is not permitted on Hobby.

- https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage restricts Hobby to non-commercial personal use; financial-gain/service-advertising use is commercial.
- https://vercel.com/docs/limits#connecting-a-project-to-a-git-repository prohibits Hobby Git integration with organization repositories.

No project was created, no deployment was made, no billing changed, and no plan/domain was purchased. `lumina-dental.vercel.app` is only the brief’s preferred hostname, not an assigned or verified URL. An owner decision on eligible hosting is required before publication.

## MSPixelPulse Projects page

Target: https://mspixelpulse.com/projects

Read-only inspection identified `/Users/mahak/Documents/MSPixelPulse Web Solutions/MSPixelPulse-Frontend`, remote `https://github.com/Oyemahak/MSPixelPulse-Frontend.git`. Its `src/pages/Projects.jsx` uses `usePublicPortfolio`; that hook calls `portfolio.list()` against `/public/projects`, with normalized source-data fallback. The published list is therefore API-backed, not just a static card array. The appropriate authenticated portfolio-management workflow must be used after the demo URL is verified. Do not change unrelated entries or bypass authentication by editing a database.

The required record is prepared in `project-registration.json` with the exact project title, Healthcare / Dental Clinic classification, description, stack, repo and local thumbnail path. The live URL is intentionally null. No card was published or duplicate created because there is no deployable public URL under the current constraint. The source checkout was not changed.

## Aurelion Demo Library

Target: https://mahakpatel.com/play/ai
Repository: https://github.com/MSPixelPulseAgency/ai-engineering-system

Read-only inspection of remote main `89e962f77509111a6e228d01f0cc69a48c0b077d` found:

- `apps/console/server/prospecting/library.ts` synchronizes public GitHub repository identities and connected Vercel production aliases into review records, then verifies same-host HTML responses before a demo may be matched.
- `apps/console/server/prospecting/taxonomy.ts` loads `config/growth/taxonomy.json`.
- Current taxonomy’s dental type is `dentists`, label `Dental Clinic`, parent `healthcare-wellness`, aliases `dentist` / `dental`.
- Unknown public repos enter review. Existing manual overrides are preserved; a client record cannot silently become a demo. Broad automatic remapping is not needed for this registration.

The local historical checkout under `Documents/MSPixelPulse/ai-engineering-system` contained existing uncommitted work. Another active release workspace was visible in VS Code. Neither checkout nor its files were changed. No database mutation, category remap, library sync, passkey bypass or outreach was performed.

After permitted publication, use the authenticated Demo Library workflow to discover/review the new repo and verified URL, apply the dental-only category, attach the actual thumbnail and publish/verify it. Preserve manually selected demos, owner choices and unrelated healthcare categories. Stop for any required passkey/Touch ID or fresh approval. Re-inspect the current implementation before acting because the release is under active development.

## Identity verification

Authoritative local folder: `/Users/mahak/Documents/MSPixelPulse/Lumina-Dental-Studio`.
Expected GitHub remote: `https://github.com/MSPixelPulseAgency/mspixelpulse-demo-lumina-dental.git`.
Expected branch: main tracking origin/main.
Local development: http://localhost:3000.
Production: not deployed; three-way local/GitHub/production identity verification cannot be completed until publication. The local and GitHub hashes are checked at handoff.

# Design direction and research

Original editorial identity: forest #173D35, sage #B8C9B7, ivory #F8F6F0, champagne #C7A77A, charcoal #202824. DM Sans for interface text, Cormorant Garamond for display typography. All fonts are bundled locally. Gold is mainly decorative; darker colours carry small text.

The homepage uses an asymmetric split hero, an arched photographic frame, inset treatment-room photograph, small editorial note, an asymmetric introduction, photographic service cards, four values, a large dark photographic story, numbered care journey, staggered gallery, FAQs and a forest-green CTA. Secondary pages share typography, content widths, navigation and accessible controls while adapting their composition to the content.

Research was performed before implementation on 9 October 2026:

- https://dribbble.com/search/dental-website — dental website composition references; no artwork copied.
- https://mobbin.com/ — navigation and interaction pattern catalogue.
- https://www.denstudio.co.uk/ — editorial hierarchy, consultation CTA and three-step journey; no names, awards, claims or copy reused.
- https://dentalartclinics.co.uk/ — service discovery and clear next steps; no clinic identity, testimonials or assets reused.
- https://www.awwwards.com/ and https://godly.website/ — requested sources were attempted but returned retrieval errors; no claim that their designs were successfully inspected.

UI UX Pro Max design-system search was executed for premium dental healthcare. Its accessibility recommendations informed focus states, labels, reduced motion and responsive checks. The brief’s explicit palette, typography and demo-safe content superseded the database’s generic cyan palette and social-proof recommendation. No fabricated ratings, statistics or testimonials were added.

Animations: hero image scale-in, note fade-up, progressive scroll reveals, card lift, image zoom, button arrow movement, mobile menu entrance, FAQ height/opacity transitions and a thin scroll indicator. `prefers-reduced-motion` disables movement. Content is visible in server-rendered HTML without JavaScript.

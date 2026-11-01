# Solvera Energy — Solar & Inverter Website

Marketing site for a solar/inverter installer serving individuals and organizations going off-grid.
Built with Next.js 16 (App Router, Cache Components), Tailwind CSS v4 and lucide-react.

## Pages

| Route      | What's there                                                                            |
| ---------- | --------------------------------------------------------------------------------------- |
| `/`        | Hero (Get a Quote / Consult Us), services, homes vs organizations, process, why us, packages, testimonials, FAQ |
| `/about`   | Story, vision/mission, milestones timeline, team                                         |
| `/gallery` | Filterable project grid with a lightbox                                                  |
| `/contact` | Contact info, quote form (server action), map, FAQ                                      |

A floating WhatsApp button sits on every page.

## Customizing

- **Business details** (name, phone, WhatsApp number, email, address, socials): `src/lib/site.ts`
- **Content** (services, packages, gallery projects, team, testimonials, FAQs, stats): `src/lib/data.ts`
- **Brand colors**: the `@theme` block in `src/app/globals.css`

All photos are Unsplash placeholders and all testimonials, team members, stats and projects are sample copy —
replace them with the client's real ones. To use local photos, put them in `public/` and reference them as `/photo.jpg`.

`Get a Quote` links go to `/contact?subject=quote` and `Consult Us` to `/contact?subject=consultation`,
which preselects the form subject.

## Contact form

The form posts to a server action (`src/app/contact/actions.ts`) that emails the enquiry via [Resend](https://resend.com).
Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

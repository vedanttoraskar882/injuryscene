# InjuryScene Nexus

A premium, responsive, frontend-only landing page for **InjuryScene Nexus**—a proposed sports-medicine evidence infrastructure platform that creates a persistent digital representation of a sports injury or near-miss event.

---

## ⚡ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Storage**: Client-side `localStorage` (Key: `injuryscene_nexus_pilot_submissions`)

---

## 🧭 Page Structure & Anchor IDs

The landing page implements the 7 designated sections strictly in order:

1. **[Home](#home)** (`#home`): Main value proposition, three core pillars, and an illustrative fictional evidence-timeline preview (`ISN-DEMO-001`) with 5 distinct evidence states (*Observed*, *Reported*, *Hypothesis*, *Confirmed*, *Outcome*).
2. **[About](#about)** (`#about`): Multi-system evidence fragmentation, plain-language technical glossary (*InjuryScene*, *Provenance*, *Evidence graph*, *Digital injury twin*), and verified founder profile for **Nabi Jalil** (Founder | Sports Physiotherapist).
3. **[Platform](#platform)** (`#platform`): Clearly separated Phase 1 Initial Pilot Scope (4 core modules + 7 supporting capabilities), Planned Platform Expansion (5 cards with "Planned" badges), Supporting Evidence Features (Evidence Freeze, Integrity Ledger, Outcome Linkage, Permission-Controlled Access), and strict clinical boundary statements.
4. **[How It Works](#how-it-works)** (`#how-it-works`): Six numbered chronological steps from pitch-side capture to audit, multi-disciplinary role contribution strip, and open-scene lifecycle notes.
5. **[Market & Pricing](#market-pricing)** (`#market-pricing`): Customer focus (UK professional football first teams & academies vs later multi-sport expansion), strictly accurate commercial inquiry cards (*Paid Pilot*, *Club Licence*, *Implementation & Integration*), and planned later revenue services.
6. **[FAQ](#faq)** (`#faq`): 12 accessible accordion items with full keyboard and screen-reader support.
7. **Footer**: Wordmark, short description, section links, pilot CTA, founder attribution (*Founded by Nabi Jalil*), and current-year copyright.

---

## 🛡️ Clinical Boundary & Positioning Compliance

- **Complementary Evidence Layer**: Positioned as an integration-first evidence infrastructure layer to complement existing club systems.
- **Authorised Clinician Control**: Diagnosis, management, and return-to-play decisions strictly remain with authorised clinicians.
- **Negative Constraints Honoured**:
  - ❌ Not an autonomous diagnosis tool
  - ❌ Not an injury prediction system
  - ❌ Not a replacement EMR
  - ❌ Not a general athlete-management suite
  - ❌ Not a 3D anatomical body simulation
  - ❌ No fabricated customer logos, awards, or fake testimonials
  - ❌ No invented pricing packages or fixed fees

---

## 💾 LocalStorage Enquiry Functionality

Submissions made through any **"Request a Pilot"** button are persistently saved in the browser's `localStorage` under the key:
```json
injuryscene_nexus_pilot_submissions
```

Each record contains:
- `id`: Unique identifier (`crypto.randomUUID()`)
- `fullName`: String (trimmed, required)
- `phoneNumber`: String (preserves leading zeros & international prefixes, required)
- `emailAddress`: String (validated, required)
- `organisationName`: String (trimmed, required)
- `submissionDateTime`: ISO 8601 timestamp (`new Date().toISOString()`)

### Storage Guarantees
- Submissions are always appended to the array; previous entries are never overwritten or cleared.
- If storage contains non-array or malformed data, an error is thrown and existing data is protected from corruption.
- Errors prevent false success announcements.
- Form fields are preserved upon error to allow retries.

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation & Development
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
# Type check and build static production bundle
npm run build

# Preview production build locally
npm run preview
```

### Automated Storage Verification Suite
```bash
# Run the 7-point localStorage test suite
npm run test:storage
```

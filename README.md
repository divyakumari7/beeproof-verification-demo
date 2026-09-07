# BEEPROOF Verification Demo

A standalone, lightweight, frontend-only public consumer verification portal for physical QR code demonstrations.

When a judge or consumer scans the QR code printed on honey packaging, their smartphone camera opens:
```
https://YOUR-DOMAIN.com/verify/BP-2026-SUN-001
```

---

## 🍯 User Verification Flow

```
PHYSICAL QR CODE
       ↓
PUBLIC VERIFICATION SUMMARY (/verify/BP-2026-SUN-001)
       ↓
[ ✓ VERIFIED • Provenance Confirmed ]
       ↓
[ View Full Details → ]  (Strict Single CTA)
       ↓
FULL VERIFICATION DOSSIER (/verify/BP-2026-SUN-001/details)
       ↓
├─ Origin Apiary & Harvest Details (Sundarbans Mangrove Cluster)
├─ Floral Source & Processing Details (Wild Mangrove Khalisha & Goran)
├─ Harvest Date (2026-08-23, Cold Extracted < 40°C)
├─ Quality Verdict (PASS, Cert #BP-NABL-2026-00492)
├─ Distribution & Logistics (KVIC National Honey Mission Cold-Chain)
├─ NABL Laboratory Metrics (Moisture, Pollen, NMR, C4 Sugars)
├─ [ 📄 Download Lab Report PDF ] (Static bundled PDF at /reports/...)
├─ Provenance Custody Trail (5 Stages: Apiary → Processing → Lab → Packaging → Depot)
└─ Blockchain Details & Integrity Record (On-chain hash match, Polygon PoS demo record)
```

---

## 🚀 Key Architectural Guarantees

- **100% Standalone & Client-Side**: No backend, no database, no authentication, no external API dependencies.
- **Mobile-First Responsive Design**: Optimized for 360px, 375px, 390px, and 412px smartphone viewports with zero horizontal scrolling.
- **Strict Single-Action Summary Page**: Exactly one button (`[ View Full Details → ]`) on the summary page. No search boxes or secondary actions.
- **Static NABL Laboratory Certificate PDF**: Self-contained static PDF hosted at `public/reports/BP-2026-SUN-001-Lab-Report.pdf`.
- **SPA Routing Protection**: Includes `vercel.json` and Netlify `_redirects` to ensure refreshing or scanning direct QR routes never causes 404.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Emerald & Amber Themes + Glassmorphism
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **PDF Engine**: pdf-lib

---

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Generate Static PDF Report** (already generated in `public/reports/`):
   ```bash
   npm run generate-pdf
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/verify/BP-2026-SUN-001` in your browser or smartphone.

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## 🌐 One-Click Deployment

### Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import repository in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Deploy! The included `vercel.json` automatically configures SPA routing.

### Deploy to Netlify
1. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or link your Git repo.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The included `public/_redirects` ensures seamless deep-linking.

---

## 🛡️ Demo Verification Data

| Parameter | Value |
| :--- | :--- |
| **Batch ID** | `BP-2026-SUN-001` |
| **Product** | Raw Wild Mangrove Mustard Honey |
| **Origin Cluster** | Sundarbans Mangrove Reserve Cluster, West Bengal |
| **Floral Source** | Wild Mangrove Khalisha & Goran |
| **Yield** | 485.5 kg |
| **NABL Certificate** | `#BP-NABL-2026-00492` |
| **Moisture** | 17.8% (Standard < 20%) |
| **Pollen Purity** | 96.2% |
| **NMR Spectroscopy** | PASSED (Unadulterated) |
| **C4 Sugars** | NEGATIVE (0% Added Sugar) |
| **Tx Hash** | `0x903bc9ed078535a77dfc47da1eb44d20eb6c1365ec40eb049d49b8c44dbe8f5` |
| **State Hash** | `0xa910dc26b92a5e5e302b51a4209f35c671000773444a6d9645b38169ed0659a4` |

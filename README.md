# NEXORA — Enterprise Solutions
> Transforming Businesses Through Intelligent ERP.

A modern, high-performance enterprise ERP consultancy web platform and operational operations cockpit built for manufacturing and wholesale distribution leaders running **SAP S/4HANA**, **Oracle NetSuite**, and **Microsoft Dynamics 365**.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** React 18 & Vite
- **Styling & Design System:** Tailwind CSS with custom enterprise palette
- **Routing:** React Router v6 (dual-layout architecture: Public & Operational Cockpit)
- **Data Visualization:** Recharts for ERP throughput and telemetry charts
- **Icons:** Lucide React icons
- **Typography:** Inter (`sans-serif`)

---

## 🎨 Enterprise Design System

The application strictly implements the corporate enterprise SaaS design tokens:
- **Deep Navy:** `#101828` (`brand-navy` / `enterprise-900`) — Primary headings, high-contrast badges, footer, and sidebar.
- **Corporate Blue:** `#155EEF` (`brand-blue`) — Primary CTA buttons, interactive links, active states, and highlights.
- **Success Green:** `#12B76A` (`brand-green`) — Real-time ERP sync indicators, positive financial margins, healthy SLA indicators.
- **Background Grey:** `#F2F4F7` (`brand-bg` / `enterprise-100`) — Clean background surface reducing glare for data-heavy operations.
- **Surface White:** `#FFFFFF` — Medium rounded (`12px`), subtly shadowed card components.

---

## 📂 Project Structure

```
Nexora-ERP/
├── public/
│   └── favicon.svg                     # Enterprise SVG favicon
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.jsx               # Reusable enterprise badges (status, ERP platform tags)
│   │   │   ├── Button.jsx              # Reusable button with variants (primary, secondary, outline, ghost)
│   │   │   └── Card.jsx                # Standardized 12px rounded enterprise card container
│   │   └── layout/
│   │       ├── Navbar.jsx              # Public header with certification bar and quick CTA
│   │       ├── Footer.jsx              # Comprehensive enterprise footer with platform links
│   │       ├── PublicLayout.jsx        # Wrapper for public marketing & consulting pages
│   │       └── DashboardLayout.jsx     # Backoffice operational layout with ERP sidebar & telemetry
│   ├── data/
│   │   └── mockData.js                 # Centralized mock data (SAP/NetSuite/Dynamics platforms, inventory, orders)
│   ├── pages/
│   │   ├── HomePage.jsx                # Landing page with value props and trust metrics
│   │   ├── AboutPage.jsx               # Consulting philosophy, 4-stage methodology & leadership
│   │   ├── ServicesPage.jsx            # 6 core consultancy & engineering offerings
│   │   ├── ErpSolutionsPage.jsx        # Comparative analysis of SAP, NetSuite, and Dynamics 365
│   │   ├── DashboardPage.jsx           # Executive overview with Recharts analytics and node health
│   │   ├── InventoryPage.jsx           # Multi-warehouse SKU control and stock thresholds
│   │   ├── OrdersPage.jsx              # Order-to-cash fulfillment pipeline and ERP trace
│   │   ├── ContactPage.jsx             # Scoping discovery form with mutual NDA guarantee
│   │   └── NotFoundPage.jsx            # 404 enterprise fallback view
│   ├── App.jsx                         # Main router configuration
│   ├── index.css                       # Tailwind directives, custom scrollbars, layer components
│   └── main.jsx                        # React root entry
├── index.html                          # HTML5 shell with Google Font 'Inter' preconnect
├── package.json                        # Project dependencies and build scripts
├── postcss.config.js                   # PostCSS Tailwind & Autoprefixer plugin config
├── tailwind.config.js                  # Enterprise design tokens and extended palettes
└── vite.config.js                      # Vite bundler configuration
```

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Runs the application locally at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Generates an optimized production bundle inside the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

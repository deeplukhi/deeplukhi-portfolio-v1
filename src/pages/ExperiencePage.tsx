import { useState } from "react";
import { ArrowUpRight, ChevronDown, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Bullet {
  bold: string;
  rest: string;
}

interface Category {
  title: string;
  bullets: Bullet[];
}

interface Project {
  name: string;
  description: string;
  categories: Category[];
}

interface Experience {
  role: string;
  period: string;
  company: string;
  duration: string;
  location: string;
  projects: Project[];
}

const experience: Experience = {
  role: "Backend Developer Intern",
  period: "Feb 2026 — Jul 2026",
  company: "Vailora Technolab",
  duration: "6 Months",
  location: "Remote",
  projects: [
    {
      name: "CMS POS - Point of Sale",
      description:
        "Multi-outlet restaurant management platform handling GST compliance, billing, menus, orders, loyalty, and multi-outlet operations.",
      categories: [
        {
          title: "Tax-Inclusive Billing Engine",
          bullets: [
            {
              bold: "Built a per-outlet pricesIncludeTax toggle",
              rest: " — allows individual outlets to switch between tax-exclusive and tax-inclusive pricing without changing menu item prices.",
            },
            {
              bold: "Designed the back-calculation math",
              rest: " — when inclusive, a ₹100 item @ 5% GST is billed as base ₹95.24 + GST ₹4.76, rather than ₹100 + ₹5.",
            },
            {
              bold: "Solved the rounding drift problem",
              rest: " — when splitting GST into CGST + SGST + CESS, floating-point math causes the sum to not equal the gross amount; built logic to park the paisa-level difference on the largest tax component so the total always matches exactly.",
            },
            {
              bold: "Built auto-recalculation of open orders",
              rest: " — when the tax toggle is flipped mid-service, all open orders for that outlet automatically recalculate so the table tiles and the bill screen never show conflicting totals.",
            },
          ],
        },
        {
          title: "Bill Print & Formatting System",
          bullets: [
            {
              bold: "Created a centralized billTableNo() function",
              rest: " — one source of truth for how the table number looks, used across thermal print, browser print, and master bill surfaces.",
            },
            {
              bold: "Built configurable table number prefix",
              rest: ' — per-outlet setting to print "T-3" instead of just "3" on physical bills.',
            },
            {
              bold: "Built 5 per-outlet bill section toggles",
              rest: " — address, phone, GST number, FSSAI number, and footer text can be independently hidden/shown.",
            },
            {
              bold: "Added outlet-specific company name override",
              rest: " — allows a single company with multiple outlets to print a different business name on the bill if needed.",
            },
            {
              bold: "Built large company name toggle",
              rest: " — increases the header font size on printed bills via a settings switch.",
            },
            {
              bold: "Built compact table number format",
              rest: " — condensed format option for smaller receipt paper.",
            },
          ],
        },
        {
          title: "Menu & Modifier Pricing",
          bullets: [
            {
              bold: "Created the VariantModifierPrice model",
              rest: " with composite unique key (variantId, modifierId) — allows pricing modifiers (e.g., extra cheese, large size) at the variant level rather than just a flat base price.",
            },
            {
              bold: "Built batched 3-tier price resolution",
              rest: " — resolveModifierPrices() fetches all overrides in 3 DB queries (item+variants, modifier groups, price overrides) instead of N queries per variant-modifier pair.",
            },
            {
              bold: "Full CRUD with audit logging",
              rest: " — GET (fetch matrix of variants x modifiers x prices), PUT (upsert individual price), DELETE (soft-deactivate), with audit trail on every operation.",
            },
            {
              bold: "Built frontend price matrix table",
              rest: " — inline pricing matrix replacing the previous modal, with searchable item popups for modifier assignment.",
            },
          ],
        },
        {
          title: "Discount Policy & Outlet Limits",
          bullets: [
            {
              bold: "Converted hardcoded discount rules to per-outlet config",
              rest: " — built a toggle so busy QSR counters can skip mandatory customer name/phone, while fine-dining outlets can enforce it.",
            },
            {
              bold: "Enforced validation in the service layer",
              rest: " — the API rejects the discount request if the outlet requires details but they aren't provided, independent of frontend validation.",
            },
            {
              bold: "Implemented 10-outlet-per-company limit",
              rest: " — enforced at the HTTP layer with structured 402 LIMIT_EXCEEDED error for frontend upgrade toast.",
            },
          ],
        },
        {
          title: "Order & KOT System",
          bullets: [
            {
              bold: "Added a remarks field to Kitchen Order Tickets (KOTs)",
              rest: ' — enables staff-to-kitchen communication (e.g., "less spice", "allergy"), propagated across order creation, add-items flows, and KOT display screens.',
            },
            {
              bold: "Fixed the void status logic",
              rest: " — previously, voiding an order always set it to deleted; fixed it so only never-paid QSR walk-up carts become deleted, while all other order types correctly retain a cancelled status for accounting.",
            },
          ],
        },
        {
          title: "User Management & Audit",
          bullets: [
            {
              bold: "Built staff termination workflow",
              rest: " — full-stack feature with terminatedAt and terminatedBy tracking, a mandatory reason input, and a new user.terminate permission gate.",
            },
            {
              bold: "Integrated termination with audit logging",
              rest: " — every termination event is written to the audit trail with who did it and why.",
            },
            {
              bold: "Added ID proof tracking",
              rest: " — extended the user schema with idProofUrl and idProofNumber, built the form with image upload support.",
            },
          ],
        },
        {
          title: "Loyalty & Referral System",
          bullets: [
            {
              bold: "Built a self-referential customer relation",
              rest: " — referredById on the customer model to track referral trees.",
            },
            {
              bold: "Implemented real-time referrer lookup",
              rest: " — during registration, detects whether the input is a phone number or email and searches accordingly.",
            },
            {
              bold: "Added debounced duplicate-checking",
              rest: " — validates phone and email uniqueness against the DB as the user types, without hammering the server.",
            },
            {
              bold: "Built referrer card preview",
              rest: " — shows the matched referrer's name and loyalty tier before the registration is submitted.",
            },
            {
              bold: "Implemented automatic loyalty point award",
              rest: " — triggers point crediting to the referrer's account only after the referred customer successfully completes registration.",
            },
          ],
        },
        {
          title: "Kitchen Display System (KDS)",
          bullets: [
            {
              bold: "Built a real-time Kitchen Display System",
              rest: " with live order tracking via WebSocket integration, order status updates, and cancelled order visibility.",
            },
            {
              bold: "Integrated KOT remarks into kitchen view",
              rest: " — KotRemarks component displays staff-to-kitchen notes directly on the KOT print and kitchen queue panel.",
            },
          ],
        },
        {
          title: "Cashier & Waiter Dashboards",
          bullets: [
            {
              bold: "Built the cashier dashboard",
              rest: " — bill management with itemized order views, date-range-restricted reporting (today/yesterday only via backend date-scope permissions), and modular receipt generation.",
            },
            {
              bold: "Built the waiter dashboard",
              rest: " — multi-mode service management (dine-in, takeaway, delivery), table timer starting on occupy (not order place), and table merge modal with search and sort.",
            },
            {
              bold: "Built the table layout",
              rest: " — major overhaul with ready-to-serve highlight with card pulse animation, table sort and search in merge modal, and table management across 310+ lines.",
            },
          ],
        },
        {
          title: "Date-Scope Enforcement System",
          bullets: [
            {
              bold: "Designed and built a permission-driven date-scope enforcement system",
              rest: " — date-scope.middleware.ts (252 lines) intercepts every tenant-scoped request and clamps date-range query parameters to the caller's allowed window, reading data.range.* permissions from the RBAC system.",
            },
            {
              bold: "Built a timezone-aware business-day utility",
              rest: " — date-scope.util.ts (271 lines) using Intl.DateTimeFormat (DST-correct, unlike hardcoded +5:30 offsets), computing UTC instant boundaries for calendar days in any IANA timezone.",
            },
            {
              bold: "Silent request clamping instead of rejection",
              rest: " — rewrites out-of-range dates instead of rejecting, closing the hole where a user reads history by calling the API directly. Handles both UTC-instant params (timestamp columns) and calendar-date params (@db.Date columns) with path-based detection.",
            },
            {
              bold: "Created 234-line unit test suite",
              rest: " covering today-only users, yesterday+today users, this-week users, custom range clamping, calendar vs instant params, DST edge cases, missing params defaulting to today, and all_time bypass.",
            },
            {
              bold: "Seeded 8 new permissions",
              rest: " — data.range.today, data.range.yesterday, data.range.this_week, data.range.this_month, data.range.last_month, data.range.this_year, data.range.custom, data.range.all_time — mounted globally on the tenantScoped chain covering every endpoint with zero per-feature changes.",
            },
          ],
        },
        {
          title: "Users & Roles Management (Frontend)",
          bullets: [
            {
              bold: "Built staff listing with permission controls",
              rest: " — UsersAndRolesPage.tsx (262 lines) with outlet-specific user views and role-based filtering.",
            },
            {
              bold: "Built manager staff dashboard",
              rest: " — ManagerStaff.tsx (316 lines) with scoped staff management for managers, including multi-company assignment support.",
            },
          ],
        },
        {
          title: "Date-Scope Client Integration",
          bullets: [
            {
              bold: "Built the frontend date-scope permission model",
              rest: " — dateScope.ts (202 lines) reads the user's data.range.* permissions and dynamically restricts date picker options per role — cashiers see only Today/Yesterday; managers see broader ranges; admins see all.",
            },
            {
              bold: "Integrated date-scope into all dashboards",
              rest: " — ManagerDayClose, ManagerExpenses, ManagerOrders, ManagerOverview, ManagerPayments, and ReportsShell all use permission-driven date controls.",
            },
          ],
        },
        {
          title: "Data, Filtering & Infrastructure",
          bullets: [
            {
              bold: "Fixed the outlet pagination bug",
              rest: " — rewrote outletService.getAll() to loop through all API pages; previously, companies with >10 outlets only saw the first 10 in dropdowns.",
            },
            {
              bold: "Built custom date-range filtering",
              rest: " — added date pickers to Owner and Manager dashboards to replace static time periods.",
            },
            {
              bold: "Built date-range-aware Excel export",
              rest: " — export filename and data contents dynamically reflect the selected date range.",
            },
            {
              bold: "Built dining area bulk reorder",
              rest: " — PUT /reorder endpoint accepting an array of IDs to set the exact positional sort order of dining areas/table sections.",
            },
            {
              bold: "Wrote backward-compatible DB migrations",
              rest: " — designed schema changes for tax-inclusive pricing, discount policy, KOT remarks, user termination, and table prefix so existing data gets safe defaults.",
            },
            {
              bold: "Refactored 49 schema files to use centralized API_PREFIX",
              rest: " — replaced all hardcoded /api/v1 route prefixes with environment config, plus updated all E2E tests to use the centralized prefix.",
            },
          ],
        },
        {
          title: "Frontend Components & UI",
          bullets: [
            {
              bold: "Extracted SettingToggle component",
              rest: " — replaced duplicated toggle implementations across Takeaway, Settlement, and Discount settings pages with one shared component.",
            },
            {
              bold: "Built SelectField component",
              rest: " — Radix UI-based select wrapper used consistently across the settings forms.",
            },
            {
              bold: "Built OutletCell component",
              rest: " — expand/collapse row component for displaying outlet-specific settings inside a company-level settings table.",
            },
            {
              bold: "Moved animations to CSS",
              rest: " — took inline pulse animations that were duplicated per-card and moved them to globals.css, adding prefers-reduced-motion support for accessibility.",
            },
          ],
        },
      ],
    },
    {
      name: "KitchenHub",
      description:
        "Full-stack kitchen & inventory management platform with GST compliance (E-Invoice & E-Way Bill), trading features, and enterprise-grade infrastructure.",
      categories: [
        {
          title: "GST Compliance Backend",
          bullets: [
            {
              bold: "Built the entire GST E-Invoice (IRN) and E-Way Bill compliance system",
              rest: " from scratch — integrating with India's Invoice Registration Portal via Masters India GSP, covering IRN generation/cancellation, EWB generation, Part-B updates, and cancellation.",
            },
            {
              bold: "Designed a provider-agnostic Anti-Corruption Layer",
              rest: " — compliance-provider.interface.ts (364 lines) defines vendor-neutral contracts; business code never imports Masters India specifics. New providers can be swapped in by implementing the interface and registering in provider-registry.ts.",
            },
            {
              bold: "Built a 1,809-line compliance service",
              rest: " handling IRN generation with full payload snapshots, EWB from challans, per-tenant credential management with environment switching (sandbox/production), and state machine tracking on EInvoice/EWayBill records.",
            },
            {
              bold: "Implemented DB-backed outbox pattern",
              rest: " (ComplianceJob) with exponential backoff retry via a cron-based worker, plus an hourly reconciliation sweep that detects expired E-Way Bills and auto-updates status.",
            },
            {
              bold: "Built 6 data mapper files",
              rest: " — invoice-to-IRN, challan-to-EWB, EWB-by-IRN mappers, GST state code mapping (80 Indian states), UQC codes for HSN classification, and vehicle type helpers for NIC compliance.",
            },
            {
              bold: "Created 15+ API endpoints",
              rest: " for IRN generation/cancellation, EWB generation/Part-B update/cancellation, EWB-by-IRN, compliance status, credential management, and test connection.",
            },
          ],
        },
        {
          title: "Security & Credential Management",
          bullets: [
            {
              bold: "Implemented AES-256-GCM encryption",
              rest: " for at-rest credential storage (GSP username/password) with versioned ciphertext format (v1:iv:authTag:ciphertext) for future key rotation.",
            },
            {
              bold: "Built a redaction utility",
              rest: " that strips secrets from all payloads before writing to ComplianceRequestLog — nothing secret is ever persisted to audit logs.",
            },
            {
              bold: "Created an automated redaction-coverage audit script",
              rest: " (158 lines) ensuring all logged payloads have secrets redacted, plus 4 npm scripts for compliance testing and connection validation.",
            },
          ],
        },
        {
          title: "Pincode Distance & Geospatial",
          bullets: [
            {
              bold: "Built a pincode-distance calculation service",
              rest: " using OSRM (Open Source Routing Machine) driving distance as primary, with Haversine great-circle formula as fallback — integrated into E-Way Bill generation to auto-fill shipping distance.",
            },
          ],
        },
        {
          title: "GST Compliance Frontend",
          bullets: [
            {
              bold: "Built 7 React components (~1,500+ lines)",
              rest: " for the compliance UI — EInvoicePanel, EWayBillPanel, EwbByIrnPanel (full EWB lifecycle: generate from IRN, Part-B update, cancellation with reason codes), ComplianceDashboard, ComplianceSettings, compliance error block, and API service layer.",
            },
            {
              bold: "Integrated compliance into existing flows",
              rest: " — added panels to invoice detail, challan detail, print layouts (IRN/AckNo/AckDate/QR code), and settings pages across 20+ modified files.",
            },
            {
              bold: "Built GSP credential management UI",
              rest: " with username, password, GSTIN fields, environment toggle (sandbox/production), test connection button, and auto-generate toggles.",
            },
          ],
        },
        {
          title: "System-Wide Dropdown Architecture",
          bullets: [
            {
              bold: "Redesigned the entire dropdown system across 62 files",
              rest: " — created dropdown.config.ts (single source of truth for z-index layers, widths, max-heights, positioning offsets, animation classes) and dropdown.utils.tsx (shared portal wrapper with viewport-aware flip logic).",
            },
            {
              bold: "Solved z-index stacking conflicts",
              rest: " between Radix overlays, custom portalled pickers, and modals — migrated all Radix UI primitives (command, context-menu, dropdown-menu, hover-card, menubar, popover, select, tooltip) to use CSS custom properties.",
            },
            {
              bold: "Consolidated debounce implementations",
              rest: " — extracted a shared useDebounce hook and replaced 11 inline setTimeout/clearTimeout patterns across 10 files, eliminating inconsistent behavior.",
            },
          ],
        },
        {
          title: "Responsive Dashboard & Layout",
          bullets: [
            {
              bold: "Made the dashboard fully responsive",
              rest: " — implemented mobile sidebar with slide-in/out animation, hamburger toggle, backdrop overlay, auto-close on route change, and responsive margin (ml-0 mobile, ml-[260px] desktop).",
            },
            {
              bold: "Fixed dispatch page overflow issues",
              rest: " — added truncate, max-width, break-words, and min-w-0 across 12 dispatch and fleet page files to prevent text overflow in tables and grid layouts.",
            },
          ],
        },
        {
          title: "Category Management & Data Migration",
          bullets: [
            {
              bold: "Built a safe category deletion system",
              rest: " — DELETE endpoints accept migrateProductsToCategoryId / migrateRawMaterialsToCategoryId query params, moving all dependent items to a selected target before soft-delete with full audit logging.",
            },
            {
            bold: "Built the category migration UI",
              rest: " — extended the dependency confirmation dialog with a 4th migration state, category picker dropdown, and \"Migrate & Delete\" button for both product and raw-material categories.",
          },
          ],
        },
        {
          title: "Inventory & Trading",
          bullets: [
            {
              bold: "Implemented weighted average cost (WAC) blending",
              rest: " for inventory valuation — blendWeightedAverage() pure function extracted for reusability, auto-syncs RawMaterial.costPerUnit to blended WAC on every goods receipt, with 8 unit tests covering edge cases (zero stock, negative stock, precision).",
            },
            {
              bold: "Built trading feature UI",
              rest: " — margin floor override checkbox for staff, BLOCK mode enforcement, GRN cache invalidation for raw materials + inventory, and read-only costPerUnit field on raw material forms.",
            },
            {
              bold: "Added E-Way Bill auto-distance fetch",
              rest: " — auto-fetches distance when EWB form opens using getAutoDistance query, auto-fills distance field, resets on form close.",
            },
          ],
        },
      ],
    },
    {
      name: "CAPS24",
      description:
        "Service marketplace backend handling vendor onboarding, partner management, bookings, and production-grade infrastructure.",
      categories: [
        {
          title: "Vendor Authentication & Onboarding",
          bullets: [
            {
              bold: "Designed and implemented secure vendor authentication",
              rest: " with OTP-based login (bcrypt-hashed, rate-limited to 5 requests/hour, 5-attempt verification lock), JWT sessions with 3-day expiry, and a step-by-step onboarding workflow that enforces sequential completion and locks after finalization.",
            },
            {
              bold: "Built middleware for vendor state enforcement",
              rest: " — checks for banned/deleted vendors on every request, blocking access before business logic runs.",
            },
            {
              bold: "Created the full booking API",
              rest: " — CRUD endpoints for creating, listing, and fetching bookings by ID, tied to the onboarding flow.",
            },
          ],
        },
        {
          title: "Partner Management APIs",
          bullets: [
            {
              bold: "Built 4 partner sub-resource modules from scratch",
              rest: " — Partner Skill (composite-key CRUD with certification & experience), Partner Zone (service coverage), Partner Location (geolocation), and Partner Availability (schedule management).",
            },
            {
              bold: "Added Zod validation and Swagger/OpenAPI docs",
              rest: " to every partner endpoint — 12 new files (~1,340 lines) plus 7 partner extension files for profile, payout, and cancellation.",
            },
          ],
        },
        {
          title: "Codebase Modernization",
          bullets: [
            {
              bold: "Migrated entire codebase from CommonJS to ES6 modules",
              rest: " across 69 files — updated all import/export patterns, package.json configuration, and ensured Express 5 compatibility in a single PR.",
            },
            {
              bold: "Implemented project-wide request validation",
              rest: " by building a reusable Zod middleware pipeline and OpenAPI registry, adding type-safe validation and interactive Swagger docs to all 22 route modules.",
            },
          ],
        },
        {
          title: "Address & Slot Configuration",
          bullets: [
            {
              bold: "Created address management and time-slot configuration modules",
              rest: " from scratch — CRUD endpoints, set-default-address logic, public available-slots endpoint, seed data for default slot configurations, and Prisma migrations.",
            },
          ],
        },
        {
          title: "Docker & Observability Stack",
          bullets: [
            {
              bold: "Containerized the backend with a multi-stage Docker build",
              rest: " — Node 24 Alpine with Prisma client generation.",
            },
            {
              bold: "Orchestrated 6 services with Docker Compose",
              rest: " — PostgreSQL 15 (with health check), Redis 7 (BullMQ queues), App container (auto-runs prisma generate → db push → seed → start), Loki 3.0 (log aggregation), Promtail 3.0 (Docker service discovery, JSON log parsing), and Grafana 10.4 (auto-provisioned Loki datasource) — all on a shared bridge network with persistent volumes.",
            },
          ],
        },
      ],
    },
    {
      name: "HRMS",
      description:
        "Enterprise human resource management system with task tracking, daily reporting, role-based access control, and audit infrastructure.",
      categories: [
        {
          title: "Task Management Module",
          bullets: [
            {
              bold: "Built a full-featured task management system",
              rest: " with 9 API endpoints, transactional CRUD (every operation wrapped in Prisma $transaction with automatic timeline entries), soft-delete pattern, and multi-tenant isolation.",
            },
            {
              bold: "Implemented an audit timeline",
              rest: ' that tracks TASK_CREATED, STATUS_CHANGED, COMMENT, and FILE_UPLOADED events with human-readable messages (e.g., "reassigned from John Doe to Jane Smith").',
            },
            {
              bold: "Added file attachment uploads",
              rest: " via Multer middleware (10MB limit, disk storage) with pagination, filtering, search by status/priority/assignee, and full Zod validation + Swagger docs.",
            },
          ],
        },
        {
          title: "Daily Reporting with RBAC",
          bullets: [
            {
              bold: "Designed and implemented a daily reporting system with 3-tier RBAC",
              rest: " — employees manage their own reports, managers review direct reports, admins have full access — enforced through DB role resolution on every request.",
            },
            {
              bold: "Built a state-machine workflow engine",
              rest: " — DRAFT → SUBMITTED → APPROVED (final/locked) | REJECTED → REOPENED → SUBMITTED — with explicit transition validation across 15 REST endpoints.",
            },
            {
              bold: "Engineered time-tracking validation",
              rest: " with overlap detection, per-entry hour limits (max 12h), daily total cap (max 24h via aggregate queries), and CHECK constraints in SQL for data integrity.",
            },
          ],
        },
        {
          title: "Auth Middleware Enhancement",
          bullets: [
            {
              bold: "Enhanced authentication middleware from synchronous to async",
              rest: " — now resolves employeeId, isSuperAdmin, and RBAC role from the database on every request (with email-based fallback), enabling role-aware authorization across the entire application.",
            },
          ],
        },
      ],
    },
  ],
};

const CategoryAccordion = ({
  category,
  defaultOpen,
}: {
  category: Category;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  return (
    <div className="border border-border/60">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left group hover:bg-muted/50 transition-colors"
      >
        <span className="text-sm font-semibold tracking-wide uppercase font-montserrat">
          {category.title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted-foreground"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="px-5 pb-4 pt-1 space-y-2.5">
              {category.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <span className="text-foreground mt-1.5 shrink-0">›</span>
                  <span>
                    <strong className="text-foreground font-medium">{bullet.bold}</strong>
                    {bullet.rest}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <ScrollAnimation>
              <h2 className="section-title text-center mb-2">Experience</h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-20 text-sm">
                A detailed breakdown of what I built, how I built it, and the engineering decisions behind each feature.
              </p>
            </ScrollAnimation>

            {/* Single Experience Header */}
            <ScrollAnimation>
              <div className="flex items-start gap-4 mb-10">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/5 border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <Briefcase size={16} className="text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                    <h3 className="text-base md:text-lg font-semibold font-montserrat">
                      {experience.role}
                    </h3>
                    <span className="text-xs text-muted-foreground mono-text tracking-wide">
                      {experience.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">{experience.company}</span>
                    <span>·</span>
                    <span className="mono-text">{experience.duration}</span>
                    <span>·</span>
                    <span className="mono-text">{experience.location}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Projects */}
            <div className="space-y-12 md:space-y-16 ml-0 md:ml-14">
              {experience.projects.map((project, projectIndex) => (
                <ScrollAnimation key={project.name} delay={projectIndex * 0.1}>
                  <div className={projectIndex > 0 ? "pt-12 md:pt-16 border-t border-border/40" : ""}>
                    <h4 className="text-xl md:text-2xl font-bold font-montserrat mb-1 tracking-tight">
                      {project.name}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      {project.categories.map((cat, catIndex) => (
                        <CategoryAccordion
                          key={cat.title}
                          category={cat}
                          defaultOpen={catIndex === 0}
                        />
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation delay={0.4} className="mt-20 text-center">
              <a
                href="/"
                className="btn-custom mx-auto border border-border hover:bg-muted inline-flex text-sm md:text-base px-4 md:px-6"
              >
                Back to Home <ArrowUpRight size={18} className="ml-2" />
              </a>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;

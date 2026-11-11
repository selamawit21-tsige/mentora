# Mentora — Habesha Community Tutoring & Summer Camp Platform

A modern, culturally tailored educational bridge and management platform for Ethiopian and Eritrean families with Grade 1–6 students, connecting parents with verified tutors and offering rich summer camp packages, character-building incentives, and curriculum-aligned resources in both English and Amharic.

> [!IMPORTANT]
> **User Review & Confirmed Decisions**
> - **Navigation & Role Access**: Quick role-switcher bar at top plus dedicated login views for Parents, Tutors, and Admins.
> - **Default Display Language**: English on first visit with instant Amharic (አማርኛ) toggle switch throughout all dashboards.
> - **Connection & Match Flow**: Parent submits request $\to$ Admin reviews request in queue, confirms verified tutor suitability, assigns schedule, and notifies both parties.
> - **Brand Asset**: Incorporates the official Mentora logo (`/public/assets/aistudio/mentora_962c8b71.jpg`) with deep navy (`#0A2540`) and royal gold (`#E5A93C`) palette.

---

### 1. Overview & Core Concept

Mentora addresses the critical challenge in the diaspora and local Habesha community: finding trusted, culturally grounded, and academically rigorous tutors for elementary students (Grades 1–6). Instead of an uncurated bulletin board, Mentora acts as a managed educational bridge with administrative quality assurance, transparent packages, holistic child development incentives (confidence, ethics, physical activity), and an 8-activity Summer Camp.

#### Key Portals & Target Personas
1. **Parents & Students**:
   - Browse vetted tutors with verifiable academic credentials, experience badges, student grade-level specialties (Grades 1–6), hourly/monthly pricing, and parent reviews.
   - Filter by subject (Math, English, Science, Amharic/Ge'ez basics, Social Studies) and special learning requirements.
   - Submit a direct match request; track assignment progress, attendance, and session notes.
   - Enroll in Private (3,500 ETB/mo) or Group (2,500 ETB/mo) packages, activate 3-child family discount (3rd child free), or advance payment discount (pay 6 months, get 1 month free).
   - Access supplementary reference books (*Agaz Metsaf*), study guides, and Habesha cultural learning tips.
2. **Tutors**:
   - Create and update tutor profile: education credentials, national ID verification status, tutoring rates, availability calendar.
   - Browse student open requests by grade level (1–6), subjects, and special learning needs.
   - Log student growth evaluations across academics, confidence, sports/physical discipline, and ethics/behavior (*Sene-Megbar*).
   - Track performance bonuses (*Temariwochn Yashashale Astemari Bonus*).
3. **Platform Administrator**:
   - Central bridge operator: reviews incoming match requests, validates background/ID credentials of tutors, and pairs parents with the optimal tutor.
   - Manages package subscriptions, reviews summer camp registrations, tracks incentive eligibility (Free summer camp for top improvers, 3-child discounts, 6-month prepays), and logs book/gift distribution.
   - Oversees system metrics, platform disputes, and communication logs.

---

### 2. User Experience & Visual Design

#### Visual Identity & Theme
- **Brand Colors**: 
  - Dominant Neutral Canvas (60%): Clean off-white `#F8FAFC` and soft slate `#F1F5F9` (Dark mode: deep obsidian `#0B1120` and midnight slate `#0F172A`).
  - Structural Surfaces (30%): Pure white card surfaces `#FFFFFF` with crisp hairline dividers `border-slate-200` (`border-slate-800` in dark mode).
  - Accent Tokens (10%): Mentora Deep Royal Navy (`#0A2540`) for authority and structure, accented by Warm Ethiopian Gold (`#D97706` / `#E5A93C`) and Emerald (`#059669`) for achievements and approved states.
- **Typography**: 
  - Display & Headings: `Plus Jakarta Sans` with graceful proportions and balanced headline wraps.
  - Body & Micro-prose: `Plus Jakarta Sans` / `DM Sans` with full UTF-8 support for Ethiopic script (Amharic `አማርኛ` fidel glyphs rendered cleanly).
  - Numerical Values: Monospace tabular numbers (`tabular-nums font-mono`) for all ETB pricing, grade tags, and hourly schedules.
- **Top Bar Contract**:
  - Left Zone: Official Mentora logo (`/public/assets/aistudio/mentora_962c8b71.jpg`) with single clean wordmark `Mentora`.
  - Center Zone: 4 clean text navigation links (`Find Tutors`, `Packages & Pricing`, `Summer Camp`, `Books & Tips`).
  - Right Zone: Amharic/English toggle switch (`EN | አማ`), Role Quick-Switcher dropdown (`Parent View`, `Tutor View`, `Admin Portal`), and Login/Profile action.

#### Comprehensive Package & Incentive Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        MENTORA CORE PACKAGES                                │
├──────────────────────────────────────┬──────────────────────────────────────┤
│ 1. Private 1-on-1 Tutoring           │ 2. Small Group Tutoring (3-5 Kids)   │
│ • 3,500 ETB / month                  │ • 2,500 ETB / month per student      │
│ • Grades 1–6 customized pace         │ • Interactive peer learning          │
│ • In-home or dedicated online        │ • Collaborative problem-solving      │
│ • Weekly parent progress reports     │ • Bi-weekly progress review          │
└──────────────────────────────────────┴──────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────┐
│                    SPECIAL PROMOTIONS & INCENTIVES                          │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. High Improvement Award (Tru Meshashal Lametu Temari):                    │
│    Free Summer Camp admission OR 1 Month tuition fee waived for top         │
│    improvers!                                                               │
│ 2. Tutor Growth Bonus (Temariwochn Yashashale Astemari Bonus):              │
│    Financial cash bonus for tutors who uplift student confidence, sports/   │
│    fitness, and ethical conduct (ሥነ-ምግባር).                                │
│ 3. 3-Child Family Discount (3 Lij Lalew Welej):                             │
│    For families with 3 enrolled children, the 3rd child studies 100% FREE!  │
│ 4. 6-Month Advance Prepay Discount:                                         │
│    Pay 6 months in advance and get 1 month completely free (5 mos cost).    │
│ 5. Agaz Books & Awards (የአጋዥ መጻሕፍት ሽልማቶች):                             │
│    Free reference books, study aids, and achievement gifts for active       │
│    students.                                                                │
└─────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────┐
│                    8-TRACK SUMMER CAMP CURRICULUM                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. Drawing & Sketching (ስዕል)          5. Poetry & Creative Writing (ግጥም)   │
│ 2. Puzzle & Brain Teasers (እንቆቅልሽ)    6. Music & Melodic Rhythms (ሙዚቃ)     │
│ 3. Football & Athletics (እግር ኳስ)     7. Educational Board Games (ጨዋታዎች)  │
│ 4. Visual Design & Crafts (ዲዛይን)     8. Junior Cooking & Life Skills (ምግብ)│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Key Product Decisions & Trade-Offs

1. **Integrated 3-Role Switching vs Strict Multi-Tenant Walls**:
   - *Chosen Approach*: Provide a persistent, top-level role switcher for seamless testing and demonstration between Parent, Tutor, and Admin personas, alongside dedicated realistic login/profile cards for each persona.
   - *Why*: Enables immediate evaluation of cross-role workflows (e.g., Parent submits request $\to$ Admin approves and bridges $\to$ Tutor views assigned student and logs progress).
2. **Admin-in-the-Loop Matching (Bridge Model)**:
   - *Chosen Approach*: Tutors and parents do not directly negotiate unmonitored private chats; parents submit requests with student grade, subject needs, and time slot, which flow to the Admin Matching Queue. The Admin inspects compatibility, confirms background check status, and locks in the connection.
   - *Why*: Fulfills the user's explicit requirement: *"there is connect method in the parent or student page if they need the tutor person... they request and the admin see this and connect it so the system main target is first see the platform and connect or be a bridge"*.
3. **Dual-Language Localization (English & Amharic)**:
   - *Chosen Approach*: Complete dictionary-backed localization store (`translations.ts`) covering all navigation, dashboard titles, package details, promotional terms (with authentic Amharic expressions like *ስነ-ምግባር*, *የአጋዥ መጻሕፍት*, *የክረምት ካምፕ*), and form inputs.
   - *Why*: Essential for Habesha parents and local community members who prefer reading Ethiopian script.
4. **Data Persistence**:
   - *Chosen Approach*: Reactive client-side store seeded with rich, realistic sample data (5 verified tutors with IDs and degrees, 6 student profiles with grade 1-6 specialties, 4 pending bridge connection requests, and catalog of reference books) synced to `localStorage`.
   - *Why*: Instant, zero-latency interactions without network delays, persisting user edits and simulated requests across refreshes.

---

### 4. Technical Architecture & Data Strategy

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                              APP COMPONENT TREE                              │
└──────────────────────────────────────────────────────────────────────────────┘
                                       │
                 ┌─────────────────────┴─────────────────────┐
                 │                                           │
         Top Navigation Bar                  Interactive Role Simulator
    [Logo, Nav Links, Lang Toggle]         [Parent | Tutor | Admin Switcher]
                 │                                           │
 ┌───────────────┼──────────────────────────────┬────────────┴─────────────────┐
 │               │                              │                              │
Parent View   Tutor View                   Admin Console                 Public Catalog
(Student Hub) (Mentor Hub)                 (Bridge Hub)                 (Packages/Camp)
 │               │                              │                              │
 ├── Browse      ├── Student Request Queue      ├── Request Bridge Matcher     ├── 1-on-1 (3,500 ETB)
 │   Tutors      ├── Assigned Students          ├── Tutor ID & Credential Verif├── Group (2,500 ETB)
 ├── Request     ├── Growth & Ethics Logger     ├── Package Subscriptions      ├── 5 Special Promos
 │   Match       ├── Bonus Earnings Tracker     ├── Summer Camp Enrollments    ├── 8 Camp Modules
 └── Book Library└── Profile & Availability     └── Book/Gift Rewards Log      └── Books & Study Tips
```

#### Core Data Entities
- **Tutor**: `id`, `name`, `amharicName`, `photo`, `education`, `university`, `gpa`, `idVerified`, `rating`, `reviewCount`, `hourlyRate`, `monthlyRate`, `subjects`, `gradesSupported` (1-6), `bio`, `characterScore`, `availability`.
- **Student**: `id`, `parentId`, `studentName`, `grade` (1-6), `age`, `school`, `targetSubjects`, `specialNeeds`, `improvementNotes`, `academicGoal`.
- **ConnectionRequest**: `id`, `parentId`, `studentId`, `tutorId`, `status` (`pending` | `admin_approved` | `connected` | `rejected`), `packageType` (`private_3500` | `group_2500` | `summer_camp`), `preferredSchedule`, `adminNotes`, `createdAt`.
- **GrowthLog**: `id`, `studentId`, `tutorId`, `academicScore`, `confidenceScore`, `sportsScore`, `ethicsScore` (ሥነ-ምግባር), `notes`, `bonusAwarded`.
- **AgazBook**: `id`, `title`, `amharicTitle`, `gradeLevel`, `subject`, `description`, `downloadUrl`, `rewardTier`.

---

### 5. Verification & Testing Plan
1. **Interactive Role Switching**: Verify switching seamlessly between Parent, Tutor, and Admin portals updates views without state loss.
2. **Language Switching**: Verify toggling between English and Amharic updates text across headers, package cards, tutor profiles, and form inputs.
3. **Bridge Connection Workflow**:
   - In Parent View: Select a tutor, submit a Match Request for a Grade 1-6 student.
   - Switch to Admin View: See request in Pending Bridge Queue, assign schedule, and approve.
   - Switch to Tutor View: See newly assigned student, review special needs, and log a student evaluation for confidence and ethics.
4. **Package Calculator & Discount Application**: Verify 3rd child free calculation and 6-month upfront prepayment discount calculation (pay 5 months, get 6).
5. **Responsiveness & Aesthetics**: Ensure flawless layout on 1440px desktop as well as tablet and mobile viewports.

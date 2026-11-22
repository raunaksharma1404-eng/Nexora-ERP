// Enterprise Mock Data for NEXORA ERP Consultancy & Modules

export const ERP_PLATFORMS = [
  {
    id: 'sap',
    name: 'SAP',
    fullName: 'SAP S/4HANA & SAP Business One',
    shortName: 'SAP',
    category: 'Tier-1 Enterprise & Scaled Mid-Market',
    description: 'High-throughput transactional ERP engine built on in-memory computing, engineered for complex multi-plant manufacturing, global supply chain traceability, and rigorous regulatory compliance.',
    badge: 'Enterprise Core Practice',
    stats: {
      deployments: '120+',
      avgGoLive: '4.5 Months',
      userSatisfaction: '98.4%',
    },
    accentColor: '#008FD3',
    capabilities: [
      'Material Requirements Planning (MRP II) with real-time capacity leveling',
      'Advanced Warehouse Management (EWM) with automated slotting & cross-docking',
      'Plant Maintenance (PM) & Shop Floor Execution (MES) telemetry',
      'Multi-currency global financial consolidation & statutory compliance',
      'BAPI, OData, and Core Data Services (CDS) extensible API layer'
    ],
    features: [
      'Material Requirements Planning (MRP II) with real-time capacity leveling',
      'Advanced Warehouse Management (EWM) with automated slotting & cross-docking',
      'Plant Maintenance (PM) & Shop Floor Execution (MES) telemetry',
      'Multi-currency global financial consolidation & statutory compliance',
      'BAPI, OData, and Core Data Services (CDS) extensible API layer'
    ],
    suitableBusinesses: [
      'Multi-national discrete & process manufacturing enterprises ($50M+ to $1B+)',
      'High-volume distributors requiring advanced batch, serial, and lot tracking',
      'Companies with complex multi-company, multi-currency, and global statutory tax requirements',
      'Businesses requiring deep shop floor machine-level integration and ISO/FDA audit readiness'
    ],
    businessBenefits: [
      {
        title: '30-40% Faster Production Cycles',
        description: 'Automated MRP and finite scheduling minimize idle machine time and optimize raw material staging.'
      },
      {
        title: 'Unified Global Financial Ledger',
        description: 'Single-source-of-truth accounting cuts month-end financial closing cycles from weeks to days.'
      },
      {
        title: 'Comprehensive Traceability',
        description: 'End-to-end audit trails ensure rapid mock recalls and compliance with strict industrial standards.'
      }
    ]
  },
  {
    id: 'oracle-netsuite',
    name: 'Oracle NetSuite',
    fullName: 'Oracle NetSuite ERP & SuiteCloud',
    shortName: 'Oracle NetSuite',
    category: 'Cloud-Native Enterprise Suite',
    description: 'Unified cloud management suite designed for fast-scaling manufacturing, wholesale distribution, and multi-subsidiary global businesses needing rapid deployment and agile customization.',
    badge: 'Cloud ERP Practice',
    stats: {
      deployments: '180+',
      avgGoLive: '3.2 Months',
      userSatisfaction: '99.1%',
    },
    accentColor: '#E65100',
    capabilities: [
      'Multi-Entity OneWorld consolidation across subsidiaries and currencies',
      'Work Orders, Assemblies & demand-driven replenishment planning',
      'Automated Order-to-Cash (O2C) and Procure-to-Pay (P2P) pipelines',
      'Integrated B2B Wholesale Customer Portals & EDI connectors',
      'Customizable SuiteScript 2.1, SuiteTalk REST web services, and SuiteFlow'
    ],
    features: [
      'Multi-Entity OneWorld consolidation across subsidiaries and currencies',
      'Work Orders, Assemblies & demand-driven replenishment planning',
      'Automated Order-to-Cash (O2C) and Procure-to-Pay (P2P) pipelines',
      'Integrated B2B Wholesale Customer Portals & EDI connectors',
      'Customizable SuiteScript 2.1, SuiteTalk REST web services, and SuiteFlow'
    ],
    suitableBusinesses: [
      'High-growth mid-market manufacturers & wholesale importers ($10M to $250M)',
      'Multi-subsidiary businesses expanding internationally needing rapid consolidation',
      'Organizations wanting 100% cloud without maintaining on-premises server infrastructure',
      'Distributors with heavy omni-channel B2B eCommerce and retail EDI requirements'
    ],
    businessBenefits: [
      {
        title: 'Rapid Deployment & Fast ROI',
        description: 'Go live in 3 to 4 months with pre-configured industry workflows, dramatically lowering total cost of ownership (TCO).'
      },
      {
        title: 'Real-Time Inventory Visibility',
        description: 'Unified inventory across multiple warehouses prevents stockouts and optimizes working capital.'
      },
      {
        title: 'Agile Custom Workflows',
        description: 'Easily adapt approval hierarchies, custom fields, and automated alerts without writing fragile legacy code.'
      }
    ]
  },
  {
    id: 'dynamics-365',
    name: 'Microsoft Dynamics 365',
    fullName: 'Dynamics 365 Finance & Supply Chain / Business Central',
    shortName: 'Dynamics 365',
    category: 'Intelligent Connected Cloud',
    description: 'Modular enterprise ERP deeply embedded within Microsoft Power Platform, Azure AI, and Microsoft 365, combining robust operational execution with familiar collaboration tools.',
    badge: 'Connected Cloud Practice',
    stats: {
      deployments: '140+',
      avgGoLive: '3.8 Months',
      userSatisfaction: '97.9%',
    },
    accentColor: '#0078D4',
    capabilities: [
      'Discrete, lean, and process manufacturing execution in a single engine',
      'AI-powered demand forecasting and intelligent safety-stock buffers',
      'Native integration with Power BI, Power Apps, and Microsoft 365 / Excel',
      'Asset Management with predictive maintenance and IoT sensor ingestion',
      'Azure Data Lake integration for deep enterprise data warehousing'
    ],
    features: [
      'Discrete, lean, and process manufacturing execution in a single engine',
      'AI-powered demand forecasting and intelligent safety-stock buffers',
      'Native integration with Power BI, Power Apps, and Microsoft 365 / Excel',
      'Asset Management with predictive maintenance and IoT sensor ingestion',
      'Azure Data Lake integration for deep enterprise data warehousing'
    ],
    suitableBusinesses: [
      'Enterprises heavily invested in the Microsoft technology stack (Azure, Office 365, Teams)',
      'Mid-market to large industrial manufacturers with mixed discrete and batch operations',
      'Distributors needing rich self-service analytics and mobile Power Apps on the warehouse floor',
      'Organizations transitioning from legacy Dynamics AX or NAV to modern cloud architectures'
    ],
    businessBenefits: [
      {
        title: 'Familiar User Adoption',
        description: 'Intuitive Excel and Teams integration shortens user learning curves and boosts cross-departmental buy-in.'
      },
      {
        title: 'Low-Code Agility with Power Platform',
        description: 'Empower operational teams to build custom mobile barcode scanners and inspection forms rapidly.'
      },
      {
        title: 'AI-Enhanced Supply Planning',
        description: 'Predictive analytics balance lead times, supplier performance, and shipping costs to safeguard deliveries.'
      }
    ]
  }
];

export const DETAILED_SERVICES = [
  {
    id: 'implementation',
    title: 'ERP Implementation',
    icon: 'Rocket',
    shortDescription: 'Full-lifecycle deployment from architecture discovery and blueprinting to sandbox validation, system configuration, and flawless go-live cutover.',
    detailedSummary: 'We guide manufacturing and wholesale organizations through the entire implementation journey. Our certified consultants prevent project drift by following a structured, milestone-driven framework that balances out-of-the-box best practices with your unique business differentiators.',
    benefits: [
      'Guaranteed zero-downtime cutover strategy protecting production and dispatch schedules',
      'Pre-configured industry templates that reduce implementation time by up to 35%',
      'Rigorous User Acceptance Testing (UAT) ensuring 100% stakeholder confidence before launch',
      'Comprehensive change management reducing resistance and speeding user proficiency'
    ],
    deliverables: ['Solution Architecture Blueprint', 'Sandbox & Validation Pilots', 'Cutover & Go-Live Governance'],
  },
  {
    id: 'customization',
    title: 'ERP Customization',
    icon: 'Code2',
    shortDescription: 'Tailoring business logic, specialized industrial modules, and automated workflow matrices to match your competitive operational advantages.',
    detailedSummary: 'Standard ERP workflows cannot capture every unique business rule. We engineer bespoke extensions that respect vendor upgrade paths — whether writing custom SAP BAPIs, NetSuite SuiteScripts 2.1, or Dynamics 365 X++ plugins — ensuring your modifications survive future cloud updates.',
    benefits: [
      'Custom logic built to survive future platform version updates without code breakage',
      'Automated approval matrices and escalation triggers eliminating email-based bottlenecks',
      'Customized shop floor screens designed specifically for warehouse barcode and RFID scanners',
      'Industry-specific calculation engines for complex BOM scrap rates and landed cost duties'
    ],
    deliverables: ['Custom SAP BAPIs & ABAP Workflows', 'SuiteScript 2.1 & SuiteCloud Apps', 'Dynamics 365 X++ & PowerApps'],
  },
  {
    id: 'integration',
    title: 'ERP Integration',
    icon: 'Network',
    shortDescription: 'Unifying your ERP with external WMS, eCommerce platforms, CRMs, shop-floor MES machines, and automated EDI trading partner gateways.',
    detailedSummary: 'Eliminate isolated data silos across your enterprise. We design and build robust bi-directional API pipelines, enterprise middleware, and automated EDI 850/856/810 gateways connecting your central ERP to warehouse management systems, CRM platforms (Salesforce/HubSpot), and eCommerce channels.',
    benefits: [
      'Real-time bi-directional data synchronization eliminating double-entry and manual errors',
      'Automated EDI processing removing chargebacks and speeding retail partner fulfillment',
      'Direct IoT sensor and machine ingestion from shop floor PLCs for accurate WIP tracking',
      'Fault-tolerant queue architecture preventing transaction drops during network hiccups'
    ],
    deliverables: ['REST/GraphQL Middleware', 'EDI 850/856/810 Automated Gateways', 'IoT Sensor Shop Floor Ingestion'],
  },
  {
    id: 'data-migration',
    title: 'Data Migration',
    icon: 'Database',
    shortDescription: 'Secure extraction, cleansing, transformation, and validation of legacy data into your new ERP schema with zero data loss.',
    detailedSummary: 'Data migration is where many ERP projects stumble. Nexora uses automated ETL scripts and validation tools to cleanse decades of historical inventory, customer master data, open purchase orders, and general ledger balances from legacy systems (AS400, QuickBooks, on-premises ERPs) into modern structures.',
    benefits: [
      'Automated deduplication and cleansing of messy legacy master records before ingestion',
      'Field-by-field verification ensuring mathematical balance between legacy and target GL accounts',
      'Iterative mock migration runs verifying data integrity prior to cutover weekend',
      'Historical transactional archiving ensuring regulatory and tax compliance retention'
    ],
    deliverables: ['Automated Historical Data Scrubbing', 'Parallel Run Validation', 'Data Audit Reconciliation Reports'],
  },
  {
    id: 'business-process-consulting',
    title: 'Business Process Consulting',
    icon: 'Compass',
    shortDescription: 'Evaluating and optimizing existing workflows to eliminate operational waste before configuring software.',
    detailedSummary: 'Automating an inefficient process only creates automated inefficiency. Our senior industrial analysts conduct value-stream mapping workshops across your procurement, production, inventory, and finance teams to streamline operations and align with global ERP best practices before software configuration begins.',
    benefits: [
      'Elimination of redundant operational steps and shadow spreadsheet systems',
      'Standardization of procurement and inventory processes across multiple plants and hubs',
      'Clear definition of Key Performance Indicators (KPIs) mapped to real-time ERP dashboards',
      'Executive alignment on operational objectives and ROI milestones'
    ],
    deliverables: ['Current vs. Target State Process Maps', 'Operational Gap Analysis', 'Standard Operating Procedures (SOPs)'],
  },
  {
    id: 'training-and-support',
    title: 'Training and Support',
    icon: 'LifeBuoy',
    shortDescription: 'Role-based end-user training, administrator enablement, and 24/7 post-launch managed support with strict SLA response times.',
    detailedSummary: 'An ERP is only as powerful as the people using it every day. We provide tailored, hands-on training for purchasing agents, warehouse staff, production managers, and financial controllers, accompanied by dedicated 24/7 hypercare support to ensure questions are resolved in minutes, not days.',
    benefits: [
      'Role-based training modules focused on specific daily operational tasks rather than theory',
      'Customized interactive reference guides and recorded video walkthroughs for onboarding',
      '24/7 SLA-backed technical support desk providing 15-minute response for critical issues',
      'Quarterly release testing and continuous feature enhancement advisory'
    ],
    deliverables: ['Role-Specific Training Playbooks', '15-Minute Critical SLA Support', 'Continuous Feature Roadmap Sessions'],
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: "Nexora's team migrated our multi-plant manufacturing operations to SAP S/4HANA without a single hour of unplanned downtime. Their domain knowledge in discrete manufacturing is unmatched.",
    author: "Marcus Vance",
    role: "Chief Operating Officer",
    company: "Apex Precision Manufacturing",
    industry: "Industrial Equipment",
    stats: "34% reduction in order lead times",
  },
  {
    quote: "As a wholesale distributor with 18 distribution hubs, NetSuite OneWorld implemented by Nexora transformed our stock visibility and saved us over $1.4M in inventory holding costs in year one.",
    author: "Elena Rostova",
    role: "VP of Global Supply Chain",
    company: "TransGlobal Logistics & Wholesale",
    industry: "Wholesale & Distribution",
    stats: "99.4% on-time order fulfillment",
  },
  {
    quote: "Their Dynamics 365 and Power Platform integration gave our field teams and shop managers a real-time dashboard that eliminated our manual spreadsheet chaos.",
    author: "David Sterling",
    role: "Chief Information Officer",
    company: "Sterling Chemical Dynamics",
    industry: "Process Manufacturing",
    stats: "2.8x faster month-end closing",
  }
];

export const MOCK_DASHBOARD_METRICS = {
  totalRevenue: 28450000,
  revenueChange: '+14.2%',
  activeOrders: 1420,
  ordersChange: '+8.6%',
  inventoryValuation: 16820000,
  stockTurnover: '6.4x',
  operationalEfficiency: 96.8,
  efficiencyChange: '+3.1%',
  connectedNodes: [
    { name: 'Chicago Central Plant (SAP S/4HANA)', status: 'Operational', ping: '18ms' },
    { name: 'Rotterdam Distribution Center (NetSuite)', status: 'Operational', ping: '34ms' },
    { name: 'Dallas Assembly Hub (Dynamics 365)', status: 'Operational', ping: '22ms' },
    { name: 'Singapore Logistics Gateway (API Hub)', status: 'Operational', ping: '88ms' },
  ]
};

export const MOCK_INVENTORY_ITEMS = [
  {
    id: 'SKU-8921',
    name: 'Industrial CNC Hydraulic Actuator',
    category: 'Machinery Components',
    platform: 'SAP S/4HANA',
    warehouse: 'Warehouse A (Chicago)',
    quantity: 420,
    unitPrice: 650.00,
    reorderPoint: 150,
    status: 'In Stock',
  },
  {
    id: 'SKU-7740',
    name: 'Precision Micro-Alloy Bearings (Pack 50)',
    category: 'Hardware',
    platform: 'Oracle NetSuite',
    warehouse: 'Warehouse B (Dallas)',
    quantity: 85,
    unitPrice: 120.00,
    reorderPoint: 100,
    status: 'Low Stock',
  },
  {
    id: 'SKU-9012',
    name: 'Programmable Logic Controller (PLC-V4)',
    category: 'Electronics & Automation',
    platform: 'MS Dynamics 365',
    warehouse: 'Warehouse A (Chicago)',
    quantity: 310,
    unitPrice: 940.00,
    reorderPoint: 80,
    status: 'In Stock',
  },
  {
    id: 'SKU-6523',
    name: 'High-Pressure Fluoropolymer Seals',
    category: 'Raw Materials',
    platform: 'SAP S/4HANA',
    warehouse: 'Warehouse C (Rotterdam)',
    quantity: 1240,
    unitPrice: 18.50,
    reorderPoint: 400,
    status: 'In Stock',
  },
  {
    id: 'SKU-4419',
    name: 'Optoelectronic Safety Curtains (24V)',
    category: 'Electronics & Automation',
    platform: 'Oracle NetSuite',
    warehouse: 'Warehouse B (Dallas)',
    quantity: 12,
    unitPrice: 1480.00,
    reorderPoint: 25,
    status: 'Critical Reorder',
  },
  {
    id: 'SKU-3128',
    name: 'Heavy-Duty Conveyor Roller Assembly',
    category: 'Machinery Components',
    platform: 'MS Dynamics 365',
    warehouse: 'Warehouse A (Chicago)',
    quantity: 580,
    unitPrice: 215.00,
    reorderPoint: 200,
    status: 'In Stock',
  }
];

export const MOCK_ORDERS = [
  {
    id: 'ORD-2026-981',
    customer: 'Apex Precision Manufacturing',
    destination: 'Detroit, MI',
    erpRef: 'SAP-SO-77412',
    date: '2026-11-21',
    itemsCount: 14,
    total: 38400.00,
    status: 'Processing',
    priority: 'High',
  },
  {
    id: 'ORD-2026-980',
    customer: 'TransGlobal Wholesale Logistics',
    destination: 'Houston, TX',
    erpRef: 'NS-ORD-44910',
    date: '2026-11-21',
    itemsCount: 48,
    total: 112500.00,
    status: 'Shipped',
    priority: 'Normal',
  },
  {
    id: 'ORD-2026-979',
    customer: 'Sterling Chemical Dynamics',
    destination: 'Baton Rouge, LA',
    erpRef: 'D365-PO-33019',
    date: '2026-11-20',
    itemsCount: 6,
    total: 19800.00,
    status: 'Delivered',
    priority: 'Normal',
  },
  {
    id: 'ORD-2026-978',
    customer: 'Nordic Industrial Automation',
    destination: 'Rotterdam, NL',
    erpRef: 'SAP-SO-77408',
    date: '2026-11-20',
    itemsCount: 32,
    total: 84200.00,
    status: 'Pending Approval',
    priority: 'Urgent',
  },
  {
    id: 'ORD-2026-977',
    customer: 'Pacific Rim Supply Consortium',
    destination: 'Seattle, WA',
    erpRef: 'NS-ORD-44901',
    date: '2026-11-19',
    itemsCount: 22,
    total: 54100.00,
    status: 'Delivered',
    priority: 'Normal',
  }
];

export const CONSULTING_SERVICES = DETAILED_SERVICES;

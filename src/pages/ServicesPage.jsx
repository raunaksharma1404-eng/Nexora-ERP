import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Code2, 
  Network, 
  Database, 
  Compass, 
  LifeBuoy, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Layers, 
  ChevronRight, 
  Plus, 
  Minus,
  PhoneCall,
  Check,
  Server,
  FileCheck2,
  Workflow,
  HelpCircle,
  BarChart3
} from 'lucide-react';
import Button from '../components/common/Button';
import Card, { CardHeader } from '../components/common/Card';
import Badge from '../components/common/Badge';
import { DETAILED_SERVICES } from '../data/mockData';

export const ServicesPage = () => {
  const [activeServiceId, setActiveServiceId] = useState('implementation');
  const [openFaq, setOpenFaq] = useState(null);

  const iconMap = {
    Rocket: Rocket,
    Code2: Code2,
    Network: Network,
    Database: Database,
    Compass: Compass,
    LifeBuoy: LifeBuoy,
  };

  const activeService = DETAILED_SERVICES.find(s => s.id === activeServiceId) || DETAILED_SERVICES[0];

  const faqs = [
    {
      q: 'How long does a typical ERP implementation take for a manufacturing plant?',
      a: 'Depending on the organization scale and customization scope, a standard SAP S/4HANA or Dynamics 365 implementation spans 4 to 6 months, while Oracle NetSuite deployments typically go live in 3 to 4 months. Our proven 5-stage blueprinting and prototype methodology eliminates scope creep to ensure strict milestone adherence.'
    },
    {
      q: 'How do you guarantee zero downtime during ERP cutover?',
      a: 'We use a dual-run parallel execution strategy. Before decommissioning any legacy system (such as AS400 or on-premise QuickBooks), we conduct end-to-end sandbox simulations with live historical data, execute mock weekend cutovers, and maintain real-time automated data synchronization between old and new systems until full operational sign-off.'
    },
    {
      q: 'Can Nexora build custom workflows that survive cloud ERP vendor upgrades?',
      a: 'Yes. We strictly adhere to clean-core architecture. Custom business logic is written using official extensibility frameworks — such as SAP Core Data Services (CDS) & BAPIs, NetSuite SuiteScript 2.1, and Microsoft Power Platform connectors — ensuring customizations remain completely intact across future automatic SaaS releases.'
    },
    {
      q: 'Do you assist with legacy master data cleansing prior to migration?',
      a: 'Yes, data cleansing is an integral deliverable of our Data Migration service. We provide automated deduplication scripts, validate chart of accounts structures, normalize part descriptions, and mathematically reconcile general ledger balances before any data enters the production tenant.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* ========================================================= */}
      {/* 1. HERO & BREADCRUMBS                                     */}
      {/* ========================================================= */}
      <section className="bg-brand-navy text-white pt-12 pb-20 border-b border-enterprise-800 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-enterprise-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue font-semibold">Services</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <Badge variant="navy" className="bg-brand-blue text-white">
              End-to-End Enterprise Consulting & Engineering
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Specialized ERP Consulting Services for High-Growth Enterprises
            </h1>

            <p className="text-base sm:text-lg text-enterprise-300 leading-relaxed">
              We provide full-lifecycle technical and advisory expertise across SAP, Oracle NetSuite, and Microsoft Dynamics 365 — transforming complex manufacturing plant floors and wholesale distribution hubs into synchronized operational powerhouses.
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a href="#services-grid" className="text-xs px-3.5 py-1.5 rounded-lg bg-enterprise-800/80 text-enterprise-200 border border-enterprise-700 hover:bg-enterprise-700 transition-colors">
              Explore 6 Core Services &darr;
            </a>
            <Link to="/solutions" className="text-xs px-3.5 py-1.5 rounded-lg bg-enterprise-800/80 text-enterprise-200 border border-enterprise-700 hover:bg-enterprise-700 transition-colors">
              Compare ERP Platforms &rarr;
            </Link>
            <Link to="/contact" className="text-xs px-3.5 py-1.5 rounded-lg bg-brand-blue text-white hover:bg-brand-blue-hover transition-colors font-medium">
              Schedule Scoping Call &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THE 6 DETAILED SERVICE CARDS                           */}
      {/* ========================================================= */}
      <section id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="primary">Core Offerings</Badge>
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            Comprehensive ERP Services Built for Scale
          </h2>
          <p className="text-sm text-enterprise-600">
            Every service is led by senior enterprise architects with hands-on domain experience in manufacturing BOMs, shop floor routing, inventory control, and financial governance.
          </p>
        </div>

        {/* 6 Services Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Rocket;
            return (
              <Card 
                key={service.id} 
                hoverEffect 
                className="flex flex-col justify-between border-t-4 border-t-brand-blue bg-white shadow-subtle hover:shadow-card transition-all"
              >
                <div className="space-y-4">
                  {/* Icon and badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="erp" size="sm">
                      Enterprise Tier
                    </Badge>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-enterprise-600 mt-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Relevant Benefits Section */}
                  <div className="pt-4 border-t border-enterprise-100 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Relevant Business Benefits:</span>
                    </p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-enterprise-700 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 mt-6 border-t border-enterprise-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-enterprise-500">
                    SLA-Backed Delivery
                  </span>
                  <Link to="/contact">
                    <Button variant="outline" size="sm">
                      Inquire Scope
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. DEEP DIVE SERVICE INSPECTOR & TECHNICAL DELIVERABLES   */}
      {/* ========================================================= */}
      <section className="bg-enterprise-50 py-16 border-y border-enterprise-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="primary">Architectural Details</Badge>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              Interactive Service Scope Inspector
            </h2>
            <p className="text-sm text-enterprise-600">
              Select a service below to inspect our detailed engineering deliverables, methodologies, and technical governance protocols.
            </p>
          </div>

          {/* Interactive Service Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {DETAILED_SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveServiceId(s.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeServiceId === s.id
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-white text-enterprise-700 border border-enterprise-200 hover:bg-enterprise-100'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Selected Service Focus Box */}
          <Card className="bg-white p-6 sm:p-10 border border-enterprise-200 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">Active Service Focus</Badge>
                  <span className="text-xs text-enterprise-500">Milestone Driven Scope</span>
                </div>

                <h3 className="text-2xl font-bold text-brand-navy">{activeService.title}</h3>
                
                <p className="text-sm text-enterprise-600 leading-relaxed">
                  {activeService.detailedSummary}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                    Key Technical Deliverables Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-enterprise-50 border border-enterprise-200 flex items-center gap-2.5 text-xs text-brand-navy font-medium">
                        <FileCheck2 className="w-4 h-4 text-brand-blue shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link to="/contact">
                    <Button variant="primary" size="md" icon={PhoneCall}>
                      Request Consultation for {activeService.title}
                    </Button>
                  </Link>
                  <Link to="/solutions" className="text-xs font-semibold text-brand-blue hover:underline">
                    View Supported Platforms &rarr;
                  </Link>
                </div>
              </div>

              {/* Side Metric Panel */}
              <div className="lg:col-span-5 bg-enterprise-900 text-white rounded-xl p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-enterprise-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                    Service Standards
                  </span>
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-enterprise-800/60 border border-enterprise-700">
                    <p className="text-[11px] font-semibold uppercase text-enterprise-400">Governance</p>
                    <p className="text-sm font-bold text-white mt-0.5">Dual-Approval Cutover Sign-Off</p>
                    <p className="text-xs text-enterprise-300 mt-1">Both technical and functional stakeholders must certify readiness.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-enterprise-800/60 border border-enterprise-700">
                    <p className="text-[11px] font-semibold uppercase text-enterprise-400">Response SLA</p>
                    <p className="text-sm font-bold text-brand-green mt-0.5">15-Minute Priority Response</p>
                    <p className="text-xs text-enterprise-300 mt-1">Direct escalation pipeline to lead system architects.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-enterprise-800/60 border border-enterprise-700">
                    <p className="text-[11px] font-semibold uppercase text-enterprise-400">Confidentiality</p>
                    <p className="text-sm font-bold text-amber-400 mt-0.5">Binding Mutual NDA Protection</p>
                    <p className="text-xs text-enterprise-300 mt-1">All proprietary formulas, BOMs, and margins remain strictly protected.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. ENGAGEMENT TIER MODELS                                 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="primary">Engagement Models</Badge>
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            Flexible Delivery Models Designed for Your Team
          </h2>
          <p className="text-sm text-enterprise-600">
            Whether you need turnkey project ownership, specialized technical augmentation, or 24/7 managed support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <Badge variant="default">Turnkey Project</Badge>
              <h3 className="text-lg font-bold text-brand-navy">Full-Lifecycle Delivery</h3>
              <p className="text-xs text-enterprise-600 leading-relaxed">
                Complete end-to-end accountability from discovery workshops and sandbox validation to data migration, custom middleware, and go-live cutover.
              </p>
              <ul className="space-y-2 text-xs text-enterprise-700 pt-2 border-t border-enterprise-100">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green" /> Dedicated Project Manager & Lead Architect</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green" /> Guaranteed Milestone Delivery Dates</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green" /> Complete Training & Documentation Pack</li>
              </ul>
            </div>
            <Link to="/contact">
              <Button variant="outline" size="sm" className="w-full justify-center">
                Scope Turnkey Project
              </Button>
            </Link>
          </Card>

          <Card className="flex flex-col justify-between space-y-6 border-2 border-brand-blue shadow-card relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="primary">Most Popular</Badge>
                <span className="text-[10px] uppercase font-bold text-brand-blue">Agile Model</span>
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Technical Co-Delivery</h3>
              <p className="text-xs text-enterprise-600 leading-relaxed">
                Embed our certified SAP, NetSuite, or Dynamics engineers directly within your internal IT or business operations team to accelerate delivery.
              </p>
              <ul className="space-y-2 text-xs text-enterprise-700 pt-2 border-t border-enterprise-100">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green" /> Senior SuiteScript / BAPI / X++ Specialists</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green" /> EDI & WMS Middleware Integration Focus</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green" /> Weekly Sprint Reviews & Knowledge Transfer</li>
              </ul>
            </div>
            <Link to="/contact">
              <Button variant="primary" size="sm" className="w-full justify-center">
                Engage Technical Co-Delivery
              </Button>
            </Link>
          </Card>

          <Card className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <Badge variant="default">Continuous SLA</Badge>
              <h3 className="text-lg font-bold text-brand-navy">24/7 Managed Hypercare</h3>
              <p className="text-xs text-enterprise-600 leading-relaxed">
                Post-launch operational peace of mind with continuous telemetry monitoring, quarterly vendor release regression testing, and rapid support ticketing.
              </p>
              <ul className="space-y-2 text-xs text-enterprise-700 pt-2 border-t border-enterprise-100">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green" /> 15-Minute Critical Severity Response</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green" /> Scheduled Database & Performance Tuning</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green" /> Quarterly Functional Feature Enhancements</li>
              </ul>
            </div>
            <Link to="/contact">
              <Button variant="outline" size="sm" className="w-full justify-center">
                Inquire Support SLA
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION               */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="primary">FAQ</Badge>
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            Frequently Asked Service Questions
          </h2>
          <p className="text-sm text-enterprise-600">
            Common questions regarding our implementation timelines, cutover methodology, and clean-core development standards.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <Card key={idx} padding="none" className="overflow-hidden border border-enterprise-200">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-enterprise-50 transition-colors"
              >
                <span className="text-sm font-bold text-brand-navy">{faq.q}</span>
                <span className="p-1 rounded-full bg-enterprise-100 text-enterprise-600 shrink-0">
                  {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-enterprise-600 leading-relaxed border-t border-enterprise-100 pt-3">
                  {faq.a}
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CALL TO ACTION                                         */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-enterprise-800">
          <div className="space-y-3 max-w-xl">
            <Badge variant="navy" className="bg-brand-blue text-white">Next Steps</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Scope Your ERP Transformation?
            </h2>
            <p className="text-xs sm:text-sm text-enterprise-300 leading-relaxed">
              Book a 45-minute discovery session with our Principal ERP Architects. We will evaluate your current system bottlenecks, data migration needs, and target timelines.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link to="/contact">
              <Button variant="primary" size="lg" icon={PhoneCall} className="w-full sm:w-auto justify-center">
                Book Scoping Session
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" size="lg" className="border-enterprise-700 text-white hover:bg-enterprise-800 w-full sm:w-auto justify-center">
                Explore ERP Platforms
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;

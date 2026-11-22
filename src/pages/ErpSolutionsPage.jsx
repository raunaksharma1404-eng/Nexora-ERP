import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Cpu, 
  Workflow, 
  CheckCircle2, 
  ShieldCheck, 
  Server, 
  Layers, 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  PhoneCall, 
  FileCheck, 
  Check, 
  BarChart3,
  Factory,
  Boxes,
  HelpCircle,
  Zap
} from 'lucide-react';
import Button from '../components/common/Button';
import Card, { CardHeader } from '../components/common/Card';
import Badge from '../components/common/Badge';
import { ERP_PLATFORMS } from '../data/mockData';

export const ErpSolutionsPage = () => {
  const [activePlatformId, setActivePlatformId] = useState('sap');

  const comparisonRows = [
    { 
      metric: 'Target Business Scale', 
      sap: 'Large Enterprise & Scaled Mid-Market ($50M – $1B+)', 
      netsuite: 'Fast-Growing Mid-Market & Scale-Ups ($10M – $250M)', 
      d365: 'Mid-Market to Large Multi-Plant Enterprises ($25M – $750M)' 
    },
    { 
      metric: 'Primary Architecture Model', 
      sap: 'In-Memory (S/4HANA Cloud / Private Cloud / Hybrid)', 
      netsuite: 'Pure Multi-Tenant Cloud SaaS', 
      d365: 'Microsoft Azure Cloud / Hybrid Dataverse' 
    },
    { 
      metric: 'Manufacturing Depth', 
      sap: 'Deep Discrete, Process & Shop Floor MES (MRP II)', 
      netsuite: 'Advanced Assemblies, Work Orders & Demand Routing', 
      d365: 'Comprehensive Discrete, Process & Lean Manufacturing' 
    },
    { 
      metric: 'Financial Consolidation', 
      sap: 'Robust Multi-GAAP, Global Statutory Tax & FI/CO', 
      netsuite: 'Industry-Leading OneWorld Multi-Subsidiary Engine', 
      d365: 'Comprehensive Global Financials & Automated Ledgers' 
    },
    { 
      metric: 'Customization & Extensibility', 
      sap: 'ABAP RESTful, Core Data Services (CDS), OData APIs', 
      netsuite: 'SuiteScript 2.1 (JavaScript), SuiteTalk REST', 
      d365: 'X++, OData, Power Platform / Azure Microservices' 
    },
    { 
      metric: 'Typical Implementation Timeline', 
      sap: '4.5 to 7 Months', 
      netsuite: '3.2 to 5 Months', 
      d365: '3.8 to 6 Months' 
    },
    { 
      metric: 'Ideal Vertical Fit', 
      sap: 'Heavy Manufacturing, Automotive, Chemicals, High-Tech', 
      netsuite: 'Wholesale Distribution, Importers, Fast-Growth B2B', 
      d365: 'Industrial Equipment, Consumer Goods, Mixed Fabrication' 
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* ========================================================= */}
      {/* 1. HERO & BREADCRUMBS                                     */}
      {/* ========================================================= */}
      <section className="bg-brand-navy text-white pt-12 pb-20 border-b border-enterprise-800 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center gap-2 text-xs text-enterprise-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue font-semibold">ERP Solutions</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <Badge variant="navy" className="bg-brand-blue text-white">
              Independent ERP Advisory & Architecture
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Tier-1 ERP Solutions: SAP, Oracle NetSuite & Microsoft Dynamics 365
            </h1>

            <p className="text-base sm:text-lg text-enterprise-300 leading-relaxed">
              Choosing an ERP is a pivotal multi-year business decision. Nexora provides unbiased architectural evaluation, turnkey deployment, and clean-core engineering across the world's leading enterprise platforms.
            </p>
          </div>

          {/* Quick Platform Anchor Links */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a href="#sap-section" className="text-xs px-3.5 py-1.5 rounded-lg bg-enterprise-800/80 text-enterprise-200 border border-enterprise-700 hover:bg-enterprise-700 transition-colors">
              SAP Platform &darr;
            </a>
            <a href="#netsuite-section" className="text-xs px-3.5 py-1.5 rounded-lg bg-enterprise-800/80 text-enterprise-200 border border-enterprise-700 hover:bg-enterprise-700 transition-colors">
              Oracle NetSuite &darr;
            </a>
            <a href="#dynamics-section" className="text-xs px-3.5 py-1.5 rounded-lg bg-enterprise-800/80 text-enterprise-200 border border-enterprise-700 hover:bg-enterprise-700 transition-colors">
              Microsoft Dynamics 365 &darr;
            </a>
            <a href="#comparison-matrix" className="text-xs px-3.5 py-1.5 rounded-lg bg-brand-blue text-white hover:bg-brand-blue-hover transition-colors font-medium">
              Comparison Table &darr;
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. PLATFORM DEEP-DIVE SECTIONS (SAP, NETSUITE, DYNAMICS)   */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="primary">Architectural Practice</Badge>
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            Comprehensive Platform Breakdown
          </h2>
          <p className="text-sm text-enterprise-600">
            Examine the core features, suitable organizational profiles, and tangible business benefits of each major ERP ecosystem.
          </p>
        </div>

        {/* --------------------------------------------------------- */}
        {/* A. SAP S/4HANA & Business One                             */}
        {/* --------------------------------------------------------- */}
        <div id="sap-section" className="scroll-mt-24">
          <Card padding="none" className="overflow-hidden border border-enterprise-200 shadow-card">
            {/* Platform Banner Header */}
            <div className="bg-enterprise-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-enterprise-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-sm">
                  <Database className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">Enterprise Core Engine</span>
                    <Badge variant="navy" className="bg-blue-500/20 text-blue-300 border border-blue-400/30">120+ Deployments</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">SAP (S/4HANA & Business One)</h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link to="/contact">
                  <Button variant="primary" size="sm">
                    Consult on SAP
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="white" size="sm">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Platform Body Grid */}
            <div className="p-6 sm:p-10 space-y-8 bg-white">
              <p className="text-sm sm:text-base text-enterprise-700 leading-relaxed max-w-4xl">
                SAP represents the global gold standard for high-throughput transactional processing, complex discrete and batch process manufacturing, and strict statutory compliance. Powered by SAP HANA in-memory architecture, it delivers instantaneous visibility into global supply chains, multi-level Bills of Materials, and multi-currency financials.
              </p>

              {/* 3 Columns: Features, Suitable Businesses, Business Benefits */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-enterprise-100">
                {/* 1. Features */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span>Core Features</span>
                  </div>
                  <ul className="space-y-2.5">
                    {ERP_PLATFORMS[0].features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-enterprise-700 leading-snug">
                        <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Suitable Businesses */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
                    <Building2 className="w-4 h-4 text-brand-blue" />
                    <span>Suitable Businesses</span>
                  </div>
                  <ul className="space-y-2.5">
                    {ERP_PLATFORMS[0].suitableBusinesses.map((biz, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-enterprise-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                        <span>{biz}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Business Benefits */}
                <div className="space-y-4 bg-enterprise-50 p-5 rounded-xl border border-enterprise-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
                    <TrendingUp className="w-4 h-4 text-brand-green" />
                    <span>Business Benefits</span>
                  </div>
                  <div className="space-y-3">
                    {ERP_PLATFORMS[0].businessBenefits.map((ben, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-xs font-bold text-brand-navy">{ben.title}</p>
                        <p className="text-[11px] text-enterprise-600 leading-relaxed">{ben.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* --------------------------------------------------------- */}
        {/* B. Oracle NetSuite Cloud ERP                              */}
        {/* --------------------------------------------------------- */}
        <div id="netsuite-section" className="scroll-mt-24">
          <Card padding="none" className="overflow-hidden border border-enterprise-200 shadow-card">
            {/* Platform Banner Header */}
            <div className="bg-enterprise-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-enterprise-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-xl shadow-sm">
                  <Cpu className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-300">Pure Cloud ERP Suite</span>
                    <Badge variant="navy" className="bg-orange-500/20 text-orange-300 border border-orange-400/30">180+ Deployments</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Oracle NetSuite Cloud ERP</h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link to="/contact">
                  <Button variant="primary" size="sm">
                    Consult on NetSuite
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="white" size="sm">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Platform Body Grid */}
            <div className="p-6 sm:p-10 space-y-8 bg-white">
              <p className="text-sm sm:text-base text-enterprise-700 leading-relaxed max-w-4xl">
                Oracle NetSuite is the premier cloud-native ERP engineered for fast-scaling mid-market manufacturers and high-velocity wholesale distributors. Its multi-tenant architecture eliminates server maintenance overhead while NetSuite OneWorld handles multi-subsidiary taxation, cross-border currency translation, and omnichannel B2B fulfillment.
              </p>

              {/* 3 Columns: Features, Suitable Businesses, Business Benefits */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-enterprise-100">
                {/* 1. Features */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
                    <Zap className="w-4 h-4 text-orange-600" />
                    <span>Core Features</span>
                  </div>
                  <ul className="space-y-2.5">
                    {ERP_PLATFORMS[1].features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-enterprise-700 leading-snug">
                        <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Suitable Businesses */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
                    <Building2 className="w-4 h-4 text-orange-600" />
                    <span>Suitable Businesses</span>
                  </div>
                  <ul className="space-y-2.5">
                    {ERP_PLATFORMS[1].suitableBusinesses.map((biz, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-enterprise-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{biz}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Business Benefits */}
                <div className="space-y-4 bg-enterprise-50 p-5 rounded-xl border border-enterprise-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
                    <TrendingUp className="w-4 h-4 text-brand-green" />
                    <span>Business Benefits</span>
                  </div>
                  <div className="space-y-3">
                    {ERP_PLATFORMS[1].businessBenefits.map((ben, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-xs font-bold text-brand-navy">{ben.title}</p>
                        <p className="text-[11px] text-enterprise-600 leading-relaxed">{ben.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* --------------------------------------------------------- */}
        {/* C. Microsoft Dynamics 365                                 */}
        {/* --------------------------------------------------------- */}
        <div id="dynamics-section" className="scroll-mt-24">
          <Card padding="none" className="overflow-hidden border border-enterprise-200 shadow-card">
            {/* Platform Banner Header */}
            <div className="bg-enterprise-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-enterprise-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-xl shadow-sm">
                  <Workflow className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">Intelligent Connected ERP</span>
                    <Badge variant="navy" className="bg-sky-500/20 text-sky-300 border border-sky-400/30">140+ Deployments</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Microsoft Dynamics 365</h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link to="/contact">
                  <Button variant="primary" size="sm">
                    Consult on Dynamics 365
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="white" size="sm">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Platform Body Grid */}
            <div className="p-6 sm:p-10 space-y-8 bg-white">
              <p className="text-sm sm:text-base text-enterprise-700 leading-relaxed max-w-4xl">
                Microsoft Dynamics 365 (Finance & Supply Chain Management / Business Central) offers unrivaled synergy for enterprises invested in the Microsoft cloud ecosystem. With native Power BI embedded analytics, low-code Power Platform mobile extensions, and Azure IoT shop-floor telemetry, it bridges modern manufacturing with familiar collaboration tools.
              </p>

              {/* 3 Columns: Features, Suitable Businesses, Business Benefits */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-enterprise-100">
                {/* 1. Features */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
                    <Zap className="w-4 h-4 text-sky-600" />
                    <span>Core Features</span>
                  </div>
                  <ul className="space-y-2.5">
                    {ERP_PLATFORMS[2].features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-enterprise-700 leading-snug">
                        <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Suitable Businesses */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
                    <Building2 className="w-4 h-4 text-sky-600" />
                    <span>Suitable Businesses</span>
                  </div>
                  <ul className="space-y-2.5">
                    {ERP_PLATFORMS[2].suitableBusinesses.map((biz, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-enterprise-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{biz}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Business Benefits */}
                <div className="space-y-4 bg-enterprise-50 p-5 rounded-xl border border-enterprise-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
                    <TrendingUp className="w-4 h-4 text-brand-green" />
                    <span>Business Benefits</span>
                  </div>
                  <div className="space-y-3">
                    {ERP_PLATFORMS[2].businessBenefits.map((ben, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-xs font-bold text-brand-navy">{ben.title}</p>
                        <p className="text-[11px] text-enterprise-600 leading-relaxed">{ben.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. COMPARISON CARDS / COMPARISON TABLE                    */}
      {/* ========================================================= */}
      <section id="comparison-matrix" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="primary">Architectural Matrix</Badge>
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            Side-by-Side Platform Comparison
          </h2>
          <p className="text-sm text-enterprise-600">
            Compare target scale, manufacturing capabilities, financial consolidation, and extensibility across SAP, NetSuite, and Dynamics 365.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="overflow-x-auto bg-white rounded-card border border-enterprise-200 shadow-subtle">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-brand-navy text-white border-b border-enterprise-800">
                <th className="py-4 px-6 font-semibold w-1/4">Evaluation Dimension</th>
                <th className="py-4 px-6 font-semibold w-1/4 border-l border-enterprise-800">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-400" />
                    <span>SAP S/4HANA</span>
                  </div>
                </th>
                <th className="py-4 px-6 font-semibold w-1/4 border-l border-enterprise-800">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-orange-400" />
                    <span>Oracle NetSuite</span>
                  </div>
                </th>
                <th className="py-4 px-6 font-semibold w-1/4 border-l border-enterprise-800">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-sky-400" />
                    <span>Microsoft Dynamics 365</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-enterprise-200">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-enterprise-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-brand-navy bg-enterprise-50/50">
                    {row.metric}
                  </td>
                  <td className="py-4 px-6 text-enterprise-700 border-l border-enterprise-200 leading-snug">
                    {row.sap}
                  </td>
                  <td className="py-4 px-6 text-enterprise-700 border-l border-enterprise-200 leading-snug">
                    {row.netsuite}
                  </td>
                  <td className="py-4 px-6 text-enterprise-700 border-l border-enterprise-200 leading-snug">
                    {row.d365}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Selection Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <Card className="border-t-4 border-t-blue-600 space-y-3">
            <h4 className="text-base font-bold text-brand-navy">Choose SAP If:</h4>
            <p className="text-xs text-enterprise-600 leading-relaxed">
              Your business has global multi-plant discrete manufacturing, heavy machine shop floor telemetry, and multi-currency compliance across multiple statutory tax jurisdictions.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <Button variant="outline" size="sm" className="w-full justify-center">
                  Request SAP Scoping Call
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="border-t-4 border-t-orange-500 space-y-3">
            <h4 className="text-base font-bold text-brand-navy">Choose NetSuite If:</h4>
            <p className="text-xs text-enterprise-600 leading-relaxed">
              You are a fast-growing wholesale distributor, importer, or mid-market manufacturer demanding 100% pure cloud SaaS with rapid 3 to 4 month go-live and multi-subsidiary financials.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <Button variant="outline" size="sm" className="w-full justify-center">
                  Request NetSuite Scoping Call
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="border-t-4 border-t-sky-500 space-y-3">
            <h4 className="text-base font-bold text-brand-navy">Choose Dynamics 365 If:</h4>
            <p className="text-xs text-enterprise-600 leading-relaxed">
              Your organization is strategically anchored around Microsoft 365, Teams, and Power BI, or migrating from legacy Dynamics AX/NAV to intelligent Azure cloud automation.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <Button variant="outline" size="sm" className="w-full justify-center">
                  Request Dynamics Scoping Call
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CROSS-NAVIGATION & CALL TO ACTION                      */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-enterprise-800">
          <div className="space-y-3 max-w-xl">
            <Badge variant="navy" className="bg-brand-blue text-white">Platform Feasibility Study</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Unsure Which ERP Platform Fits Your Supply Chain?
            </h2>
            <p className="text-xs sm:text-sm text-enterprise-300 leading-relaxed">
              Schedule an objective, non-biased architectural review. Our senior consultants will evaluate your current transactional volumes, warehouse complexity, and total cost of ownership.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link to="/contact">
              <Button variant="primary" size="lg" icon={PhoneCall} className="w-full sm:w-auto justify-center">
                Book Feasibility Review
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-enterprise-700 text-white hover:bg-enterprise-800 w-full sm:w-auto justify-center">
                Review Implementation Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ErpSolutionsPage;

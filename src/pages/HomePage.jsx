import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  Cpu, 
  Workflow, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  BarChart3, 
  Users, 
  Building, 
  Sparkles, 
  Factory, 
  Boxes, 
  PhoneCall, 
  Clock, 
  FileText, 
  ExternalLink,
  ChevronRight,
  Server,
  Zap,
  Check,
  Award,
  AlertCircle,
  Package,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  Tooltip, 
  XAxis 
} from 'recharts';
import Button from '../components/common/Button';
import Card, { CardHeader } from '../components/common/Card';
import Badge from '../components/common/Badge';
import { ERP_PLATFORMS, CONSULTING_SERVICES, CLIENT_TESTIMONIALS } from '../data/mockData';

// Mini telemetry data for the hero preview
const heroSparklineData = [
  { time: '08:00', throughput: 420, orders: 12 },
  { time: '10:00', throughput: 680, orders: 28 },
  { time: '12:00', throughput: 950, orders: 45 },
  { time: '14:00', throughput: 820, orders: 36 },
  { time: '16:00', throughput: 1140, orders: 58 },
  { time: '18:00', throughput: 1280, orders: 64 },
];

export const HomePage = () => {
  // Industry interactive toggle
  const [selectedIndustry, setSelectedIndustry] = useState('manufacturing');
  const [heroActiveTab, setHeroActiveTab] = useState('telemetry');

  // Implementation roadmap steps
  const implementationSteps = [
    {
      step: '01',
      title: 'Discovery & Gap Blueprinting',
      timeframe: 'Weeks 1 – 3',
      description: 'Comprehensive business process mapping, value stream analysis, and identification of functional gaps between legacy operations and target ERP standard modules.',
      deliverables: ['Solution Architecture Blueprint', 'ERP Fit/Gap Matrix', 'Master Data Readiness Audit'],
      icon: FileText
    },
    {
      step: '02',
      title: 'Sandbox Prototype & Pilot Modeling',
      timeframe: 'Weeks 4 – 7',
      description: 'Rapid prototyping within an isolated sandbox loaded with your sanitized Bills of Materials (BOM), SKU trees, chart of accounts, and routing schemas.',
      deliverables: ['Working Sandbox Instance', 'End-to-End Core Flow Validation', 'Stakeholder Review Workshops'],
      icon: Layers
    },
    {
      step: '03',
      title: 'Custom Engineering & Middleware',
      timeframe: 'Weeks 8 – 12',
      description: 'Building custom SuiteScripts, SAP BAPIs, Dynamics X++ extensions, automated EDI 850/856/810 gateways, and middleware connectors to WMS, MES, and CRM.',
      deliverables: ['Bi-Directional API Connectors', 'Custom Reporting & Dashboards', 'Security & Role-Based Access Controls'],
      icon: Workflow
    },
    {
      step: '04',
      title: 'User Acceptance & Cutover Dry-Runs',
      timeframe: 'Weeks 13 – 15',
      description: 'Rigorous parallel system simulation, end-to-end load testing, employee role-based training, and practice cutover runs to ensure zero disruption.',
      deliverables: ['UAT Sign-Off Certificate', 'Cutover Minute-by-Minute Runbook', 'Dual-Entry Fallback Protocol'],
      icon: ShieldCheck
    },
    {
      step: '05',
      title: 'Zero-Downtime Launch & Hypercare',
      timeframe: 'Week 16 & Beyond',
      description: 'Flawless production go-live orchestrated during off-peak windows, followed by our dedicated 24/7 on-site and remote hypercare engineering team.',
      deliverables: ['Production System Sign-Off', '24/7 Priority SLA Desk', 'Continuous Optimization Plan'],
      icon: Zap
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-enterprise-200 pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#EAECF0_1px,transparent_1px),linear-gradient(to_bottom,#EAECF0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Supporting Text, and CTA Buttons */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Top pill badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue-light border border-blue-200 text-xs font-semibold text-brand-blue shadow-subtle">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise ERP Implementation Consultancy</span>
              </div>

              {/* Main Required Hero Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
                Transform Your Business with <span className="text-brand-blue">Intelligent ERP Solutions</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-enterprise-600 leading-relaxed">
                NEXORA accelerates digital transformation for <strong className="text-brand-navy font-semibold">manufacturing</strong> and <strong className="text-brand-navy font-semibold">wholesale distribution</strong> enterprises. We specialize in precision implementation, custom workflow engineering, and mission-critical cloud deployments across <strong className="text-brand-navy font-semibold">SAP S/4HANA</strong>, <strong className="text-brand-navy font-semibold">Oracle NetSuite</strong>, and <strong className="text-brand-navy font-semibold">Microsoft Dynamics 365</strong>.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link to="/solutions">
                  <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto shadow-sm">
                    Explore Solutions
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" icon={PhoneCall} className="w-full sm:w-auto">
                    Book a Consultation
                  </Button>
                </Link>
              </div>

              {/* Mini trust checklist */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-enterprise-600 font-medium border-t border-enterprise-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Guaranteed Zero-Downtime Cutover</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Certified Solution Architects</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>ISO 27001 & SOC 2 Audited</span>
                </div>
              </div>
            </div>

            {/* Right Column: Professional ERP Dashboard Visual */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative glow backing */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-blue/20 to-brand-green/20 rounded-2xl blur-xl opacity-75" />
                
                {/* Dashboard Frame */}
                <div className="relative bg-white rounded-card border border-enterprise-300 shadow-elevated overflow-hidden text-xs">
                  {/* Window Chrome Header */}
                  <div className="bg-brand-navy text-white px-4 py-3 flex items-center justify-between border-b border-enterprise-800">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-green inline-block" />
                      </div>
                      <span className="text-[11px] font-mono text-enterprise-400 pl-2">
                        nexora-control-center://v4.2/enterprise-telemetry
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-[10px] text-brand-green font-medium px-2 py-0.5 rounded bg-brand-green/20 border border-brand-green/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                        Gateways Active
                      </span>
                    </div>
                  </div>

                  {/* Dashboard Sub-Header / Tabs */}
                  <div className="px-4 py-2.5 bg-enterprise-50 border-b border-enterprise-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setHeroActiveTab('telemetry')}
                        className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                          heroActiveTab === 'telemetry' 
                            ? 'bg-white text-brand-blue shadow-subtle border border-enterprise-200' 
                            : 'text-enterprise-600 hover:text-brand-navy'
                        }`}
                      >
                        Operational Telemetry
                      </button>
                      <button 
                        onClick={() => setHeroActiveTab('nodes')}
                        className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                          heroActiveTab === 'nodes' 
                            ? 'bg-white text-brand-blue shadow-subtle border border-enterprise-200' 
                            : 'text-enterprise-600 hover:text-brand-navy'
                        }`}
                      >
                        ERP Sync Status (3)
                      </button>
                    </div>
                    <Link to="/dashboard" className="text-[11px] font-semibold text-brand-blue hover:text-brand-blue-hover flex items-center gap-1">
                      <span>Launch Portal</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Dashboard Content Area */}
                  <div className="p-4 space-y-4 bg-white">
                    {heroActiveTab === 'telemetry' ? (
                      <>
                        {/* 3 Quick KPI counters */}
                        <div className="grid grid-cols-3 gap-2 text-left">
                          <div className="p-2.5 rounded-lg bg-enterprise-50 border border-enterprise-200">
                            <p className="text-[10px] uppercase font-semibold text-enterprise-500">Gross Throughput</p>
                            <p className="text-base font-bold text-brand-navy mt-0.5">$28.45M</p>
                            <span className="text-[10px] font-medium text-brand-green">+14.2% YoY</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-enterprise-50 border border-enterprise-200">
                            <p className="text-[10px] uppercase font-semibold text-enterprise-500">Active ERP Orders</p>
                            <p className="text-base font-bold text-brand-navy mt-0.5">1,420</p>
                            <span className="text-[10px] font-medium text-brand-blue">98.6% On-Time</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-enterprise-50 border border-enterprise-200">
                            <p className="text-[10px] uppercase font-semibold text-enterprise-500">Warehouse SKUs</p>
                            <p className="text-base font-bold text-brand-navy mt-0.5">12,480</p>
                            <span className="text-[10px] font-medium text-enterprise-600">3 Hubs Live</span>
                          </div>
                        </div>

                        {/* Sparkline chart */}
                        <div className="p-3 rounded-lg border border-enterprise-200 bg-enterprise-50/50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-brand-navy text-[11px]">Real-Time ERP Transaction Flow</span>
                            <span className="text-[10px] text-enterprise-500 font-mono">Sampling: 1,280 msgs/hr</span>
                          </div>
                          <div className="h-28 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart data={heroSparklineData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                                <defs>
                                  <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#155EEF" stopOpacity={0.35}/>
                                    <stop offset="95%" stopColor="#155EEF" stopOpacity={0}/>
                                  </linearGradient>
                                </defs>
                                <XAxis dataKey="time" stroke="#98A2B3" fontSize={10} tickLine={false} />
                                <Tooltip 
                                  contentStyle={{ backgroundColor: '#101828', borderRadius: '6px', color: '#fff', fontSize: '11px' }}
                                />
                                <Area type="monotone" dataKey="throughput" stroke="#155EEF" strokeWidth={2} fillOpacity={1} fill="url(#heroGradient)" name="Throughput ($k)" />
                              </AreaChart>
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* Recent Multi-ERP Event Stream */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] p-2 rounded bg-enterprise-50 border border-enterprise-200">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-brand-blue" />
                              <span className="font-medium text-brand-navy">SAP S/4HANA:</span>
                              <span className="text-enterprise-600">MRP II Production Order #77412 Released</span>
                            </div>
                            <span className="text-enterprise-400 font-mono text-[10px]">Just now</span>
                          </div>

                          <div className="flex items-center justify-between text-[11px] p-2 rounded bg-enterprise-50 border border-enterprise-200">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-brand-green" />
                              <span className="font-medium text-brand-navy">Oracle NetSuite:</span>
                              <span className="text-enterprise-600">EDI 856 Automated Dispatch Verified</span>
                            </div>
                            <span className="text-enterprise-400 font-mono text-[10px]">2m ago</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Node health view */
                      <div className="space-y-2 py-1">
                        <div className="p-3 rounded-lg border border-enterprise-200 bg-white flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
                              <Database className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="font-semibold text-brand-navy">SAP S/4HANA (Manufacturing Hub)</p>
                              <p className="text-[11px] text-enterprise-500">BAPI & OData bi-directional replication</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="success" size="sm" dot>Connected</Badge>
                            <p className="text-[10px] text-enterprise-400 font-mono mt-0.5">24ms ping</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg border border-enterprise-200 bg-white flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                              <Cpu className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="font-semibold text-brand-navy">Oracle NetSuite OneWorld</p>
                              <p className="text-[11px] text-enterprise-500">SuiteTalk REST & SuiteCloud pipelines</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="success" size="sm" dot>Connected</Badge>
                            <p className="text-[10px] text-enterprise-400 font-mono mt-0.5">38ms ping</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg border border-enterprise-200 bg-white flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                              <Workflow className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="font-semibold text-brand-navy">Microsoft Dynamics 365 F&SCM</p>
                              <p className="text-[11px] text-enterprise-500">Azure Dataverse & Power BI telemetry</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="success" size="sm" dot>Connected</Badge>
                            <p className="text-[10px] text-enterprise-400 font-mono mt-0.5">45ms ping</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Dashboard Bottom Bar */}
                  <div className="px-4 py-2.5 bg-enterprise-50 border-t border-enterprise-200 flex items-center justify-between text-[11px] text-enterprise-600">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                      Live Production Mirror (Encrypted AES-256)
                    </span>
                    <Link to="/dashboard" className="text-brand-blue font-semibold hover:underline">
                      View Full Live Backoffice &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. TRUST INDICATORS & STATISTICS SECTION                  */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-enterprise-900 text-white rounded-2xl p-8 sm:p-10 shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-enterprise-800">
            {/* Stat 1 */}
            <div className="space-y-1.5 pt-4 sm:pt-0 sm:px-4 text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">440+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">ERP Deployments</p>
              <p className="text-xs text-enterprise-400">100% completed with certified cutover compliance</p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-1.5 pt-4 sm:pt-0 sm:px-4 text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-green tracking-tight">99.4%</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-enterprise-300">On-Time Go-Live</p>
              <p className="text-xs text-enterprise-400">Battle-tested 4-phase rollout methodology</p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-1.5 pt-4 sm:pt-0 sm:px-4 text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">$42M+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">Cost Savings Unlocked</p>
              <p className="text-xs text-enterprise-400">Inventory carrying reduction & labor optimization</p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-1.5 pt-4 sm:pt-0 sm:px-4 text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">15 Min</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-enterprise-300">Critical SLA Response</p>
              <p className="text-xs text-enterprise-400">24/7 dedicated Tier-3 ERP support engineers</p>
            </div>
          </div>

          {/* Partner & Certification Badges Strip */}
          <div className="pt-8 mt-8 border-t border-enterprise-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-enterprise-400">
            <span className="font-semibold uppercase tracking-wider text-enterprise-300">
              Accredited Enterprise Alliances:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 text-enterprise-300 font-medium">
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <Database className="w-4 h-4 text-brand-blue" />
                SAP Silver Partner
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <Cpu className="w-4 h-4 text-brand-green" />
                Oracle NetSuite Solution Provider
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <Workflow className="w-4 h-4 text-sky-400" />
                Microsoft Solutions Partner
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                ISO 27001 & SOC 2 Audited
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SERVICES OVERVIEW SECTION                              */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="primary">End-to-End Consultancy</Badge>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              Comprehensive ERP Lifecycle Services
            </h2>
            <p className="text-sm text-enterprise-600 max-w-xl">
              From business blueprinting to customized development and post-launch managed support, we engineer ERP systems that scale with industrial complexity.
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
              View Detailed Scope
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONSULTING_SERVICES.map((service) => (
            <Card key={service.id} hoverEffect className="flex flex-col justify-between border-t-2 border-t-transparent hover:border-t-brand-blue">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy">{service.title}</h3>
                <p className="text-xs sm:text-sm text-enterprise-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-3 border-t border-enterprise-100 space-y-1.5">
                  <p className="text-[11px] font-semibold text-brand-navy uppercase tracking-wider">Key Deliverables:</p>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-enterprise-700">
                      <Check className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-enterprise-100 flex items-center justify-between">
                <span className="text-xs font-medium text-enterprise-500">Manufacturing & Wholesale</span>
                <Link to="/services" className="text-xs font-semibold text-brand-blue hover:text-brand-blue-hover flex items-center gap-1">
                  Learn More &rarr;
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. ERP SOLUTIONS CARDS: SAP, NETSUITE, DYNAMICS 365        */}
      {/* ========================================================= */}
      <section className="bg-enterprise-100 py-16 border-y border-enterprise-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="primary">Platform Practices</Badge>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              Leading ERP Platforms We Implement & Master
            </h2>
            <p className="text-sm text-enterprise-600">
              Unbiased architectural selection and tailored deployment for the world's premier enterprise systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ERP_PLATFORMS.map((platform) => (
              <Card key={platform.id} hoverEffect className="bg-white flex flex-col justify-between border-t-4 border-t-brand-blue">
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-enterprise-500">
                      {platform.category}
                    </span>
                    <Badge variant="erp">{platform.badge}</Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-navy">{platform.name}</h3>
                    <p className="text-xs text-enterprise-500 mt-0.5">Average Deployment: <strong className="text-brand-blue">{platform.stats.avgGoLive}</strong></p>
                  </div>

                  <p className="text-xs sm:text-sm text-enterprise-600 leading-relaxed">
                    {platform.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="pt-3 border-t border-enterprise-100 space-y-2">
                    <p className="text-xs font-semibold text-brand-navy uppercase tracking-wider">
                      Target Enterprise Modules:
                    </p>
                    <ul className="space-y-1.5">
                      {(platform.capabilities || platform.features || []).map((cap, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-enterprise-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-enterprise-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-enterprise-500">Deployments: <strong className="text-brand-navy">{platform.stats.deployments}</strong></p>
                    <p className="text-[11px] text-brand-green font-medium">{platform.stats.userSatisfaction} Client Satisfaction</p>
                  </div>
                  <Link to="/solutions">
                    <Button variant="outline" size="sm">
                      Platform Specs
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover">
              <span>Compare all three platforms on our Technical Architecture Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. INDUSTRY SOLUTIONS: MANUFACTURING & WHOLESALE          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="primary">Industrial Alignment</Badge>
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            Tailored Industry Solutions
          </h2>
          <p className="text-sm text-enterprise-600">
            ERP cannot be one-size-fits-all. We build distinct functional configurations specifically tailored for manufacturing plant floors and high-throughput wholesale distributors.
          </p>

          {/* Interactive Toggle */}
          <div className="inline-flex p-1 bg-enterprise-200 rounded-xl mt-2">
            <button
              onClick={() => setSelectedIndustry('manufacturing')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedIndustry === 'manufacturing'
                  ? 'bg-white text-brand-navy shadow-sm'
                  : 'text-enterprise-600 hover:text-brand-navy'
              }`}
            >
              <Factory className="w-4 h-4 text-brand-blue" />
              <span>Discrete & Process Manufacturing</span>
            </button>
            <button
              onClick={() => setSelectedIndustry('wholesale')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedIndustry === 'wholesale'
                  ? 'bg-white text-brand-navy shadow-sm'
                  : 'text-enterprise-600 hover:text-brand-navy'
              }`}
            >
              <Boxes className="w-4 h-4 text-brand-green" />
              <span>Wholesale & Distribution</span>
            </button>
          </div>
        </div>

        {/* Selected Industry Card Content */}
        {selectedIndustry === 'manufacturing' ? (
          <Card className="p-6 sm:p-10 border-l-4 border-l-brand-blue shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
                  <Factory className="w-4 h-4" />
                  <span>Shop Floor & Production Control</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy">
                  Precision ERP for Discrete & Batch Process Manufacturers
                </h3>
                <p className="text-sm text-enterprise-600 leading-relaxed">
                  We integrate your ERP directly with manufacturing execution systems (MES), machine sensors, and warehouse racks to eliminate production bottlenecks, stabilize material supply, and provide full lot/serial traceability.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-enterprise-50 rounded-lg border border-enterprise-200">
                    <p className="text-xs font-bold text-brand-navy">Multi-Level BOM Engineering</p>
                    <p className="text-[11px] text-enterprise-500 mt-1">Phantom BOMs, scrap rate tracking, engineering change notices (ECN).</p>
                  </div>
                  <div className="p-3 bg-enterprise-50 rounded-lg border border-enterprise-200">
                    <p className="text-xs font-bold text-brand-navy">MRP II & Shop Scheduling</p>
                    <p className="text-[11px] text-enterprise-500 mt-1">Finite capacity scheduling, machine downtime analysis, WIP tracking.</p>
                  </div>
                  <div className="p-3 bg-enterprise-50 rounded-lg border border-enterprise-200">
                    <p className="text-xs font-bold text-brand-navy">Quality & Compliance Audit</p>
                    <p className="text-[11px] text-enterprise-500 mt-1">Automated Certificates of Analysis (CoA), FDA CFR Part 11, ISO 9001.</p>
                  </div>
                  <div className="p-3 bg-enterprise-50 rounded-lg border border-enterprise-200">
                    <p className="text-xs font-bold text-brand-navy">Asset Maintenance (EAM)</p>
                    <p className="text-[11px] text-enterprise-500 mt-1">Preventive maintenance triggers, spare parts consumption logging.</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/contact">
                    <Button variant="primary" size="md">
                      Discuss Manufacturing Roadmap
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-enterprise-900 text-white p-6 rounded-xl space-y-4">
                <h4 className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Manufacturing Benchmark Impact</h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-enterprise-800/60 border border-enterprise-700">
                    <p className="text-2xl font-bold text-white">34%</p>
                    <p className="text-xs text-enterprise-300">Reduction in work-in-progress (WIP) cycle time</p>
                  </div>
                  <div className="p-3 rounded-lg bg-enterprise-800/60 border border-enterprise-700">
                    <p className="text-2xl font-bold text-brand-green">99.8%</p>
                    <p className="text-xs text-enterprise-300">Lot traceability accuracy for audited recall tests</p>
                  </div>
                  <div className="p-3 rounded-lg bg-enterprise-800/60 border border-enterprise-700">
                    <p className="text-2xl font-bold text-amber-400">2.4x</p>
                    <p className="text-xs text-enterprise-300">Faster engineering change order (ECO) cycle speeds</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ) : (
          <Card className="p-6 sm:p-10 border-l-4 border-l-brand-green shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green">
                  <Boxes className="w-4 h-4" />
                  <span>High-Velocity Supply Chain</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy">
                  Scalable ERP for Wholesale Distributors & Importers
                </h3>
                <p className="text-sm text-enterprise-600 leading-relaxed">
                  Consolidate multi-warehouse inventory, automate high-volume EDI transactions with big-box retailers, and power omnichannel B2B customer portals with real-time stock allocation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-enterprise-50 rounded-lg border border-enterprise-200">
                    <p className="text-xs font-bold text-brand-navy">Automated EDI 850/856/810</p>
                    <p className="text-[11px] text-enterprise-500 mt-1">Zero-touch purchase order processing, advance ship notices, and invoice matching.</p>
                  </div>
                  <div className="p-3 bg-enterprise-50 rounded-lg border border-enterprise-200">
                    <p className="text-xs font-bold text-brand-navy">Multi-Warehouse WMS & Wave Picking</p>
                    <p className="text-[11px] text-enterprise-500 mt-1">Cross-docking, automated bin allocation, RFID scanner integration.</p>
                  </div>
                  <div className="p-3 bg-enterprise-50 rounded-lg border border-enterprise-200">
                    <p className="text-xs font-bold text-brand-navy">Complex Tiered Price Matrices</p>
                    <p className="text-[11px] text-enterprise-500 mt-1">Customer-specific volume breaks, contract pricing, rebate management.</p>
                  </div>
                  <div className="p-3 bg-enterprise-50 rounded-lg border border-enterprise-200">
                    <p className="text-xs font-bold text-brand-navy">Container & Landed Cost Tracking</p>
                    <p className="text-[11px] text-enterprise-500 mt-1">Freight, duty, and tariff allocation calculated automatically down to unit margin.</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/contact">
                    <Button variant="primary" size="md">
                      Discuss Wholesale Architecture
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-enterprise-900 text-white p-6 rounded-xl space-y-4">
                <h4 className="text-sm font-semibold text-brand-green uppercase tracking-wider">Wholesale Benchmark Impact</h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-enterprise-800/60 border border-enterprise-700">
                    <p className="text-2xl font-bold text-white">$1.4M</p>
                    <p className="text-xs text-enterprise-300">Average inventory holding cost reduction in Year 1</p>
                  </div>
                  <div className="p-3 rounded-lg bg-enterprise-800/60 border border-enterprise-700">
                    <p className="text-2xl font-bold text-brand-green">99.4%</p>
                    <p className="text-xs text-enterprise-300">On-Time In-Full (OTIF) shipping rate achieved</p>
                  </div>
                  <div className="p-3 rounded-lg bg-enterprise-800/60 border border-enterprise-700">
                    <p className="text-2xl font-bold text-sky-400">0 Rejections</p>
                    <p className="text-xs text-enterprise-300">EDI automated validation eliminating chargebacks</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
      </section>

      {/* ========================================================= */}
      {/* 6. HOW OUR IMPLEMENTATION PROCESS WORKS                   */}
      {/* ========================================================= */}
      <section className="bg-enterprise-50 py-16 border-y border-enterprise-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="primary">Proven Methodology</Badge>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              How Our Implementation Process Works
            </h2>
            <p className="text-sm text-enterprise-600">
              Our 5-stage delivery blueprint eliminates project scope creep, protects production timelines, and guarantees smooth cutover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {implementationSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={step.step}
                  className="bg-white rounded-card p-5 border border-enterprise-200 shadow-subtle flex flex-col justify-between hover:border-brand-blue transition-colors duration-200 relative group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-brand-blue font-mono">{step.step}</span>
                      <div className="w-8 h-8 rounded-lg bg-brand-blue-light text-brand-blue flex items-center justify-center">
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-enterprise-500 bg-enterprise-100 px-2 py-0.5 rounded">
                      {step.timeframe}
                    </span>

                    <h3 className="text-sm font-bold text-brand-navy leading-snug">{step.title}</h3>
                    <p className="text-xs text-enterprise-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-enterprise-100">
                    <p className="text-[10px] font-semibold text-brand-navy uppercase tracking-wider mb-1">Deliverables:</p>
                    <ul className="space-y-1 text-[11px] text-enterprise-600">
                      {step.deliverables.slice(0, 2).map((del, i) => (
                        <li key={i} className="flex items-center gap-1.5 truncate">
                          <Check className="w-3 h-3 text-brand-green shrink-0" />
                          <span className="truncate">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Guarantee Callout */}
          <div className="p-4 bg-brand-navy text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-green shrink-0" />
              <div>
                <p className="font-semibold text-white">Cutover Insurance & Dual-Run Protocol</p>
                <p className="text-enterprise-300">We run parallel production dry-runs before decommissioning legacy systems to protect order flow.</p>
              </div>
            </div>
            <Link to="/about">
              <button className="px-4 py-2 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-lg font-semibold shrink-0 transition-colors">
                Read Detailed Methodology
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. TESTIMONIALS SECTION (CLEARLY LABELED DEMO TESTIMONIALS)*/}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
            <Award className="w-3.5 h-3.5 text-brand-green" />
            <span>Industrial Case Studies & Proof</span>
          </div>
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            Trusted by Manufacturing & Wholesale Leaders
          </h2>
          <p className="text-sm text-enterprise-600">
            Representative benchmarks demonstrating operational ROI delivered across our enterprise practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_TESTIMONIALS.map((t, idx) => (
            <Card key={idx} hoverEffect className="flex flex-col justify-between bg-white border border-enterprise-200 shadow-subtle">
              <div className="space-y-4">
                {/* Clearly Labeled Demo Testimonial Tag */}
                <div className="flex items-center justify-between">
                  <Badge variant="erp" size="sm">
                    {t.industry}
                  </Badge>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-enterprise-500 bg-enterprise-100 px-2 py-0.5 rounded">
                    Demo Testimonial
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-brand-green-light border border-emerald-200 text-emerald-900 font-semibold text-xs flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-green shrink-0" />
                  <span>{t.stats}</span>
                </div>

                <p className="text-xs sm:text-sm text-enterprise-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-enterprise-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {t.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-navy">{t.author}</p>
                  <p className="text-[11px] text-enterprise-500">{t.role}</p>
                  <p className="text-[11px] font-semibold text-brand-blue">{t.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs text-enterprise-500 italic">
            * Note: Testimonials above are simulated client benchmarks reflecting typical deployment results achieved in Nexora ERP implementations.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. FINAL CALL TO ACTION (CTA) SECTION                      */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy rounded-2xl p-8 sm:p-14 text-white relative overflow-hidden shadow-elevated border border-enterprise-800">
          {/* Subtle geometric background watermark */}
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-10 pointer-events-none">
            <Layers className="w-96 h-96 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <Badge variant="navy" className="bg-brand-blue text-white">
              Complimentary Architectural Discovery
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Transform Your Enterprise with Intelligent ERP?
            </h2>

            <p className="text-sm sm:text-base text-enterprise-300 leading-relaxed max-w-2xl">
              Schedule a 45-minute discovery consultation with our Principal ERP Architects. We will review your current systems, map process bottlenecks, and outline a tailored roadmap for SAP, NetSuite, or Dynamics 365.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg" icon={PhoneCall} className="w-full sm:w-auto">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="white" size="lg" icon={BarChart3} className="w-full sm:w-auto">
                  Explore Live ERP Demo
                </Button>
              </Link>
            </div>

            <div className="pt-6 border-t border-enterprise-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-enterprise-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                <span>Protected Under Mutual NDA</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Guaranteed 4-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Sales Fluff, Pure Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;

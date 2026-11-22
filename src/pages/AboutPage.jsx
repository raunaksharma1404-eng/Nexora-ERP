import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Users, 
  Award, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Cpu,
  ChevronRight,
  Database,
  Workflow,
  Sparkles,
  PhoneCall,
  Check,
  Zap,
  Layers,
  Scale
} from 'lucide-react';
import Button from '../components/common/Button';
import Card, { CardHeader } from '../components/common/Card';
import Badge from '../components/common/Badge';

export const AboutPage = () => {
  const milestones = [
    { year: '2014', title: 'Founding of Nexora Advisory', desc: 'Started with specialized SAP R/3 and ECC migration consulting for Midwest discrete manufacturers.' },
    { year: '2017', title: 'Oracle NetSuite Practice Launch', desc: 'Expanded into cloud-native ERP implementation, specializing in NetSuite OneWorld multi-subsidiary distribution.' },
    { year: '2020', title: 'Microsoft Dynamics 365 Practice', desc: 'Integrated Microsoft Dynamics 365 Finance & Supply Chain with Azure IoT and Power Platform shop-floor tools.' },
    { year: '2024', title: '440+ Deployments Milestone', desc: 'Crossed 440 successful enterprise go-lives across 14 countries with 99.4% on-time cutover adherence.' },
  ];

  const leadership = [
    { name: 'Dr. Elizabeth Chen', role: 'Managing Partner & Chief ERP Architect', credential: '22 years enterprise ERP architecture • Ex-SAP Core Engineering' },
    { name: 'Marcus Thorne', role: 'Principal Architect — NetSuite Practice', credential: '16 years wholesale supply chain systems • 180+ cloud implementations' },
    { name: 'Siddharth Rao', role: 'VP of Microsoft Dynamics & Azure Integration', credential: '14 years Dynamics 365 & Power Platform • Cloud middleware specialist' },
    { name: 'Sarah Jenkins', role: 'Director of Cutover & Client Success', credential: 'PMP certified • 140+ uninterrupted production go-lives' },
  ];

  const methodology = [
    { 
      step: '01', 
      title: 'Process Diagnostics & Blueprint', 
      timeframe: 'Weeks 1 – 3',
      desc: 'Conduct value-stream mapping workshops, interview shop floor and finance managers, and eliminate redundant legacy procedures.' 
    },
    { 
      step: '02', 
      title: 'Target Architecture & Prototyping', 
      timeframe: 'Weeks 4 – 7',
      desc: 'Configure prototype sandbox environments loaded with sanitized client master data (BOMs, SKU trees, GL chart of accounts).' 
    },
    { 
      step: '03', 
      title: 'Custom Extensions & Middleware', 
      timeframe: 'Weeks 8 – 12',
      desc: 'Build validated BAPIs, SuiteScripts, or PowerApps connectors to external WMS, MES machinery, and automated EDI trading partners.' 
    },
    { 
      step: '04', 
      title: 'Rigorous Cutover & Hypercare', 
      timeframe: 'Weeks 13 – 16+',
      desc: 'Execute parallel dry-runs, end-user simulations, and provide 24/7 war room coverage for a guaranteed zero-downtime launch.' 
    },
  ];

  const coreValues = [
    {
      title: 'Domain Specialization Over Generalists',
      desc: 'We focus exclusively on discrete manufacturing, process plants, and high-velocity wholesale distribution. Our architects speak BOMs, routing, MRP II, and EDI natively.',
      icon: Target
    },
    {
      title: 'Guaranteed Zero-Downtime Cutover',
      desc: 'Our dual-run parallel simulation protocols ensure shop floor machines and warehouse shipping docks experience zero unplanned interruptions during go-live.',
      icon: ShieldCheck
    },
    {
      title: 'Objective, Non-Biased Architecture',
      desc: 'Because we maintain senior practices in SAP, NetSuite, and Dynamics 365, our software recommendations are dictated solely by your business volume, scale, and budget.',
      icon: Scale
    },
    {
      title: 'Clean-Core Upgrade Survivability',
      desc: 'All bespoke business logic is written using official cloud extensibility frameworks (CDS, SuiteScript, Power Platform), ensuring your workflows survive future cloud updates.',
      icon: Zap
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
            <span className="text-brand-blue font-semibold">About Us</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <Badge variant="navy" className="bg-brand-blue text-white">About Nexora Enterprise Solutions</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Consultancy Built on Deep Industrial ERP Rigor.
            </h1>
            <p className="text-base sm:text-lg text-enterprise-300 leading-relaxed">
              We are senior enterprise architects, functional analysts, and systems engineers dedicated solely to enterprise ERP implementation, modernization, and optimization for manufacturing and wholesale distribution leaders.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link to="/contact">
              <Button variant="primary" size="sm" icon={PhoneCall}>
                Schedule Architecture Review
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="sm" className="border-enterprise-700 text-white hover:bg-enterprise-800">
                Explore Consulting Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. MISSION & CORE PILLARS                                 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="primary">Our Mission</Badge>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              Eliminating the Chaos of Fragmented Enterprise Systems
            </h2>
            <p className="text-enterprise-600 leading-relaxed text-sm sm:text-base">
              Mid-market manufacturers and wholesale distributors frequently outgrow disconnected spreadsheets, legacy green-screens, and siloed point tools. Nexora was founded with a single mission: to deliver unified, reliable, and high-performance ERP systems with absolute predictability.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-brand-navy">Architectural Transparency</p>
                  <p className="text-xs text-enterprise-600">No inflated licensing promises or hidden billable hours. We deliver clear scoping blueprints upfront with milestones linked to functional acceptance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-brand-navy">Multi-Disciplinary Delivery Pods</p>
                  <p className="text-xs text-enterprise-600">Every project team pairs a seasoned functional business consultant with a hands-on technical software engineer to bridge business reality with code.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick metric highlights */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <Card className="bg-white border-l-4 border-l-brand-blue space-y-2 shadow-subtle">
              <p className="text-3xl font-bold text-brand-navy">12+ Yrs</p>
              <p className="text-xs text-enterprise-500 font-medium">Enterprise Track Record</p>
              <span className="text-[10px] text-enterprise-400">Serving mid-market to enterprise</span>
            </Card>
            <Card className="bg-white border-l-4 border-l-brand-green space-y-2 shadow-subtle">
              <p className="text-3xl font-bold text-brand-green">440+</p>
              <p className="text-xs text-enterprise-500 font-medium">Successful Go-Lives</p>
              <span className="text-[10px] text-enterprise-400">100% completed cutovers</span>
            </Card>
            <Card className="bg-white border-l-4 border-l-enterprise-800 space-y-2 shadow-subtle">
              <p className="text-3xl font-bold text-brand-navy">14</p>
              <p className="text-xs text-enterprise-500 font-medium">Countries Deployed</p>
              <span className="text-[10px] text-enterprise-400">Multi-subsidiary taxation</span>
            </Card>
            <Card className="bg-white border-l-4 border-l-brand-blue space-y-2 shadow-subtle">
              <p className="text-3xl font-bold text-brand-blue">99.4%</p>
              <p className="text-xs text-enterprise-500 font-medium">On-Time Go-Live Rate</p>
              <span className="text-[10px] text-enterprise-400">Strict milestone governance</span>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CORE VALUES & PHILOSOPHY                               */}
      {/* ========================================================= */}
      <section className="bg-enterprise-50 py-16 border-y border-enterprise-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="primary">Our Values</Badge>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              The Principles That Guide Every ERP Transformation
            </h2>
            <p className="text-sm text-enterprise-600">
              How our engineering discipline protects client investments and ensures systems deliver long-term operational ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <Card key={i} className="bg-white space-y-3 border border-enterprise-200 shadow-subtle hover:border-brand-blue transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-light text-brand-blue flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy">{val.title}</h3>
                  <p className="text-xs text-enterprise-600 leading-relaxed">
                    {val.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. 4-STAGE DELIVERY METHODOLOGY                           */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="primary">Our Framework</Badge>
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            The Nexora 4-Stage Delivery Blueprint
          </h2>
          <p className="text-sm text-enterprise-600">
            How we take multi-million dollar ERP transformations and deliver them smoothly on time and within scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((m) => (
            <Card key={m.step} className="bg-white relative border border-enterprise-200 shadow-subtle hover:shadow-card transition-shadow">
              <span className="text-3xl font-black text-enterprise-200 absolute top-4 right-4">{m.step}</span>
              <div className="space-y-3 pt-2">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2 py-0.5 rounded">
                  {m.timeframe}
                </span>
                <h3 className="text-base font-bold text-brand-navy">{m.title}</h3>
                <p className="text-xs text-enterprise-600 leading-relaxed">{m.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. HISTORICAL MILESTONES TIMELINE                         */}
      {/* ========================================================= */}
      <section className="bg-enterprise-50 py-16 border-y border-enterprise-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="primary">Our History</Badge>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              A Decade of Enterprise Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="p-5 bg-white rounded-card border border-enterprise-200 space-y-2 shadow-subtle">
                <span className="text-xl font-black text-brand-blue font-mono">{milestone.year}</span>
                <h4 className="text-sm font-bold text-brand-navy">{milestone.title}</h4>
                <p className="text-xs text-enterprise-600 leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. LEADERSHIP TEAM                                        */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="primary">Practice Leadership</Badge>
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            Led by Recognized Industrial ERP Authorities
          </h2>
          <p className="text-sm text-enterprise-600">
            Our directors personally oversee solution blueprinting and cutover governance on every customer deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((leader, i) => (
            <Card key={i} className="text-center space-y-3 border border-enterprise-200 shadow-subtle">
              <div className="w-16 h-16 rounded-full bg-brand-navy text-white mx-auto flex items-center justify-center font-bold text-lg border-2 border-brand-blue">
                {leader.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-navy">{leader.name}</h3>
                <p className="text-xs font-semibold text-brand-blue mt-0.5">{leader.role}</p>
              </div>
              <p className="text-xs text-enterprise-500 pt-2 border-t border-enterprise-100">
                {leader.credential}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. BOTTOM CTA SECTION                                     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-enterprise-800">
          <div className="space-y-3 max-w-xl">
            <Badge variant="navy" className="bg-brand-blue text-white">Get in Touch</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Discuss Your ERP Strategy?
            </h2>
            <p className="text-xs sm:text-sm text-enterprise-300 leading-relaxed">
              Connect directly with our Principal Architects to review your current business processes and migration roadmap.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link to="/contact">
              <Button variant="primary" size="lg" icon={PhoneCall} className="w-full sm:w-auto justify-center">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" size="lg" className="border-enterprise-700 text-white hover:bg-enterprise-800 w-full sm:w-auto justify-center">
                Explore ERP Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

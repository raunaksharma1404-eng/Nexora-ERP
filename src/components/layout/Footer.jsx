import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight,
  Cpu,
  Database,
  Workflow
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-enterprise-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-enterprise-800">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">NEXORA</span>
                <span className="text-[10px] text-enterprise-400 font-semibold tracking-wider uppercase">Enterprise Solutions</span>
              </div>
            </Link>
            
            <p className="text-sm text-enterprise-300 leading-relaxed max-w-sm">
              Transforming businesses through intelligent ERP. We specialize in end-to-end ERP implementation, customization, integration, and managed support for manufacturing and wholesale distribution leaders.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-enterprise-800/80 text-enterprise-200 border border-enterprise-700">
                <Database className="w-3.5 h-3.5 text-brand-blue" />
                SAP Practice
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-enterprise-800/80 text-enterprise-200 border border-enterprise-700">
                <Cpu className="w-3.5 h-3.5 text-brand-green" />
                Oracle NetSuite
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-enterprise-800/80 text-enterprise-200 border border-enterprise-700">
                <Workflow className="w-3.5 h-3.5 text-amber-400" />
                MS Dynamics 365
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-enterprise-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-enterprise-300 hover:text-white transition-colors">About Nexora</Link>
              </li>
              <li>
                <Link to="/services" className="text-enterprise-300 hover:text-white transition-colors">Consulting Services</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-enterprise-300 hover:text-white transition-colors">ERP Platforms</Link>
              </li>
              <li>
                <Link to="/contact" className="text-enterprise-300 hover:text-white transition-colors">Contact Consulting Team</Link>
              </li>
            </ul>
          </div>

          {/* Enterprise Portal & Modules */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90">ERP Modules</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/dashboard" className="text-enterprise-300 hover:text-brand-blue transition-colors flex items-center gap-1">
                  <span>Executive Dashboard</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/inventory" className="text-enterprise-300 hover:text-brand-blue transition-colors flex items-center gap-1">
                  <span>Inventory Control</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-enterprise-300 hover:text-brand-blue transition-colors flex items-center gap-1">
                  <span>Orders & Fulfillment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <span className="text-enterprise-500 text-xs">Supply Chain Analytics (Stage 2)</span>
              </li>
              <li>
                <span className="text-enterprise-500 text-xs">Financial Consolidation (Stage 2)</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90">Global Advisory</h4>
            <div className="space-y-3 text-sm text-enterprise-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>100 Enterprise Way, Suite 400, Chicago, IL 60601</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <span>+1 (800) 639-6721</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-enterprise-400 shrink-0" />
                <span>consulting@nexora-erp.com</span>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-enterprise-400">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  ISO 27001 & SOC 2 Audited
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-enterprise-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} NEXORA Enterprise Solutions LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-enterprise-200 cursor-pointer">Security & Compliance</span>
            <span className="hover:text-enterprise-200 cursor-pointer">Privacy Framework</span>
            <span className="hover:text-enterprise-200 cursor-pointer">Terms of Engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

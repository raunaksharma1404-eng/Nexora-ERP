import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Layers, 
  Menu, 
  X, 
  ChevronRight, 
  LayoutDashboard, 
  PhoneCall, 
  ShieldCheck 
} from 'lucide-react';
import Button from '../common/Button';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'ERP Solutions', href: '/solutions' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-enterprise-200">
      {/* Top micro-bar for enterprise confidence */}
      <div className="bg-brand-navy text-enterprise-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
              Independent Enterprise ERP Practice
            </span>
            <span className="text-enterprise-500">|</span>
            <span>SAP • Oracle NetSuite • Microsoft Dynamics 365</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-enterprise-400">Enterprise Hotline: +1 (800) 639-6721</span>
            <Link to="/contact" className="text-brand-blue hover:text-blue-400 font-medium">
              Client Portal Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-white shadow-sm group-hover:bg-brand-blue transition-colors duration-200">
              <Layers className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors duration-200" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-brand-navy">NEXORA</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-brand-blue/10 text-brand-blue">ERP</span>
              </div>
              <span className="text-[11px] text-enterprise-500 font-medium tracking-wide">ENTERPRISE SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-150 relative py-2 ${
                    active
                      ? 'text-brand-blue font-semibold'
                      : 'text-enterprise-600 hover:text-brand-navy'
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Live ERP Management Portal Link */}
            <Link to="/dashboard">
              <Button variant="outline" size="sm" icon={LayoutDashboard}>
                Live ERP Portal
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" size="sm" icon={PhoneCall}>
                Get Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="px-2.5">
                <LayoutDashboard className="w-4 h-4" />
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-enterprise-600 hover:text-brand-navy hover:bg-enterprise-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-enterprise-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-dropdown">
          <div className="space-y-1">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-brand-blue-light text-brand-blue font-semibold'
                      : 'text-enterprise-700 hover:bg-enterprise-50'
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-enterprise-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-enterprise-100 flex flex-col gap-2.5">
            <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="secondary" className="w-full justify-center" icon={LayoutDashboard}>
                Access ERP Portal
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center" icon={PhoneCall}>
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

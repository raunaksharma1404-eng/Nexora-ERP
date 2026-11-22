import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  TrendingUp,
  Users,
  FileBarChart,
  Settings,
  Layers, 
  ArrowLeft, 
  Bell, 
  Search, 
  Menu, 
  X, 
  CheckCircle2,
  ChevronDown,
  Info,
  LogOut,
  ExternalLink
} from 'lucide-react';
import Badge from '../common/Badge';

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const location = useLocation();

  // 7 Required Navigation Items
  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Inventory', href: '/inventory', icon: Package, badge: 'Low Stock' },
    { name: 'Orders', href: '/orders', icon: ShoppingCart, badge: '14 Active' },
    { name: 'Sales', href: '/sales', icon: TrendingUp },
    { name: 'Customers', href: '/customers', icon: Users },
    { name: 'Reports', href: '/reports', icon: FileBarChart },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  // Dynamic Page Title
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Executive Overview';
      case '/inventory':
        return 'Inventory Management';
      case '/orders':
        return 'Orders & Fulfillment';
      case '/sales':
        return 'Sales & Revenue Telemetry';
      case '/customers':
        return 'Enterprise Accounts';
      case '/reports':
        return 'Audit & Performance Reports';
      case '/settings':
        return 'ERP System Settings';
      default:
        return 'Operations Cockpit';
    }
  };

  const simulatedNotifications = [
    { id: 1, text: 'Low stock warning for SKU-4419 (Safety Curtains)', time: '10m ago', type: 'alert' },
    { id: 2, text: 'Simulated Order ORD-2026-981 marked ready for dispatch', time: '35m ago', type: 'success' },
    { id: 3, text: 'Weekly automated reconciliation demo run finished', time: '2h ago', type: 'info' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex bg-brand-bg text-brand-navy">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-brand-navy/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 1. DARK NAVY SIDEBAR */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-brand-navy text-white flex flex-col transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header with Logo */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-enterprise-800">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white shadow-sm">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight text-white">NEXORA</span>
                <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-brand-blue/30 text-blue-300">ERP</span>
              </div>
              <p className="text-[9px] text-enterprise-400 uppercase tracking-widest font-semibold">Demo Dashboard</p>
            </div>
          </Link>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 text-enterprise-400 hover:text-white"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Data Environment Disclaimer */}
        <div className="px-4 pt-3 pb-1">
          <div className="p-2 rounded-lg bg-enterprise-800/60 border border-enterprise-700/80 text-[10px] text-enterprise-300 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-brand-blue shrink-0" />
            <span>Simulated Demo Environment (Sample Data)</span>
          </div>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-enterprise-400 mb-2">
            Enterprise Navigation
          </p>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                    active
                      ? 'bg-brand-blue text-white shadow-sm font-semibold'
                      : 'text-enterprise-300 hover:bg-enterprise-800/70 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-enterprise-400'}`} />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-semibold ${
                      active ? 'bg-white/20 text-white' : 'bg-enterprise-800 text-enterprise-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer with Back to Website link */}
        <div className="p-3 border-t border-enterprise-800 space-y-2">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-3 py-2 text-xs text-enterprise-300 hover:text-white rounded-lg hover:bg-enterprise-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Website</span>
          </Link>

          {/* User Profile Footer Card */}
          <div className="p-2.5 bg-enterprise-800/70 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-brand-blue flex items-center justify-center text-xs font-bold text-white shrink-0">
                AW
              </div>
              <div className="truncate">
                <p className="text-xs font-semibold text-white truncate">Alexander Wright</p>
                <p className="text-[10px] text-enterprise-400 truncate">VP Operations (Demo)</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* 2. TOP NAVIGATION BAR */}
        <header className="h-16 bg-white border-b border-enterprise-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30 shadow-subtle">
          
          {/* Left: Mobile hamburger + Page Title */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-enterprise-600 hover:bg-enterprise-100"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-brand-navy leading-tight">
                {getPageTitle()}
              </h1>
              <p className="text-[10px] text-enterprise-500 hidden sm:block">
                NEXORA ERP Control Center • Demo Interface
              </p>
            </div>
          </div>

          {/* Right: Search + Notifications + Profile */}
          <div className="flex items-center gap-3">
            {/* Search Field */}
            <div className="relative hidden md:block w-64 lg:w-72">
              <Search className="w-3.5 h-3.5 text-enterprise-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search orders, SKU, customer..." 
                className="w-full text-xs pl-8 pr-3 py-1.5 rounded-lg border border-enterprise-200 bg-enterprise-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
              />
            </div>

            {/* Notification Icon & Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-lg text-enterprise-600 hover:text-brand-navy hover:bg-enterprise-100 relative cursor-pointer"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 rounded-full bg-brand-blue absolute top-1.5 right-1.5" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-card shadow-dropdown border border-enterprise-200 p-3 z-50 space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-enterprise-100">
                    <span className="text-xs font-bold text-brand-navy">Simulated Notifications</span>
                    <span className="text-[10px] text-enterprise-500 font-medium">3 Unread</span>
                  </div>
                  <div className="space-y-1.5">
                    {simulatedNotifications.map((n) => (
                      <div key={n.id} className="p-2 rounded-lg bg-enterprise-50 hover:bg-enterprise-100 text-xs text-enterprise-700 space-y-0.5 transition-colors">
                        <p className="font-medium text-brand-navy leading-snug">{n.text}</p>
                        <p className="text-[10px] text-enterprise-400">{n.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-enterprise-100 text-center">
                    <button 
                      onClick={() => setNotificationsOpen(false)}
                      className="text-[11px] font-semibold text-brand-blue hover:underline"
                    >
                      Close Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="h-5 w-px bg-enterprise-200" />

            {/* User Profile Card / Menu */}
            <div className="relative">
              <button 
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-enterprise-50 transition-colors cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold">
                  AW
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-xs font-bold text-brand-navy leading-tight">Alexander Wright</p>
                  <p className="text-[10px] text-enterprise-500">VP Operations</p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-enterprise-400" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-card shadow-dropdown border border-enterprise-200 p-2 z-50 space-y-1">
                  <div className="px-3 py-2 border-b border-enterprise-100">
                    <p className="text-xs font-bold text-brand-navy">Alexander Wright</p>
                    <p className="text-[11px] text-enterprise-500 truncate">a.wright@enterprise-demo.com</p>
                  </div>
                  <Link 
                    to="/settings" 
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-enterprise-700 hover:bg-enterprise-50 rounded-lg"
                  >
                    <Settings className="w-3.5 h-3.5 text-enterprise-500" />
                    <span>Demo Settings</span>
                  </Link>
                  <Link 
                    to="/" 
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-enterprise-700 hover:bg-enterprise-50 rounded-lg"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-enterprise-500" />
                    <span>Back to Nexora Website</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

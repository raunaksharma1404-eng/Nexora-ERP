
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users } from 'lucide-react';
import AdminLogin from './AdminLogin';

function LandingPage() {
  const navigate = useNavigate();
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-6 py-10">

      <div className="max-w-5xl w-full text-center">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center text-xl font-bold shadow-lg">
            N
          </div>
          <h1 className="text-3xl font-bold text-slate-900">
            Nexora<span className="text-blue-700">.</span>
          </h1>
        </div>

        {/* Introduction */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700 mb-3">
          Enterprise Resource Planning
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">
          Smarter Business.{' '}
          <span className="text-blue-700">Seamless Operations.</span>
        </h2>

        <p className="text-slate-500 text-base max-w-xl mx-auto mb-9">
          One platform to manage your business, teams and operations.
        </p>

        {/* Login Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">

          {/* Customer Login */}
          <button
            onClick={() => navigate('/customer-login')}
            className="group p-7 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
              <Users size={24} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Customer Login
            </h3>

            <p className="text-sm text-slate-500 mb-5">
              Access your business services and customer workspace.
            </p>

            <div className="flex items-center justify-between text-blue-700 font-semibold text-sm">
              Continue as Customer
              <ArrowRight size={19} />
            </div>
          </button>

          {/* Admin Login */}
          <button
            onClick={() => setShowAdminLogin(true)}
            className="group p-7 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-5">
              <ShieldCheck size={24} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Admin Login
            </h3>

            <p className="text-sm text-slate-500 mb-5">
              Manage operations, users and your ERP dashboard.
            </p>

            <div className="flex items-center justify-between text-indigo-700 font-semibold text-sm">
              Continue as Admin
              <ArrowRight size={19} />
            </div>
          </button>

        </div>

        <p className="mt-10 text-xs text-slate-400">
          © 2026 Nexora ERP. All rights reserved.
        </p>

      </div>

      {/* Admin Login Popup */}
      {showAdminLogin && (
        <AdminLogin onClose={() => setShowAdminLogin(false)} />
      )}

    </div>
  );
}

export default LandingPage;

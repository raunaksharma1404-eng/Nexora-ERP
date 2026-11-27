
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, X, LockKeyhole } from 'lucide-react';

function AdminLogin({ onClose }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === 'admin@nexora.com' &&
      password === 'admin123'
    ) {
      navigate('/admin');
    } else {
      alert('Invalid admin credentials!');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-800"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <ShieldCheck size={32} />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Nexora Admin
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to manage your ERP system
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Admin Email
            </label>

            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>

            <div className="relative">
              <LockKeyhole
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-700 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
          >
            Sign In
          </button>

        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          Secure administrator access · Nexora ERP
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;

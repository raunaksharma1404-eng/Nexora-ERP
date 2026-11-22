import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowLeft, LayoutDashboard } from 'lucide-react';
import Button from '../components/common/Button';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center text-brand-blue mx-auto shadow-sm">
          <Layers className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Error 404</span>
          <h1 className="text-3xl font-extrabold text-brand-navy">Resource Not Located</h1>
          <p className="text-sm text-enterprise-600">
            The requested enterprise route or operational endpoint does not exist or has been relocated in the ERP topology.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link to="/">
            <Button variant="outline" size="sm" icon={ArrowLeft}>
              Back to Home
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="primary" size="sm" icon={LayoutDashboard}>
              ERP Portal
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

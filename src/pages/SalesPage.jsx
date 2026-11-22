import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, Download, Filter, BarChart3, Info } from 'lucide-react';
import Card, { CardHeader } from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export const SalesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
              Sales Telemetry
            </span>
            <span className="text-enterprise-300">|</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
              DEMO DATA
            </span>
          </div>
          <h1 className="text-2xl font-bold text-brand-navy mt-1">Sales & Revenue Operations</h1>
          <p className="text-xs text-enterprise-500">
            Simulated gross sales pipelines, account booking targets, and regional distribution revenue.
          </p>
        </div>

        <Button variant="outline" size="sm" icon={Download} onClick={() => alert('Exporting simulated sales metrics (CSV)...')}>
          Export Sales Ledger
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card padding="sm" className="space-y-1 border-l-4 border-l-brand-blue">
          <span className="text-xs text-enterprise-500 font-semibold uppercase">Gross Bookings YTD</span>
          <p className="text-2xl font-bold text-brand-navy">$28.45M</p>
          <p className="text-[11px] text-enterprise-500">Target: $32.0M (88.9% achieved)</p>
        </Card>
        <Card padding="sm" className="space-y-1 border-l-4 border-l-brand-green">
          <span className="text-xs text-enterprise-500 font-semibold uppercase">Average Contract Value</span>
          <p className="text-2xl font-bold text-brand-green">$64,200</p>
          <p className="text-[11px] text-enterprise-500">Across 440 client organizations</p>
        </Card>
        <Card padding="sm" className="space-y-1 border-l-4 border-l-amber-500">
          <span className="text-xs text-enterprise-500 font-semibold uppercase">Open Quotes in Pipeline</span>
          <p className="text-2xl font-bold text-amber-600">32 Proposals</p>
          <p className="text-[11px] text-enterprise-500">$4.8M weighted pipeline value</p>
        </Card>
      </div>

      <Card className="space-y-4">
        <CardHeader 
          title="Simulated Regional Sales Distribution" 
          subtitle="Revenue broken down across industrial corridors"
        />
        <div className="space-y-3">
          {[
            { region: 'Midwest Discrete Manufacturing Hub (Chicago, Detroit, Milwaukee)', volume: '$12.4M', share: '43.6%' },
            { region: 'Southern Process Corridor (Houston, Dallas, Baton Rouge)', volume: '$8.6M', share: '30.2%' },
            { region: 'European Distribution & Port Centers (Rotterdam, Antwerp)', volume: '$4.9M', share: '17.2%' },
            { region: 'Pacific Supply Hub (Seattle, Portland)', volume: '$2.5M', share: '9.0%' }
          ].map((r, i) => (
            <div key={i} className="p-3 rounded-lg bg-enterprise-50 border border-enterprise-200 flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-brand-navy">{r.region}</p>
                <p className="text-[11px] text-enterprise-500">Share of Gross Bookings: {r.share}</p>
              </div>
              <span className="text-sm font-bold text-brand-blue">{r.volume}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SalesPage;

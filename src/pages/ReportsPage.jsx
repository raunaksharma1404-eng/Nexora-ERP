import React from 'react';
import { FileBarChart, Download, Calendar, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import Card, { CardHeader } from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export const ReportsPage = () => {
  const reports = [
    { name: 'Monthly Executive Throughput Reconciliation', period: 'October 2026', size: '2.4 MB', generated: '2026-11-01', format: 'PDF / CSV', type: 'Financial' },
    { name: 'Multi-Warehouse Inventory Cycle Count & Valuation', period: 'Q3 2026', size: '4.8 MB', generated: '2026-10-15', format: 'XLSX / PDF', type: 'Supply Chain' },
    { name: 'Order Fulfillment & OTIF Benchmark Report', period: 'October 2026', size: '1.8 MB', generated: '2026-11-05', format: 'PDF', type: 'Operations' },
    { name: 'SAP vs NetSuite EDI Gateway Transmission Telemetry', period: 'Trailing 30 Days', size: '3.1 MB', generated: '2026-11-18', format: 'JSON / CSV', type: 'Integration' },
    { name: 'Annual ERP License Utilization & TCO Audit', period: 'FY 2026', size: '5.2 MB', generated: '2026-11-10', format: 'PDF', type: 'Governance' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">Reports & Telemetry</span>
            <span className="text-enterprise-300">|</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">DEMO ARCHIVE</span>
          </div>
          <h1 className="text-2xl font-bold text-brand-navy mt-1">Audit & Performance Reports</h1>
          <p className="text-xs text-enterprise-500">
            Simulated periodic financial reconciliations, WMS inventory valuations, and EDI logs.
          </p>
        </div>

        <Button variant="primary" size="sm" icon={FileText} onClick={() => alert('Generating customized demo audit report...')}>
          Generate New Report
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {reports.map((rep, i) => (
          <Card key={i} padding="sm" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-brand-blue transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-blue-light text-brand-blue flex items-center justify-center font-bold shrink-0">
                <FileBarChart className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-brand-navy">{rep.name}</h3>
                  <Badge variant="default" size="sm">{rep.type}</Badge>
                </div>
                <p className="text-xs text-enterprise-500 mt-0.5">
                  Reporting Period: <strong className="text-enterprise-700">{rep.period}</strong> • Generated: {rep.generated} • File Size: {rep.size}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-enterprise-500">{rep.format}</span>
              <Button 
                variant="outline" 
                size="sm" 
                icon={Download} 
                onClick={() => alert(`Downloading demo copy of ${rep.name} (${rep.format})...`)}
              >
                Download
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;

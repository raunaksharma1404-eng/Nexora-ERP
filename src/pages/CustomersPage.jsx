import React, { useState } from 'react';
import { Users, Search, Building2, MapPin, Mail, Phone, ExternalLink, Plus } from 'lucide-react';
import Card, { CardHeader } from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockCustomers = [
    { id: 'CUST-101', name: 'Apex Precision Manufacturing', vertical: 'Discrete Manufacturing', hq: 'Detroit, MI', contacts: 'Marcus Vance (COO)', status: 'Active SLA', erp: 'SAP S/4HANA', ltv: '$480,000' },
    { id: 'CUST-102', name: 'TransGlobal Wholesale Logistics', vertical: 'Wholesale & Distribution', hq: 'Houston, TX', contacts: 'Elena Rostova (VP Supply)', status: 'Active SLA', erp: 'Oracle NetSuite', ltv: '$340,000' },
    { id: 'CUST-103', name: 'Sterling Chemical Dynamics', vertical: 'Process Manufacturing', hq: 'Baton Rouge, LA', contacts: 'David Sterling (CIO)', status: 'Active SLA', erp: 'Dynamics 365', ltv: '$510,000' },
    { id: 'CUST-104', name: 'Nordic Industrial Automation', vertical: 'Industrial Equipment', hq: 'Rotterdam, NL', contacts: 'Jonas Lindholm (VP Ops)', status: 'Cutover Hypercare', erp: 'SAP S/4HANA', ltv: '$290,000' },
    { id: 'CUST-105', name: 'Pacific Rim Supply Consortium', vertical: 'Wholesale & Distribution', hq: 'Seattle, WA', contacts: 'Arthur Pendelton (Director)', status: 'Active SLA', erp: 'Oracle NetSuite', ltv: '$410,000' },
  ];

  const filtered = mockCustomers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.vertical.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">Client Directory</span>
            <span className="text-enterprise-300">|</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">DEMO ACCOUNTS</span>
          </div>
          <h1 className="text-2xl font-bold text-brand-navy mt-1">Enterprise Accounts & Clients</h1>
          <p className="text-xs text-enterprise-500">
            Simulated client directory with ERP target platform mappings and SLA status.
          </p>
        </div>

        <Button variant="primary" size="sm" icon={Plus} onClick={() => alert('New client onboarding wizard (Demo)...')}>
          Add Enterprise Client
        </Button>
      </div>

      <Card padding="none" className="overflow-hidden">
        <div className="p-4 border-b border-enterprise-100 bg-white">
          <div className="relative w-full sm:w-80">
            <Search className="w-3.5 h-3.5 text-enterprise-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by company, vertical, location..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-8 pr-3 py-1.5 rounded-lg border border-enterprise-200 bg-enterprise-50 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-enterprise-50 text-enterprise-600 border-b border-enterprise-200">
                <th className="py-3 px-4 font-semibold">Account ID</th>
                <th className="py-3 px-4 font-semibold">Company Name</th>
                <th className="py-3 px-4 font-semibold">Vertical</th>
                <th className="py-3 px-4 font-semibold">Headquarters</th>
                <th className="py-3 px-4 font-semibold">Primary ERP</th>
                <th className="py-3 px-4 font-semibold">Key Contact</th>
                <th className="py-3 px-4 font-semibold">Support SLA</th>
                <th className="py-3 px-4 font-semibold text-right">Lifetime Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-enterprise-100">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-enterprise-50 transition-colors">
                  <td className="py-3 px-4 font-mono font-semibold text-brand-blue">{c.id}</td>
                  <td className="py-3 px-4 font-bold text-brand-navy">{c.name}</td>
                  <td className="py-3 px-4 text-enterprise-600">{c.vertical}</td>
                  <td className="py-3 px-4 text-enterprise-500">{c.hq}</td>
                  <td className="py-3 px-4"><Badge variant="erp" size="sm">{c.erp}</Badge></td>
                  <td className="py-3 px-4 text-enterprise-700">{c.contacts}</td>
                  <td className="py-3 px-4"><Badge variant="success" size="sm" dot>{c.status}</Badge></td>
                  <td className="py-3 px-4 text-right font-bold text-brand-navy">{c.ltv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default CustomersPage;

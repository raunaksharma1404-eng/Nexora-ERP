import React, { useState } from 'react';
import { Settings, Save, ShieldCheck, Bell, Database, Check } from 'lucide-react';
import Card, { CardHeader } from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export const SettingsPage = () => {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    companyName: 'Nexora Enterprise Client Demo',
    defaultCurrency: 'USD ($)',
    timeZone: 'UTC-06:00 (Central Standard Time)',
    mrpBatchFrequency: 'Nightly (23:00 CST)',
    autoReorderTrigger: true,
    emailAlerts: true,
  });

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">System Preferences</span>
            <span className="text-enterprise-300">|</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">DEMO SETTINGS</span>
          </div>
          <h1 className="text-2xl font-bold text-brand-navy mt-1">ERP Control Center Settings</h1>
          <p className="text-xs text-enterprise-500">
            Configure simulated tenant preferences, automated MRP intervals, and notification dispatch rules.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <Card className="space-y-4">
          <CardHeader title="Tenant & Financial Profile" subtitle="General settings for your simulated ERP portal" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-brand-navy mb-1.5">Tenant Name</label>
              <input 
                type="text" 
                value={settings.companyName}
                onChange={(e) => setSettings({...settings, companyName: e.target.value})}
                className="w-full px-3 py-2 rounded-lg border border-enterprise-200 bg-white"
              />
            </div>
            <div>
              <label className="block font-semibold text-brand-navy mb-1.5">Base Consolidation Currency</label>
              <select 
                value={settings.defaultCurrency}
                onChange={(e) => setSettings({...settings, defaultCurrency: e.target.value})}
                className="w-full px-3 py-2 rounded-lg border border-enterprise-200 bg-white"
              >
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-brand-navy mb-1.5">Primary Operational Timezone</label>
              <select 
                value={settings.timeZone}
                onChange={(e) => setSettings({...settings, timeZone: e.target.value})}
                className="w-full px-3 py-2 rounded-lg border border-enterprise-200 bg-white"
              >
                <option>UTC-06:00 (Central Standard Time - Chicago)</option>
                <option>UTC+01:00 (Central European Time - Rotterdam)</option>
                <option>UTC-05:00 (Eastern Standard Time - Detroit)</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-brand-navy mb-1.5">MRP II Production Run Frequency</label>
              <select 
                value={settings.mrpBatchFrequency}
                onChange={(e) => setSettings({...settings, mrpBatchFrequency: e.target.value})}
                className="w-full px-3 py-2 rounded-lg border border-enterprise-200 bg-white"
              >
                <option>Nightly (23:00 CST)</option>
                <option>Twice Daily (12:00 & 23:00 CST)</option>
                <option>Real-Time Event Driven</option>
              </select>
            </div>
          </div>
        </Card>

        <Card className="space-y-4">
          <CardHeader title="Automated Rules & Triggers" subtitle="Simulated threshold triggers for inventory & procurement" />
          <div className="space-y-3 text-xs">
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={settings.autoReorderTrigger}
                onChange={(e) => setSettings({...settings, autoReorderTrigger: e.target.checked})}
                className="rounded border-enterprise-300 text-brand-blue focus:ring-brand-blue"
              />
              <span className="font-medium text-brand-navy">
                Automatically draft purchase orders when SKU stock dips below safety threshold
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={settings.emailAlerts}
                onChange={(e) => setSettings({...settings, emailAlerts: e.target.checked})}
                className="rounded border-enterprise-300 text-brand-blue focus:ring-brand-blue"
              />
              <span className="font-medium text-brand-navy">
                Send simulated high-priority notifications for critical stockouts
              </span>
            </label>
          </div>
        </Card>

        <div className="flex items-center gap-3">
          <Button type="submit" variant="primary" size="md" icon={Save}>
            Save Preferences
          </Button>
          {saved && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-green">
              <Check className="w-4 h-4" />
              Demo settings updated successfully!
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;

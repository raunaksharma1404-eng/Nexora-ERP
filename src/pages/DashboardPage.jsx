import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Package, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  RefreshCw, 
  Download, 
  Eye, 
  ArrowUpRight, 
  Layers, 
  Filter, 
  Info,
  Calendar,
  Building,
  Check
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import Card, { CardHeader } from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { MOCK_ORDERS, MOCK_INVENTORY_ITEMS } from '../data/mockData';

// 1. Revenue Overview Data (Monthly Comparison - Demo Data)
const revenueOverviewData = [
  { month: 'Jun', currentPeriod: 380, previousPeriod: 310 },
  { month: 'Jul', currentPeriod: 420, previousPeriod: 340 },
  { month: 'Aug', currentPeriod: 490, previousPeriod: 390 },
  { month: 'Sep', currentPeriod: 580, previousPeriod: 430 },
  { month: 'Oct', currentPeriod: 640, previousPeriod: 510 },
  { month: 'Nov', currentPeriod: 720, previousPeriod: 580 },
];

// 2. Orders Analytics Data (Received vs Fulfilled - Demo Data)
const ordersAnalyticsData = [
  { month: 'Jun', received: 180, fulfilled: 172 },
  { month: 'Jul', received: 210, fulfilled: 202 },
  { month: 'Aug', received: 260, fulfilled: 251 },
  { month: 'Sep', received: 310, fulfilled: 298 },
  { month: 'Oct', received: 340, fulfilled: 326 },
  { month: 'Nov', received: 390, fulfilled: 374 },
];

// 3. Sales Category Breakdown Data (Demo Data)
const salesCategoryData = [
  { name: 'Machinery Components', value: 42, color: '#155EEF' },
  { name: 'Electronics & Automation', value: 28, color: '#12B76A' },
  { name: 'Hardware & Fasteners', value: 18, color: '#F79009' },
  { name: 'Raw Materials & Seals', value: 12, color: '#101828' },
];

export const DashboardPage = () => {
  const [orderFilter, setOrderFilter] = useState('All');
  const [selectedTimeframe, setSelectedTimeframe] = useState('Trailing 6 Months');
  const [isExporting, setIsExporting] = useState(false);

  // Filter orders
  const filteredOrders = MOCK_ORDERS.filter(order => {
    if (orderFilter === 'All') return true;
    return order.status === orderFilter;
  });

  // Filter inventory alerts (items with Low Stock or Critical Reorder)
  const alertItems = MOCK_INVENTORY_ITEMS.filter(
    item => item.status === 'Low Stock' || item.status === 'Critical Reorder'
  );

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert('Demo report exported successfully (CSV/PDF sample).');
    }, 800);
  };

  return (
    <div className="space-y-6">
      
      {/* ========================================================= */}
      {/* 1. TOP HEADER & DEMO BANNER                               */}
      {/* ========================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
              NEXORA Operations Suite
            </span>
            <span className="text-enterprise-300">|</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
              <Info className="w-3 h-3" />
              DEMO DATA ONLY
            </span>
          </div>
          <h1 className="text-2xl font-bold text-brand-navy mt-1">Executive ERP Overview</h1>
          <p className="text-xs text-enterprise-500">
            Interactive simulated operations dashboard demonstrating multi-plant throughput, inventory triggers, and order status.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <select 
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="text-xs px-3 py-2 rounded-lg border border-enterprise-200 bg-white text-enterprise-700 focus:outline-none focus:ring-2 focus:ring-brand-blue font-medium"
          >
            <option>Trailing 30 Days</option>
            <option>Trailing 6 Months</option>
            <option>Year to Date (YTD)</option>
          </select>

          <Button 
            variant="outline" 
            size="sm" 
            icon={Download}
            loading={isExporting}
            onClick={handleExport}
          >
            Export Demo Report
          </Button>
        </div>
      </div>

      {/* Demo environment alert ribbon */}
      <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-xs text-blue-900">
        <div className="flex items-center gap-2.5">
          <Info className="w-4 h-4 text-brand-blue shrink-0" />
          <span>
            <strong>Simulated Environment:</strong> All figures, SKUs, and order records below represent realistic mock benchmark data. No live production ERP connection is active.
          </span>
        </div>
        <Link to="/" className="text-xs font-semibold text-brand-blue hover:underline whitespace-nowrap pl-4">
          Visit Consultancy Site &rarr;
        </Link>
      </div>

      {/* ========================================================= */}
      {/* 2. 4 REQUIRED KPI CARDS (CLEARLY LABELED DEMO DATA)       */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Total Revenue */}
        <Card padding="sm" className="space-y-2 border-l-4 border-l-brand-blue shadow-subtle hover:shadow-card transition-shadow">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs font-bold uppercase tracking-wider">Total Revenue</span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-brand-navy">$28,450,000</span>
            <Badge variant="success" size="sm">+14.2% YoY</Badge>
          </div>
          <div className="flex items-center justify-between text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">
            <span>Aggregated 3 Platforms</span>
            <span className="font-semibold text-enterprise-400 uppercase tracking-widest text-[9px]">Demo Data</span>
          </div>
        </Card>

        {/* KPI 2: Total Orders */}
        <Card padding="sm" className="space-y-2 border-l-4 border-l-brand-green shadow-subtle hover:shadow-card transition-shadow">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs font-bold uppercase tracking-wider">Total Orders</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center">
              <ShoppingCart className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-brand-navy">1,420</span>
            <Badge variant="success" size="sm">+8.6% MoM</Badge>
          </div>
          <div className="flex items-center justify-between text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">
            <span>98.6% On-Time In-Full</span>
            <span className="font-semibold text-enterprise-400 uppercase tracking-widest text-[9px]">Demo Data</span>
          </div>
        </Card>

        {/* KPI 3: Inventory Items */}
        <Card padding="sm" className="space-y-2 border-l-4 border-l-enterprise-700 shadow-subtle hover:shadow-card transition-shadow">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs font-bold uppercase tracking-wider">Inventory Items</span>
            <div className="w-7 h-7 rounded-lg bg-enterprise-100 text-enterprise-700 flex items-center justify-center">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-brand-navy">12,480 SKUs</span>
            <span className="text-xs font-bold text-brand-navy">3 Hubs</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">
            <span>Valuation: $16.82M</span>
            <span className="font-semibold text-enterprise-400 uppercase tracking-widest text-[9px]">Demo Data</span>
          </div>
        </Card>

        {/* KPI 4: Pending Deliveries */}
        <Card padding="sm" className="space-y-2 border-l-4 border-l-amber-500 shadow-subtle hover:shadow-card transition-shadow">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs font-bold uppercase tracking-wider">Pending Deliveries</span>
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-amber-600">48 Orders</span>
            <Badge variant="warning" size="sm">Active Picking</Badge>
          </div>
          <div className="flex items-center justify-between text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">
            <span>Avg Dispatch: 18.4 hrs</span>
            <span className="font-semibold text-enterprise-400 uppercase tracking-widest text-[9px]">Demo Data</span>
          </div>
        </Card>
      </div>

      {/* ========================================================= */}
      {/* 3. THREE CHARTS USING RECHARTS                            */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Chart 1: Revenue Overview Chart (AreaChart) - 8 cols */}
        <Card className="lg:col-span-8 space-y-4">
          <CardHeader 
            title="Revenue Overview ($k)"
            subtitle="Current Period vs. Previous Period Trailing Monthly Telemetry"
            action={
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-enterprise-100 text-enterprise-600 uppercase tracking-wider">
                Demo Trend
              </span>
            }
          />
          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueOverviewData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="currentRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#155EEF" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#155EEF" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="prevRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D0D5DD" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#D0D5DD" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#EAECF0" />
                <XAxis dataKey="month" stroke="#98A2B3" fontSize={11} tickLine={false} />
                <YAxis stroke="#98A2B3" fontSize={11} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#101828', borderRadius: '8px', color: '#fff', fontSize: '11px', border: 'none' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="currentPeriod" 
                  stroke="#155EEF" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#currentRevenue)" 
                  name="Current Fiscal Year ($k)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="previousPeriod" 
                  stroke="#98A2B3" 
                  strokeWidth={1.5} 
                  strokeDasharray="4 4"
                  fillOpacity={1} 
                  fill="url(#prevRevenue)" 
                  name="Previous Fiscal Year ($k)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 pt-2 text-xs text-enterprise-600 border-t border-enterprise-100">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-brand-blue" />
              <span>Current Fiscal Year ($k)</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-1.5 rounded-sm bg-enterprise-400" />
              <span>Previous Fiscal Year</span>
            </span>
          </div>
        </Card>

        {/* Chart 3: Sales Category Chart (Pie/Donut) - 4 cols */}
        <Card className="lg:col-span-4 space-y-4">
          <CardHeader 
            title="Sales by Category"
            subtitle="Wholesale & Manufacturing Product Mix"
            action={
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-enterprise-100 text-enterprise-600 uppercase tracking-wider">
                Share %
              </span>
            }
          />
          <div className="h-56 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesCategoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {salesCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}% Share`, 'Volume']}
                  contentStyle={{ backgroundColor: '#101828', borderRadius: '8px', color: '#fff', fontSize: '11px', border: 'none' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1.5 pt-2 border-t border-enterprise-100 text-xs">
            {salesCategoryData.map((cat, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-enterprise-700">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="truncate max-w-[170px]">{cat.name}</span>
                </span>
                <span className="font-bold text-brand-navy">{cat.value}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Chart 2: Orders Analytics Chart (BarChart) - Full 12 cols */}
        <Card className="lg:col-span-12 space-y-4">
          <CardHeader 
            title="Orders Analytics: Received vs. Fulfilled"
            subtitle="Monthly throughput tracking order intake against completed shipments"
            action={
              <Badge variant="erp" size="sm">
                98.6% Fulfillment Rate
              </Badge>
            }
          />
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ordersAnalyticsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EAECF0" />
                <XAxis dataKey="month" stroke="#98A2B3" fontSize={11} tickLine={false} />
                <YAxis stroke="#98A2B3" fontSize={11} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#101828', borderRadius: '8px', color: '#fff', fontSize: '11px', border: 'none' }}
                />
                <Legend 
                  wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} 
                />
                <Bar dataKey="received" fill="#155EEF" name="Orders Received" radius={[4, 4, 0, 0]} />
                <Bar dataKey="fulfilled" fill="#12B76A" name="Orders Fulfilled (Shipped/Delivered)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

      </div>

      {/* ========================================================= */}
      {/* 4. INVENTORY ALERTS SECTION                                */}
      {/* ========================================================= */}
      <Card className="space-y-4 border-l-4 border-l-rose-500 shadow-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-enterprise-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-brand-navy">Critical Inventory Alerts</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                  {alertItems.length} Triggers Active
                </span>
              </div>
              <p className="text-xs text-enterprise-500">
                Automated reorder point violations detected across warehouse locations.
              </p>
            </div>
          </div>

          <Link to="/inventory">
            <Button variant="outline" size="sm" icon={Package}>
              Open Full Inventory View
            </Button>
          </Link>
        </div>

        {/* Alert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alertItems.map((item) => (
            <div 
              key={item.id}
              className="p-4 rounded-xl border border-rose-200 bg-rose-50/40 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-rose-700">{item.id}</span>
                    <Badge variant="danger" size="sm" dot>{item.status}</Badge>
                  </div>
                  <h4 className="text-sm font-bold text-brand-navy mt-1">{item.name}</h4>
                  <p className="text-xs text-enterprise-600">{item.warehouse} • {item.category}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-enterprise-500">Unit Price: </span>
                  <span className="text-xs font-bold text-brand-navy">${item.unitPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Progress bar comparing stock vs threshold */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-enterprise-600 font-medium">Available: <strong className="text-rose-700">{item.quantity} units</strong></span>
                  <span className="text-enterprise-500">Reorder Threshold: <strong>{item.reorderPoint} units</strong></span>
                </div>
                <div className="w-full h-2 rounded-full bg-enterprise-200 overflow-hidden">
                  <div 
                    className="h-full bg-rose-500 rounded-full"
                    style={{ width: `${Math.min(100, (item.quantity / item.reorderPoint) * 100)}%` }}
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-rose-200/60 flex items-center justify-between">
                <span className="text-[10px] text-enterprise-500">Simulated MRP Trigger</span>
                <button 
                  onClick={() => alert(`Simulated Replenishment PO issued for ${item.id} (${item.reorderPoint * 2} units requested).`)}
                  className="px-3 py-1 bg-brand-navy hover:bg-enterprise-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Initiate Reorder PO
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* ========================================================= */}
      {/* 5. RECENT ORDERS TABLE                                    */}
      {/* ========================================================= */}
      <Card padding="none" className="overflow-hidden border border-enterprise-200 shadow-subtle">
        <div className="p-4 sm:p-5 border-b border-enterprise-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-brand-navy">Recent Multi-Channel Orders</h3>
              <Badge variant="erp" size="sm">Demo Ledger</Badge>
            </div>
            <p className="text-xs text-enterprise-500 mt-0.5">
              Simulated order-to-cash pipeline across manufacturing clients and wholesale buyers.
            </p>
          </div>

          {/* Table status filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {['All', 'Processing', 'Shipped', 'Delivered', 'Pending Approval'].map((tab) => (
              <button
                key={tab}
                onClick={() => setOrderFilter(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  orderFilter === tab
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-enterprise-100 text-enterprise-600 hover:bg-enterprise-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-enterprise-50 text-enterprise-600 border-b border-enterprise-200">
                <th className="py-3 px-4 font-semibold">Order ID</th>
                <th className="py-3 px-4 font-semibold">Client / Enterprise</th>
                <th className="py-3 px-4 font-semibold">ERP Reference</th>
                <th className="py-3 px-4 font-semibold">Destination</th>
                <th className="py-3 px-4 font-semibold text-right">Items</th>
                <th className="py-3 px-4 font-semibold text-right">Order Total</th>
                <th className="py-3 px-4 font-semibold">Priority</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-enterprise-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-enterprise-50 transition-colors">
                  <td className="py-3 px-4 font-mono font-semibold text-brand-blue">{order.id}</td>
                  <td className="py-3 px-4 font-semibold text-brand-navy">{order.customer}</td>
                  <td className="py-3 px-4 font-mono text-[11px] text-enterprise-500">{order.erpRef}</td>
                  <td className="py-3 px-4 text-enterprise-600">{order.destination}</td>
                  <td className="py-3 px-4 text-right font-medium text-enterprise-700">{order.itemsCount}</td>
                  <td className="py-3 px-4 text-right font-bold text-brand-navy">${order.total.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      order.priority === 'Urgent' ? 'bg-rose-100 text-rose-700' :
                      order.priority === 'High' ? 'bg-amber-100 text-amber-700' :
                      'bg-enterprise-100 text-enterprise-600'
                    }`}>
                      {order.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Badge 
                      variant={
                        order.status === 'Delivered' ? 'success' :
                        order.status === 'Shipped' ? 'primary' :
                        order.status === 'Processing' ? 'warning' : 'default'
                      }
                      size="sm"
                      dot
                    >
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button 
                      onClick={() => alert(`Simulated audit trace for Order ${order.id}:\n- Total: $${order.total.toLocaleString()}\n- Customer: ${order.customer}\n- Reference: ${order.erpRef}`)}
                      className="p-1 rounded text-enterprise-500 hover:text-brand-blue hover:bg-enterprise-100 cursor-pointer"
                      title="Inspect Simulated Order"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-enterprise-50 border-t border-enterprise-100 flex items-center justify-between text-xs text-enterprise-500">
          <span>Displaying {filteredOrders.length} of {MOCK_ORDERS.length} simulated orders</span>
          <Link to="/orders" className="text-brand-blue font-semibold hover:underline">
            Manage Complete Order Ledger &rarr;
          </Link>
        </div>
      </Card>

    </div>
  );
};

export default DashboardPage;

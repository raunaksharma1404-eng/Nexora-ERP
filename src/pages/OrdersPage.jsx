import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  Truck, 
  AlertCircle, 
  Eye, 
  Plus, 
  X, 
  Save, 
  Download, 
  ArrowUpRight, 
  Info,
  Calendar,
  Building,
  DollarSign,
  FileText,
  User,
  MapPin,
  Check
} from 'lucide-react';
import Card, { CardHeader } from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

// Initial realistic sample orders data
const INITIAL_ORDERS = [
  {
    id: 'ORD-2026-981',
    customer: 'Apex Precision Manufacturing',
    date: '2026-11-21',
    product: 'Industrial CNC Hydraulic Actuator',
    quantity: 14,
    amount: 38400.00,
    destination: 'Detroit, MI',
    priority: 'High',
    status: 'Processing',
    erpRef: 'SAP-SO-77412',
    lineItems: [
      { sku: 'SKU-8921', name: 'Industrial CNC Hydraulic Actuator', qty: 10, unitPrice: 2400.00 },
      { sku: 'SKU-6523', name: 'Fluoropolymer High-Pressure Seals', qty: 400, unitPrice: 36.00 }
    ]
  },
  {
    id: 'ORD-2026-980',
    customer: 'TransGlobal Wholesale Logistics',
    date: '2026-11-21',
    product: 'Heavy-Duty Conveyor Roller Assembly',
    quantity: 48,
    amount: 112500.00,
    destination: 'Houston, TX',
    priority: 'Normal',
    status: 'Shipped',
    erpRef: 'NS-ORD-44910',
    lineItems: [
      { sku: 'SKU-3128', name: 'Heavy-Duty Conveyor Roller Assembly', qty: 48, unitPrice: 2150.00 },
      { sku: 'SKU-7740', name: 'Precision Micro-Alloy Bearings', qty: 80, unitPrice: 116.25 }
    ]
  },
  {
    id: 'ORD-2026-979',
    customer: 'Sterling Chemical Dynamics',
    date: '2026-11-20',
    product: 'Programmable Logic Controller (PLC-V4)',
    quantity: 6,
    amount: 19800.00,
    destination: 'Baton Rouge, LA',
    priority: 'Normal',
    status: 'Delivered',
    erpRef: 'D365-PO-33019',
    lineItems: [
      { sku: 'SKU-9012', name: 'Programmable Logic Controller (PLC-V4)', qty: 6, unitPrice: 3300.00 }
    ]
  },
  {
    id: 'ORD-2026-978',
    customer: 'Nordic Industrial Automation',
    date: '2026-11-20',
    product: 'Optoelectronic Safety Curtains (24V)',
    quantity: 32,
    amount: 84200.00,
    destination: 'Rotterdam, NL',
    priority: 'Urgent',
    status: 'Pending',
    erpRef: 'SAP-SO-77408',
    lineItems: [
      { sku: 'SKU-4419', name: 'Optoelectronic Safety Curtains (24V)', qty: 32, unitPrice: 2631.25 }
    ]
  },
  {
    id: 'ORD-2026-977',
    customer: 'Pacific Rim Supply Consortium',
    date: '2026-11-19',
    product: 'Precision Micro-Alloy Bearings (Pack 50)',
    quantity: 22,
    amount: 54100.00,
    destination: 'Seattle, WA',
    priority: 'Normal',
    status: 'Delivered',
    erpRef: 'NS-ORD-44901',
    lineItems: [
      { sku: 'SKU-7740', name: 'Precision Micro-Alloy Bearings (Pack 50)', qty: 22, unitPrice: 2459.09 }
    ]
  },
  {
    id: 'ORD-2026-976',
    customer: 'Midwest Heavy Equipment Fab',
    date: '2026-11-18',
    product: 'Variable Frequency Drive Inverter',
    quantity: 8,
    amount: 14200.00,
    destination: 'Milwaukee, WI',
    priority: 'Normal',
    status: 'Cancelled',
    erpRef: 'D365-PO-33014',
    lineItems: [
      { sku: 'SKU-1088', name: 'Variable Frequency Drive Inverter', qty: 8, unitPrice: 1775.00 }
    ]
  }
];

export const OrdersPage = () => {
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Modals
  const [viewOrderModal, setViewOrderModal] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Create Order Form State
  const [formData, setFormData] = useState({
    customer: '',
    product: 'Industrial CNC Hydraulic Actuator',
    quantity: '1',
    amount: '',
    destination: '',
    priority: 'Normal',
    status: 'Processing',
  });
  const [formErrors, setFormErrors] = useState({});

  // Overview Calculations
  const totalOrdersCount = orders.length;
  const totalRevenue = orders
    .filter(o => o.status !== 'Cancelled')
    .reduce((sum, o) => sum + Number(o.amount || 0), 0);
  const pendingProcessingCount = orders.filter(o => o.status === 'Pending' || o.status === 'Processing').length;
  const completedDeliveredCount = orders.filter(o => o.status === 'Delivered').length;

  // Filtered Orders
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Open Create Order Modal
  const handleOpenCreateModal = () => {
    setFormData({
      customer: '',
      product: 'Industrial CNC Hydraulic Actuator',
      quantity: '10',
      amount: '18500.00',
      destination: '',
      priority: 'Normal',
      status: 'Processing',
    });
    setFormErrors({});
    setIsCreateModalOpen(true);
  };

  // Validate Form
  const validateForm = () => {
    const errors = {};
    if (!formData.customer.trim()) errors.customer = 'Customer name is required';
    if (!formData.product.trim()) errors.product = 'Primary product is required';
    if (!formData.destination.trim()) errors.destination = 'Destination location is required';
    if (!formData.amount || isNaN(formData.amount) || Number(formData.amount) <= 0) {
      errors.amount = 'Valid order amount is required';
    }
    if (!formData.quantity || isNaN(formData.quantity) || Number(formData.quantity) <= 0) {
      errors.quantity = 'Valid quantity is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit New Order
  const handleCreateOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newOrder = {
      id: `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: formData.customer.trim(),
      date: new Date().toISOString().split('T')[0],
      product: formData.product.trim(),
      quantity: Number(formData.quantity),
      amount: Number(formData.amount),
      destination: formData.destination.trim(),
      priority: formData.priority,
      status: formData.status,
      erpRef: `SIM-ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      lineItems: [
        {
          sku: 'SKU-CUSTOM',
          name: formData.product.trim(),
          qty: Number(formData.quantity),
          unitPrice: Number(formData.amount) / Number(formData.quantity)
        }
      ]
    };

    setOrders([newOrder, ...orders]);
    setIsCreateModalOpen(false);
  };

  // Update Status in View Modal
  const handleUpdateStatus = (newStatus) => {
    if (!viewOrderModal) return;
    const updated = { ...viewOrderModal, status: newStatus };
    setOrders(orders.map(o => o.id === viewOrderModal.id ? updated : o));
    setViewOrderModal(updated);
  };

  return (
    <div className="space-y-6">
      
      {/* ========================================================= */}
      {/* 1. PAGE HEADER                                            */}
      {/* ========================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-enterprise-500 mb-1">
            <span>ERP Modules</span>
            <span>/</span>
            <span className="text-brand-blue font-semibold">Orders & Fulfillment</span>
            <span>|</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
              <Info className="w-3 h-3" />
              LOCAL DEMO STATE
            </span>
          </div>
          <h1 className="text-2xl font-bold text-brand-navy">Order-to-Cash Fulfillment Management</h1>
          <p className="text-xs text-enterprise-500">
            Multi-client wholesale dispatch tracking, order lifecycle transitions, and simulated ledger entry.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="primary" 
            size="sm" 
            icon={Plus}
            onClick={handleOpenCreateModal}
          >
            Create Order
          </Button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. ORDERS OVERVIEW STATISTICS                             */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Orders */}
        <Card padding="sm" className="space-y-1 shadow-subtle border-l-4 border-l-brand-blue">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs uppercase font-bold tracking-wider">Total Orders</span>
            <ShoppingCart className="w-4 h-4 text-brand-blue" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-brand-navy">{totalOrdersCount}</p>
            <span className="text-xs font-semibold text-brand-blue">Multi-Channel</span>
          </div>
          <p className="text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">Live order repository</p>
        </Card>

        {/* Total Pipeline Revenue */}
        <Card padding="sm" className="space-y-1 shadow-subtle border-l-4 border-l-enterprise-800">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs uppercase font-bold tracking-wider">Active Pipeline Value</span>
            <DollarSign className="w-4 h-4 text-brand-navy" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-brand-navy">
              ${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <Badge variant="erp" size="sm">Gross Value</Badge>
          </div>
          <p className="text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">Excludes cancelled orders</p>
        </Card>

        {/* Pending / Processing */}
        <Card padding="sm" className="space-y-1 shadow-subtle border-l-4 border-l-amber-500">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs uppercase font-bold tracking-wider">In Fulfillment</span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-amber-600">{pendingProcessingCount} Orders</p>
            <Badge variant="warning" size="sm">In Progress</Badge>
          </div>
          <p className="text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">Pending approval or packing</p>
        </Card>

        {/* Completed / Delivered */}
        <Card padding="sm" className="space-y-1 shadow-subtle border-l-4 border-l-brand-green">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs uppercase font-bold tracking-wider">Delivered</span>
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-brand-green">{completedDeliveredCount} Orders</p>
            <Badge variant="success" size="sm">Fulfilled</Badge>
          </div>
          <p className="text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">On-Time In-Full delivered</p>
        </Card>
      </div>

      {/* ========================================================= */}
      {/* 3. SEARCH & STATUS FILTER BAR                             */}
      {/* ========================================================= */}
      <Card padding="sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Field */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-enterprise-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by order ID, customer, product..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 rounded-lg border border-enterprise-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          {/* Status Tab Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  statusFilter === tab
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-enterprise-100 text-enterprise-600 hover:bg-enterprise-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* ========================================================= */}
      {/* 4. ORDERS TABLE                                           */}
      {/* ========================================================= */}
      <Card padding="none" className="overflow-hidden shadow-subtle border border-enterprise-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-enterprise-50 text-enterprise-600 border-b border-enterprise-200">
                <th className="py-3 px-4 font-semibold">Order ID</th>
                <th className="py-3 px-4 font-semibold">Customer Account</th>
                <th className="py-3 px-4 font-semibold">Order Date</th>
                <th className="py-3 px-4 font-semibold">Primary Product</th>
                <th className="py-3 px-4 font-semibold">Destination</th>
                <th className="py-3 px-4 font-semibold text-right">Amount</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-enterprise-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-enterprise-50 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-brand-blue">{order.id}</td>
                  <td className="py-3 px-4 font-bold text-brand-navy">
                    {order.customer}
                    <span className="block text-[10px] font-normal font-mono text-enterprise-400 mt-0.5">{order.erpRef}</span>
                  </td>
                  <td className="py-3 px-4 text-enterprise-500 whitespace-nowrap">{order.date}</td>
                  <td className="py-3 px-4">
                    <p className="font-medium text-brand-navy truncate max-w-[220px]">{order.product}</p>
                    <span className="text-[10px] text-enterprise-400">Qty: {order.quantity} units</span>
                  </td>
                  <td className="py-3 px-4 text-enterprise-600">{order.destination}</td>
                  <td className="py-3 px-4 text-right font-bold text-brand-navy">
                    ${order.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="py-3 px-4">
                    <Badge 
                      variant={
                        order.status === 'Delivered' ? 'success' :
                        order.status === 'Shipped' ? 'primary' :
                        order.status === 'Processing' ? 'warning' :
                        order.status === 'Cancelled' ? 'danger' : 'default'
                      }
                      size="sm"
                      dot
                    >
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      icon={Eye}
                      onClick={() => setViewOrderModal(order)}
                    >
                      View Order
                    </Button>
                  </td>
                </tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan="8" className="py-8 text-center text-enterprise-500">
                    No orders matched your search or status filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-enterprise-50 border-t border-enterprise-100 flex items-center justify-between text-xs text-enterprise-500">
          <span>Showing {filteredOrders.length} of {orders.length} orders</span>
          <span className="font-medium text-[11px] text-enterprise-400">Local React State (Changes persist during this session)</span>
        </div>
      </Card>

      {/* ========================================================= */}
      {/* 5. VIEW ORDER DETAILS MODAL                               */}
      {/* ========================================================= */}
      {viewOrderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm">
          <div className="bg-white rounded-card shadow-elevated w-full max-w-xl border border-enterprise-200 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 bg-enterprise-50 border-b border-enterprise-100 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-brand-blue">{viewOrderModal.id}</span>
                  <Badge 
                    variant={
                      viewOrderModal.status === 'Delivered' ? 'success' :
                      viewOrderModal.status === 'Shipped' ? 'primary' :
                      viewOrderModal.status === 'Processing' ? 'warning' :
                      viewOrderModal.status === 'Cancelled' ? 'danger' : 'default'
                    }
                    size="sm"
                    dot
                  >
                    {viewOrderModal.status}
                  </Badge>
                </div>
                <p className="text-xs text-enterprise-500 mt-0.5">Order Detail Ledger & Simulated Fulfillment Trace</p>
              </div>
              <button 
                onClick={() => setViewOrderModal(null)}
                className="p-1 rounded text-enterprise-400 hover:text-brand-navy"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-xs">
              {/* Customer & Delivery Summary */}
              <div className="grid grid-cols-2 gap-4 p-3 bg-enterprise-50 rounded-lg border border-enterprise-200">
                <div>
                  <span className="text-[10px] font-bold uppercase text-enterprise-400">Customer Account</span>
                  <p className="font-bold text-brand-navy text-sm mt-0.5">{viewOrderModal.customer}</p>
                  <p className="text-enterprise-500 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-blue" />
                    <span>{viewOrderModal.destination}</span>
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-enterprise-400">Order Reference</span>
                  <p className="font-mono text-xs font-bold text-brand-navy mt-0.5">{viewOrderModal.erpRef}</p>
                  <p className="text-enterprise-500 mt-0.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-enterprise-400" />
                    <span>Placed on {viewOrderModal.date}</span>
                  </p>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Line Items:</span>
                <div className="border border-enterprise-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-enterprise-50 text-enterprise-600 border-b border-enterprise-200">
                        <th className="p-2.5 font-semibold">Item & SKU</th>
                        <th className="p-2.5 font-semibold text-center">Qty</th>
                        <th className="p-2.5 font-semibold text-right">Unit Price</th>
                        <th className="p-2.5 font-semibold text-right">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-enterprise-100">
                      {viewOrderModal.lineItems?.map((item, idx) => (
                        <tr key={idx}>
                          <td className="p-2.5">
                            <p className="font-semibold text-brand-navy">{item.name}</p>
                            <span className="font-mono text-[10px] text-brand-blue">{item.sku}</span>
                          </td>
                          <td className="p-2.5 text-center font-bold text-brand-navy">{item.qty}</td>
                          <td className="p-2.5 text-right text-enterprise-600">${item.unitPrice.toFixed(2)}</td>
                          <td className="p-2.5 text-right font-bold text-brand-navy">
                            ${(item.qty * item.unitPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                        </tr>
                      )) || (
                        <tr>
                          <td className="p-2.5 font-semibold text-brand-navy">{viewOrderModal.product}</td>
                          <td className="p-2.5 text-center font-bold text-brand-navy">{viewOrderModal.quantity}</td>
                          <td className="p-2.5 text-right text-enterprise-600">
                            ${(viewOrderModal.amount / viewOrderModal.quantity).toFixed(2)}
                          </td>
                          <td className="p-2.5 text-right font-bold text-brand-navy">
                            ${viewOrderModal.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between p-3 bg-enterprise-50 rounded-lg text-sm font-bold text-brand-navy">
                  <span>Total Order Amount:</span>
                  <span className="text-base text-brand-blue font-extrabold">
                    ${viewOrderModal.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              {/* Status Transition Control */}
              <div className="pt-2 border-t border-enterprise-100 space-y-2">
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Update Order Lifecycle State:</span>
                <div className="flex flex-wrap gap-2">
                  {['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((st) => (
                    <button
                      key={st}
                      onClick={() => handleUpdateStatus(st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        viewOrderModal.status === st
                          ? 'bg-brand-navy text-white shadow-sm'
                          : 'bg-enterprise-100 text-enterprise-700 hover:bg-enterprise-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-enterprise-50 border-t border-enterprise-100 flex items-center justify-between">
              <span className="text-[10px] text-enterprise-500">Changes update local session state immediately</span>
              <Button variant="primary" size="sm" onClick={() => setViewOrderModal(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. CREATE ORDER MODAL (WITH VALIDATION)                   */}
      {/* ========================================================= */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm">
          <div className="bg-white rounded-card shadow-elevated w-full max-w-lg border border-enterprise-200 overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-enterprise-50 border-b border-enterprise-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-brand-navy">Create New Sales Order</h3>
                <p className="text-xs text-enterprise-500">Record a simulated wholesale or manufacturing dispatch</p>
              </div>
              <button 
                onClick={() => setIsCreateModalOpen(false)}
                className="p-1 rounded text-enterprise-400 hover:text-brand-navy"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleCreateOrder} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-brand-navy mb-1">
                  Customer / Enterprise Account *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Apex Precision Manufacturing"
                  value={formData.customer}
                  onChange={(e) => setFormData({...formData, customer: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    formErrors.customer ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                  } focus:outline-none focus:ring-2`}
                />
                {formErrors.customer && <p className="text-rose-600 text-[10px] mt-1">{formErrors.customer}</p>}
              </div>

              <div>
                <label className="block font-semibold text-brand-navy mb-1">
                  Primary Product Ordered *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Industrial CNC Hydraulic Actuator"
                  value={formData.product}
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    formErrors.product ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                  } focus:outline-none focus:ring-2`}
                />
                {formErrors.product && <p className="text-rose-600 text-[10px] mt-1">{formErrors.product}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-brand-navy mb-1">
                    Units Quantity *
                  </label>
                  <input 
                    type="number" 
                    min="1"
                    placeholder="e.g. 10"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formErrors.quantity ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                    } focus:outline-none focus:ring-2`}
                  />
                  {formErrors.quantity && <p className="text-rose-600 text-[10px] mt-1">{formErrors.quantity}</p>}
                </div>
                <div>
                  <label className="block font-semibold text-brand-navy mb-1">
                    Total Order Value ($ USD) *
                  </label>
                  <input 
                    type="number" 
                    step="0.01"
                    min="1"
                    placeholder="e.g. 18500.00"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formErrors.amount ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                    } focus:outline-none focus:ring-2`}
                  />
                  {formErrors.amount && <p className="text-rose-600 text-[10px] mt-1">{formErrors.amount}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-brand-navy mb-1">
                    Destination Location *
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Detroit, MI"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formErrors.destination ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                    } focus:outline-none focus:ring-2`}
                  />
                  {formErrors.destination && <p className="text-rose-600 text-[10px] mt-1">{formErrors.destination}</p>}
                </div>
                <div>
                  <label className="block font-semibold text-brand-navy mb-1">
                    Priority Level
                  </label>
                  <select 
                    value={formData.priority}
                    onChange={(e) => setFormData({...formData, priority: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-enterprise-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option>Normal</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-brand-navy mb-1">
                  Initial Fulfillment Status
                </label>
                <select 
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full px-3 py-2 rounded-lg border border-enterprise-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                >
                  <option>Processing</option>
                  <option>Pending</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-enterprise-100 flex items-center justify-end gap-2.5">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="sm" 
                  icon={Save}
                >
                  Create Order
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default OrdersPage;

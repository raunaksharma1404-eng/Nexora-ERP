import React, { useState } from 'react';
import { 
  Package, 
  Search, 
  Filter, 
  AlertTriangle, 
  CheckCircle2, 
  Plus, 
  Edit3, 
  Trash2, 
  X, 
  Save, 
  Info,
  DollarSign,
  ArrowUpDown,
  Boxes,
  Warehouse,
  Check,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import Card, { CardHeader } from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

// Initial realistic sample inventory items
const INITIAL_INVENTORY = [
  {
    id: '1',
    sku: 'SKU-8921',
    name: 'Industrial CNC Hydraulic Actuator',
    category: 'Machinery Components',
    quantity: 420,
    price: 650.00,
    reorderPoint: 150,
    warehouse: 'Warehouse A (Chicago)',
    status: 'In Stock'
  },
  {
    id: '2',
    sku: 'SKU-7740',
    name: 'Precision Micro-Alloy Bearings (Pack 50)',
    category: 'Hardware & Fasteners',
    quantity: 85,
    price: 120.00,
    reorderPoint: 100,
    warehouse: 'Warehouse B (Dallas)',
    status: 'Low Stock'
  },
  {
    id: '3',
    sku: 'SKU-9012',
    name: 'Programmable Logic Controller (PLC-V4)',
    category: 'Electronics & Automation',
    quantity: 310,
    price: 940.00,
    reorderPoint: 80,
    warehouse: 'Warehouse A (Chicago)',
    status: 'In Stock'
  },
  {
    id: '4',
    sku: 'SKU-6523',
    name: 'High-Pressure Fluoropolymer Seals',
    category: 'Raw Materials',
    quantity: 1240,
    price: 18.50,
    reorderPoint: 400,
    warehouse: 'Warehouse C (Rotterdam)',
    status: 'In Stock'
  },
  {
    id: '5',
    sku: 'SKU-4419',
    name: 'Optoelectronic Safety Curtains (24V)',
    category: 'Electronics & Automation',
    quantity: 12,
    price: 1480.00,
    reorderPoint: 25,
    warehouse: 'Warehouse B (Dallas)',
    status: 'Low Stock'
  },
  {
    id: '6',
    sku: 'SKU-1088',
    name: 'Variable Frequency Drive Inverter (7.5kW)',
    category: 'Electronics & Automation',
    quantity: 0,
    price: 890.00,
    reorderPoint: 30,
    warehouse: 'Warehouse A (Chicago)',
    status: 'Out of Stock'
  },
  {
    id: '7',
    sku: 'SKU-3128',
    name: 'Heavy-Duty Conveyor Roller Assembly',
    category: 'Machinery Components',
    quantity: 580,
    price: 215.00,
    reorderPoint: 200,
    warehouse: 'Warehouse A (Chicago)',
    status: 'In Stock'
  },
  {
    id: '8',
    sku: 'SKU-5520',
    name: 'Titanium Fastener Assortment (Grade 5)',
    category: 'Hardware & Fasteners',
    quantity: 45,
    price: 75.00,
    reorderPoint: 50,
    warehouse: 'Warehouse B (Dallas)',
    status: 'Low Stock'
  }
];

const CATEGORIES = [
  'All',
  'Machinery Components',
  'Electronics & Automation',
  'Hardware & Fasteners',
  'Raw Materials'
];

export const InventoryPage = () => {
  const [products, setProducts] = useState(INITIAL_INVENTORY);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' | 'edit'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    category: 'Machinery Components',
    quantity: '',
    price: '',
    reorderPoint: '50',
    warehouse: 'Warehouse A (Chicago)'
  });
  const [formErrors, setFormErrors] = useState({});

  // Overview Statistics Calculations
  const totalProducts = products.length;
  const totalQuantity = products.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const totalValuation = products.reduce((sum, item) => sum + (Number(item.quantity || 0) * Number(item.price || 0)), 0);
  const lowStockCount = products.filter(item => item.status === 'Low Stock').length;
  const outOfStockCount = products.filter(item => item.status === 'Out of Stock').length;

  // Filtered Products
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Calculate status automatically based on quantity and reorderPoint
  const computeStatus = (qty, reorder) => {
    const q = Number(qty);
    const r = Number(reorder);
    if (q <= 0) return 'Out of Stock';
    if (q <= r) return 'Low Stock';
    return 'In Stock';
  };

  // Open Add Modal
  const handleOpenAddModal = () => {
    setModalMode('add');
    setFormData({
      name: '',
      sku: `SKU-${Math.floor(1000 + Math.random() * 9000)}`,
      category: 'Machinery Components',
      quantity: '',
      price: '',
      reorderPoint: '50',
      warehouse: 'Warehouse A (Chicago)'
    });
    setFormErrors({});
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEditModal = (product) => {
    setModalMode('edit');
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      sku: product.sku,
      category: product.category,
      quantity: product.quantity.toString(),
      price: product.price.toString(),
      reorderPoint: product.reorderPoint ? product.reorderPoint.toString() : '50',
      warehouse: product.warehouse || 'Warehouse A (Chicago)'
    });
    setFormErrors({});
    setIsModalOpen(true);
  };

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Product name is required';
    if (!formData.sku.trim()) errors.sku = 'SKU is required';
    if (formData.quantity === '' || isNaN(formData.quantity) || Number(formData.quantity) < 0) {
      errors.quantity = 'Valid non-negative quantity required';
    }
    if (formData.price === '' || isNaN(formData.price) || Number(formData.price) <= 0) {
      errors.price = 'Valid positive price required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle Save (Add or Edit)
  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const status = computeStatus(formData.quantity, formData.reorderPoint);

    if (modalMode === 'add') {
      const newProduct = {
        id: Date.now().toString(),
        sku: formData.sku.trim().toUpperCase(),
        name: formData.name.trim(),
        category: formData.category,
        quantity: Number(formData.quantity),
        price: Number(formData.price),
        reorderPoint: Number(formData.reorderPoint) || 50,
        warehouse: formData.warehouse,
        status: status
      };
      setProducts([newProduct, ...products]);
    } else {
      setProducts(products.map(p => {
        if (p.id === selectedProduct.id) {
          return {
            ...p,
            name: formData.name.trim(),
            sku: formData.sku.trim().toUpperCase(),
            category: formData.category,
            quantity: Number(formData.quantity),
            price: Number(formData.price),
            reorderPoint: Number(formData.reorderPoint) || 50,
            warehouse: formData.warehouse,
            status: status
          };
        }
        return p;
      }));
    }

    setIsModalOpen(false);
  };

  // Handle Delete
  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    setDeleteConfirmId(null);
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
            <span className="text-brand-blue font-semibold">Inventory Management</span>
            <span>|</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
              <Info className="w-3 h-3" />
              LOCAL DEMO STATE
            </span>
          </div>
          <h1 className="text-2xl font-bold text-brand-navy">Inventory Control & Stock Ledger</h1>
          <p className="text-xs text-enterprise-500">
            Real-time multi-warehouse catalog management with automated stock thresholds and local editing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="primary" 
            size="sm" 
            icon={Plus}
            onClick={handleOpenAddModal}
          >
            Add Product
          </Button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. INVENTORY OVERVIEW STATISTICS                          */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Products */}
        <Card padding="sm" className="space-y-1 shadow-subtle border-l-4 border-l-brand-blue">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs uppercase font-bold tracking-wider">Total Products</span>
            <Package className="w-4 h-4 text-brand-blue" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-brand-navy">{totalProducts} SKUs</p>
            <span className="text-[11px] text-enterprise-500">{totalQuantity.toLocaleString()} Units</span>
          </div>
          <p className="text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">Across 3 warehouse hubs</p>
        </Card>

        {/* Total Inventory Value */}
        <Card padding="sm" className="space-y-1 shadow-subtle border-l-4 border-l-enterprise-800">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs uppercase font-bold tracking-wider">Gross Valuation</span>
            <DollarSign className="w-4 h-4 text-brand-navy" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-brand-navy">${totalValuation.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <Badge variant="erp" size="sm">FIFO Cost</Badge>
          </div>
          <p className="text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">Weighted average landed value</p>
        </Card>

        {/* Low Stock Alerts */}
        <Card padding="sm" className="space-y-1 shadow-subtle border-l-4 border-l-amber-500">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs uppercase font-bold tracking-wider">Low Stock Alerts</span>
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-amber-600">{lowStockCount} Items</p>
            <Badge variant="warning" size="sm">Reorder Req</Badge>
          </div>
          <p className="text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">Below safety thresholds</p>
        </Card>

        {/* Out of Stock Alerts */}
        <Card padding="sm" className="space-y-1 shadow-subtle border-l-4 border-l-rose-500">
          <div className="flex items-center justify-between text-enterprise-500">
            <span className="text-xs uppercase font-bold tracking-wider">Out of Stock</span>
            <AlertCircle className="w-4 h-4 text-rose-500" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-rose-600">{outOfStockCount} Items</p>
            <Badge variant="danger" size="sm">Zero Stock</Badge>
          </div>
          <p className="text-[11px] text-enterprise-500 pt-1 border-t border-enterprise-100">Critical fulfillment risk</p>
        </Card>
      </div>

      {/* ========================================================= */}
      {/* 3. LOW STOCK & OUT OF STOCK ALERTS SECTION                */}
      {/* ========================================================= */}
      {(lowStockCount > 0 || outOfStockCount > 0) && (
        <Card className="border-l-4 border-l-rose-500 bg-rose-50/20 shadow-subtle space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <h3 className="text-sm font-bold text-brand-navy">Active Replenishment Warnings</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                {lowStockCount + outOfStockCount} Actions Required
              </span>
            </div>
            <span className="text-xs text-enterprise-500 hidden sm:block">Automated Stock Monitor</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {products
              .filter(item => item.status === 'Low Stock' || item.status === 'Out of Stock')
              .map(item => (
                <div 
                  key={item.id}
                  className="p-3 bg-white rounded-lg border border-enterprise-200 shadow-subtle flex items-start justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-brand-blue">{item.sku}</span>
                      <Badge variant={item.status === 'Out of Stock' ? 'danger' : 'warning'} size="sm" dot>
                        {item.status}
                      </Badge>
                    </div>
                    <p className="font-semibold text-brand-navy truncate max-w-[180px]">{item.name}</p>
                    <p className="text-[11px] text-enterprise-500">
                      Stock: <strong className={item.quantity === 0 ? 'text-rose-600' : 'text-amber-600'}>{item.quantity} units</strong> (Min: {item.reorderPoint})
                    </p>
                  </div>
                  <button 
                    onClick={() => handleOpenEditModal(item)}
                    className="text-xs text-brand-blue hover:text-brand-blue-hover font-semibold shrink-0 underline"
                  >
                    Adjust
                  </button>
                </div>
              ))}
          </div>
        </Card>
      )}

      {/* ========================================================= */}
      {/* 4. SEARCH, CATEGORY & STOCK-STATUS FILTERS                */}
      {/* ========================================================= */}
      <Card padding="sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Field */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-enterprise-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by product name or SKU..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 rounded-lg border border-enterprise-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Category Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-enterprise-500 font-medium">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs px-3 py-2 rounded-lg border border-enterprise-200 bg-white text-enterprise-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Stock Status Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-enterprise-500 font-medium">Status:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="text-xs px-3 py-2 rounded-lg border border-enterprise-200 bg-white text-enterprise-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="All">All Statuses</option>
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>

            {(searchTerm || selectedCategory !== 'All' || selectedStatus !== 'All') && (
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedStatus('All');
                }}
                className="text-xs text-brand-blue hover:underline font-semibold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </Card>

      {/* ========================================================= */}
      {/* 5. PRODUCT TABLE (WITH EDIT & DELETE ACTIONS)             */}
      {/* ========================================================= */}
      <Card padding="none" className="overflow-hidden shadow-subtle border border-enterprise-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-enterprise-50 text-enterprise-600 border-b border-enterprise-200">
                <th className="py-3 px-4 font-semibold">SKU</th>
                <th className="py-3 px-4 font-semibold">Product Name</th>
                <th className="py-3 px-4 font-semibold">Category</th>
                <th className="py-3 px-4 font-semibold">Warehouse Hub</th>
                <th className="py-3 px-4 font-semibold text-right">Quantity</th>
                <th className="py-3 px-4 font-semibold text-right">Price</th>
                <th className="py-3 px-4 font-semibold">Stock Status</th>
                <th className="py-3 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-enterprise-100">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-enterprise-50 transition-colors">
                  <td className="py-3 px-4 font-mono font-semibold text-brand-blue">{product.sku}</td>
                  <td className="py-3 px-4">
                    <p className="font-semibold text-brand-navy">{product.name}</p>
                    <span className="text-[10px] text-enterprise-400">Reorder Level: {product.reorderPoint} units</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-0.5 rounded bg-enterprise-100 text-enterprise-700 font-medium">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-enterprise-600">{product.warehouse}</td>
                  <td className="py-3 px-4 text-right font-bold text-brand-navy">
                    {product.quantity.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right font-medium text-enterprise-700">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="py-3 px-4">
                    <Badge 
                      variant={
                        product.status === 'In Stock' ? 'success' :
                        product.status === 'Low Stock' ? 'warning' : 'danger'
                      }
                      size="sm"
                      dot
                    >
                      {product.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-right">
                    {deleteConfirmId === product.id ? (
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-[10px] text-rose-600 font-semibold">Delete?</span>
                        <button 
                          onClick={() => handleDeleteProduct(product.id)}
                          className="px-2 py-0.5 rounded bg-rose-600 text-white text-[10px] font-bold"
                        >
                          Yes
                        </button>
                        <button 
                          onClick={() => setDeleteConfirmId(null)}
                          className="px-2 py-0.5 rounded bg-enterprise-200 text-enterprise-700 text-[10px]"
                        >
                          No
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-1.5">
                        <button 
                          onClick={() => handleOpenEditModal(product)}
                          className="p-1.5 rounded text-enterprise-500 hover:text-brand-blue hover:bg-enterprise-100 transition-colors"
                          title="Edit Product"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => setDeleteConfirmId(product.id)}
                          className="p-1.5 rounded text-enterprise-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          title="Delete Product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="8" className="py-8 text-center text-enterprise-500">
                    No products matched your search or filter query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-enterprise-50 border-t border-enterprise-100 flex items-center justify-between text-xs text-enterprise-500">
          <span>Showing {filteredProducts.length} of {products.length} products</span>
          <span className="font-medium text-[11px] text-enterprise-400">Local React State (Changes persist during this session)</span>
        </div>
      </Card>

      {/* ========================================================= */}
      {/* 6. ADD / EDIT PRODUCT MODAL (WITH VALIDATION)             */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm">
          <div className="bg-white rounded-card shadow-elevated w-full max-w-lg border border-enterprise-200 overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-enterprise-50 border-b border-enterprise-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-brand-navy">
                  {modalMode === 'add' ? 'Add New Inventory Product' : 'Edit Product Details'}
                </h3>
                <p className="text-xs text-enterprise-500">
                  {modalMode === 'add' ? 'Create a local SKU in your demo catalog' : `Updating SKU: ${selectedProduct?.sku}`}
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded text-enterprise-400 hover:text-brand-navy"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveProduct} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-brand-navy mb-1">
                  Product Name *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Industrial Hydraulic Actuator V2"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    formErrors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                  } focus:outline-none focus:ring-2`}
                />
                {formErrors.name && <p className="text-rose-600 text-[10px] mt-1">{formErrors.name}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-brand-navy mb-1">
                    SKU Code *
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. SKU-1234"
                    value={formData.sku}
                    onChange={(e) => setFormData({...formData, sku: e.target.value})}
                    className={`w-full px-3 py-2 rounded-lg font-mono border ${
                      formErrors.sku ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                    } focus:outline-none focus:ring-2`}
                  />
                  {formErrors.sku && <p className="text-rose-600 text-[10px] mt-1">{formErrors.sku}</p>}
                </div>
                <div>
                  <label className="block font-semibold text-brand-navy mb-1">
                    Category *
                  </label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-enterprise-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    {CATEGORIES.filter(c => c !== 'All').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-brand-navy mb-1">
                    Available Quantity *
                  </label>
                  <input 
                    type="number" 
                    min="0"
                    placeholder="e.g. 250"
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
                    Unit Price ($ USD) *
                  </label>
                  <input 
                    type="number" 
                    step="0.01"
                    min="0.01"
                    placeholder="e.g. 450.00"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formErrors.price ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                    } focus:outline-none focus:ring-2`}
                  />
                  {formErrors.price && <p className="text-rose-600 text-[10px] mt-1">{formErrors.price}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-brand-navy mb-1">
                    Reorder Threshold Point
                  </label>
                  <input 
                    type="number" 
                    min="1"
                    value={formData.reorderPoint}
                    onChange={(e) => setFormData({...formData, reorderPoint: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-enterprise-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-brand-navy mb-1">
                    Warehouse Hub Location
                  </label>
                  <select 
                    value={formData.warehouse}
                    onChange={(e) => setFormData({...formData, warehouse: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-enterprise-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option>Warehouse A (Chicago)</option>
                    <option>Warehouse B (Dallas)</option>
                    <option>Warehouse C (Rotterdam)</option>
                  </select>
                </div>
              </div>

              {/* Status Preview pill */}
              <div className="p-2.5 rounded-lg bg-enterprise-50 border border-enterprise-200 flex items-center justify-between">
                <span className="text-[11px] text-enterprise-600">Computed Status:</span>
                <Badge 
                  variant={
                    computeStatus(formData.quantity, formData.reorderPoint) === 'In Stock' ? 'success' :
                    computeStatus(formData.quantity, formData.reorderPoint) === 'Low Stock' ? 'warning' : 'danger'
                  }
                  size="sm"
                  dot
                >
                  {computeStatus(formData.quantity, formData.reorderPoint)}
                </Badge>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-enterprise-100 flex items-center justify-end gap-2.5">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="sm" 
                  icon={Save}
                >
                  {modalMode === 'add' ? 'Save Product' : 'Update Product'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default InventoryPage;

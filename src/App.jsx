
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './components/layout/PublicLayout';
import DashboardLayout from './components/layout/DashboardLayout';

// Public Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ErpSolutionsPage from './pages/ErpSolutionsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Login Pages
import AdminLogin from './pages/AdminLogin';
import CustomerLogin from './pages/CustomerLogin';

// Dashboard Modules
import DashboardPage from './pages/DashboardPage';
import InventoryPage from './pages/InventoryPage';
import OrdersPage from './pages/OrdersPage';
import SalesPage from './pages/SalesPage';
import CustomersPage from './pages/CustomersPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Nexora Welcome Page */}
        <Route path="/" element={<LandingPage />} />
         

        {/* Public Website + Customer Pages */}
        <Route element={<PublicLayout />}>
          <Route path="/customer-dashboard" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<ErpSolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
        
        </Route>

        {/* Admin Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/admin" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

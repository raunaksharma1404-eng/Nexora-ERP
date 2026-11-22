import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Building2, 
  FileCheck2,
  ChevronRight,
  AlertCircle,
  Sparkles,
  Check
} from 'lucide-react';
import Card, { CardHeader } from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    industry: 'Discrete Manufacturing',
    erpPlatform: 'SAP S/4HANA',
    projectScope: 'New Implementation',
    timeline: 'Within 3 Months',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  // Email Regex Validator
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Client-Side Validation Function
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 3) return 'Name must be at least 3 characters';
        return '';
      case 'workEmail':
        if (!value.trim()) return 'Work email address is required';
        if (!isValidEmail(value.trim())) return 'Please enter a valid corporate email format';
        return '';
      case 'company':
        if (!value.trim()) return 'Company or organization name is required';
        if (value.trim().length < 2) return 'Company name must be at least 2 characters';
        return '';
      case 'message':
        if (!value.trim()) return 'Please describe your current systems or project challenge';
        if (value.trim().length < 15) return 'Please provide at least 15 characters describing your challenge';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setFormErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setFormErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const errors = {
      fullName: validateField('fullName', formData.fullName),
      workEmail: validateField('workEmail', formData.workEmail),
      company: validateField('company', formData.company),
      message: validateField('message', formData.message),
    };

    setFormErrors(errors);
    setTouched({
      fullName: true,
      workEmail: true,
      company: true,
      message: true,
    });

    // Check if there are any errors
    const hasErrors = Object.values(errors).some(err => err !== '');
    if (hasErrors) {
      return;
    }

    // Trigger submission simulation
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = 'NX-AUDIT-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceCode(generatedRef);
      setSubmitted(true);
    }, 700);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      company: '',
      industry: 'Discrete Manufacturing',
      erpPlatform: 'SAP S/4HANA',
      projectScope: 'New Implementation',
      timeline: 'Within 3 Months',
      message: ''
    });
    setFormErrors({});
    setTouched({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* ========================================================= */}
      {/* 1. HEADER & BREADCRUMBS                                   */}
      {/* ========================================================= */}
      <section className="bg-brand-navy text-white pt-12 pb-20 border-b border-enterprise-800 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-enterprise-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue font-semibold">Contact & Scoping</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <Badge variant="navy" className="bg-brand-blue text-white">
              Enterprise Advisory & Project Scoping
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Schedule an Architectural Discovery Session
            </h1>
            <p className="text-base sm:text-lg text-enterprise-300 leading-relaxed">
              Connect directly with our Principal ERP Architects to evaluate your requirements, scoping timelines, and ERP platform fit. All inquiries protected under binding mutual non-disclosure agreements.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. FORM & PRACTICE HUBS                                   */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form with Client-Side Validation */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 border border-enterprise-200 shadow-card">
              {submitted ? (
                /* Success Submission State */
                <div className="py-12 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-brand-green-light text-brand-green mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-green">Scoping Inquiry Verified</span>
                    <h3 className="text-2xl font-bold text-brand-navy">Discovery Session Requested</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-enterprise-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-brand-navy">{formData.fullName}</strong>. Your project brief for <strong className="text-brand-navy">{formData.company}</strong> has been assigned to our lead industrial solution architects.
                  </p>

                  <div className="p-3 bg-enterprise-100 rounded-xl inline-block text-xs font-mono text-enterprise-800 font-bold border border-enterprise-200">
                    Reference ID: {referenceCode}
                  </div>

                  <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-900 max-w-md mx-auto space-y-1 text-left">
                    <p className="font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Next Steps & Mutual NDA:</span>
                    </p>
                    <p className="text-enterprise-600 text-[11px] leading-relaxed">
                      Our standard mutual non-disclosure agreement and discovery agenda will be dispatched to <strong>{formData.workEmail}</strong> within 4 business hours.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" size="sm" onClick={handleResetForm}>
                      Submit Another Scoping Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                /* Active Form with Inline Validations */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-brand-navy">Enterprise Scoping & Audit Request</h2>
                    <p className="text-xs text-enterprise-500 mt-1">
                      Fill out the form below to receive a non-biased preliminary architecture appraisal.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Rachel Sterling"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        onBlur={() => handleBlur('fullName')}
                        className={`w-full text-xs px-3.5 py-2.5 rounded-lg border ${
                          formErrors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                        } focus:outline-none focus:ring-2 transition-all`}
                      />
                      {formErrors.fullName && (
                        <p className="text-rose-600 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{formErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Corporate Work Email *
                      </label>
                      <input 
                        type="email" 
                        placeholder="name@company.com"
                        value={formData.workEmail}
                        onChange={(e) => handleChange('workEmail', e.target.value)}
                        onBlur={() => handleBlur('workEmail')}
                        className={`w-full text-xs px-3.5 py-2.5 rounded-lg border ${
                          formErrors.workEmail ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                        } focus:outline-none focus:ring-2 transition-all`}
                      />
                      {formErrors.workEmail && (
                        <p className="text-rose-600 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{formErrors.workEmail}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company and Industry */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Company Name *
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Apex Industrial Manufacturing"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        onBlur={() => handleBlur('company')}
                        className={`w-full text-xs px-3.5 py-2.5 rounded-lg border ${
                          formErrors.company ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                        } focus:outline-none focus:ring-2 transition-all`}
                      />
                      {formErrors.company && (
                        <p className="text-rose-600 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{formErrors.company}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Industry Vertical
                      </label>
                      <select 
                        value={formData.industry}
                        onChange={(e) => setFormData({...formData, industry: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-enterprise-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      >
                        <option>Discrete Manufacturing</option>
                        <option>Process Manufacturing (Chemicals / Food)</option>
                        <option>Wholesale & Distribution</option>
                        <option>Automotive & Aerospace</option>
                        <option>Multi-Entity Holding Enterprise</option>
                      </select>
                    </div>
                  </div>

                  {/* Platform & Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Target ERP Platform
                      </label>
                      <select 
                        value={formData.erpPlatform}
                        onChange={(e) => setFormData({...formData, erpPlatform: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-enterprise-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      >
                        <option>SAP S/4HANA & Business One</option>
                        <option>Oracle NetSuite Cloud ERP</option>
                        <option>Microsoft Dynamics 365</option>
                        <option>Platform Feasibility Review Required</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Engagement Scope
                      </label>
                      <select 
                        value={formData.projectScope}
                        onChange={(e) => setFormData({...formData, projectScope: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-enterprise-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      >
                        <option>New Turnkey Implementation</option>
                        <option>Custom Workflow / SuiteScript / BAPI</option>
                        <option>Enterprise Integration & Middleware</option>
                        <option>Data Migration from AS400/QuickBooks</option>
                        <option>Business Process Consulting & Audit</option>
                        <option>24/7 Managed Hypercare SLA</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Current Operational Systems & Primary Bottlenecks *
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Describe your current accounting/ERP setup, approximate plant/warehouse count, and primary operational bottlenecks (minimum 15 characters)..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      className={`w-full text-xs px-3.5 py-2.5 rounded-lg border ${
                        formErrors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-enterprise-300 focus:ring-brand-blue'
                      } focus:outline-none focus:ring-2 transition-all`}
                    />
                    {formErrors.message && (
                      <p className="text-rose-600 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{formErrors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="md" 
                      icon={Send} 
                      iconPosition="right" 
                      loading={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Verifying & Submitting...' : 'Submit Scoping Request'}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>

          {/* Right Column: Practice Hubs & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <Card className="space-y-4 border border-enterprise-200 shadow-subtle">
              <h3 className="text-base font-bold text-brand-navy">Global ERP Practice Headquarters</h3>
              <div className="space-y-3.5 text-xs text-enterprise-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy">Chicago Executive Delivery Center</strong>
                    <span className="text-enterprise-500">100 Enterprise Way, Suite 400, Chicago, IL 60601</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy">Advisory Hotline</strong>
                    <span className="text-enterprise-500">+1 (800) 639-6721 (Mon–Fri 07:00 – 19:00 CST)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy">Direct RFP Ingestion</strong>
                    <span className="text-enterprise-500">consulting@nexora-erp.com</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Regional Practice Delivery Hubs */}
            <Card className="space-y-4 border border-enterprise-200 shadow-subtle">
              <h3 className="text-base font-bold text-brand-navy">Regional Practice Hubs</h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-enterprise-50 border border-enterprise-200">
                  <p className="font-semibold text-brand-navy">European Logistics & Port Hub</p>
                  <p className="text-enterprise-500 text-[11px]">Rotterdam, Netherlands • Focus: Port WMS & SAP EWM</p>
                </div>
                <div className="p-3 rounded-lg bg-enterprise-50 border border-enterprise-200">
                  <p className="font-semibold text-brand-navy">Southern Manufacturing Corridor</p>
                  <p className="text-enterprise-500 text-[11px]">Dallas, TX • Focus: NetSuite Discrete Assembly</p>
                </div>
              </div>
            </Card>

            {/* Confidentiality Guarantee */}
            <Card className="bg-enterprise-50 border border-enterprise-200 space-y-2.5 shadow-subtle">
              <div className="flex items-center gap-2 text-brand-green font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise Confidentiality Guarantee</span>
              </div>
              <p className="text-xs text-enterprise-600 leading-relaxed">
                All client architectural discussions, BOM disclosures, and process diagrams are protected under binding mutual non-disclosure agreements prior to technical review.
              </p>
            </Card>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;

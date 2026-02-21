// "use client";

import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/best-erp-system-for-business/Header';
import Hero from '@/components/best-erp-system-for-business/Hero';
import Problems from '@/components/best-erp-system-for-business/Problems';
import Modules from '@/components/best-erp-system-for-business/Modules';
import DashboardSummary from '@/components/best-erp-system-for-business/DashboardSummary';
import Offer from '@/components/best-erp-system-for-business/Offer';
import Comparison from '@/components/best-erp-system-for-business/Comparison';
import Benefits from '@/components/best-erp-system-for-business/Benefits';
import Testimonials from '@/components/best-erp-system-for-business/Testimonials';
import FAQ from '@/components/best-erp-system-for-business/FAQ';
import LeadForm from '@/components/best-erp-system-for-business/LeadForm';
import Footer from '@/components/best-erp-system-for-business/Footer';
import BundleCRM from '@/components/best-erp-system-for-business/BundleCRM';
import FloatingActions from '@/components/best-erp-system-for-business/FloatingActions';
import Keywords from '@/components/best-erp-system-for-business/Keywords';


export const metadata = {
  title: "Best ERP System for Business in Chennai | BizPlusERP",
  description: "Best ERP System for Business in Chennai for inventory management, accounting, CRM, billing, and business automation. Trusted by growing businesses across Chennai NCR. Schedule a free demo today.", 
  keywords: [
    "Best ERP system for business in Chennai",
    "BizPlusERP Chennai",
    "Top ERP system in Chennai NCR",
    "Business ERP system Chennai",
    "ERP system provider in Chennai",
    "Best ERP software for small business Chennai",
    "Cloud ERP system Chennai NCR",
    "Affordable ERP system Chennai",
    "Inventory management ERP system Chennai",
    "Accounting and billing ERP Chennai",
    "CRM integrated ERP system Chennai",
    "GST compliant ERP system Chennai",
    "All-in-one business ERP Chennai",
    "Enterprise resource planning system Chennai",
    "ERP for growing businesses Chennai",
    "Complete business automation ERP Chennai",
    "Multi-location ERP system Chennai NCR",
    "Customizable ERP system Chennai",
    "SME ERP system Chennai",
    "BizPlusERP business software Chennai"
          ],
  alternates: {
    canonical: "https://www.yourdomain.com/best-erp-system-for-business-Chennai"
  },
  openGraph: {
    title: "Best ERP System for Business in Chennai | BizPlusERP",
    description: "Looking for the best ERP system for business in Chennai? BizPlusERP offers inventory, accounting, CRM, billing, and complete business automation solutions for SMEs. Book a free demo today.",
    url: "https://www.yourdomain.com/best-erp-system-for-business-Chennai",
    siteName: "BizPlusERP",
    images: [
      {
        url: "https://www.yourdomain.com/og-image.jpg",
      },
    ],
    type: "website",
  },
};

const bsetERPsoftwarePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="pt-28">
        <Hero />
        <Problems />
        <Modules />
        <DashboardSummary />
        <Offer />
        <BundleCRM />
        <Comparison />
        <Benefits />
        <Testimonials />
        <FAQ />
        <LeadForm />
        {/* <Keywords /> */}
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default bsetERPsoftwarePage;
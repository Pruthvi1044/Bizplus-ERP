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

    "Best ERP software in Chennai",
    "Top ERP software in Chennai",
    "ERP software Chennai NCR",
    "Business ERP software India",
    "Cloud ERP software Chennai",
    "Affordable ERP software Chennai",
    "ERP solution provider in Chennai",
    "Inventory management ERP Chennai",
    "Accounting ERP software India",
    "GST compliant ERP software Chennai",
    "CRM ERP software Chennai NCR",
    "Manufacturing ERP software Chennai",
    "SME ERP software India",
    "Enterprise resource planning software Chennai",
    "ERP software company in Chennai",
    "Billing and invoicing ERP Chennai",
    "Custom ERP software development Chennai",
    "Multi-branch ERP software India",
    "ERP software for small business Chennai",
    "Complete business management software India"
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
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
    "Best ERP System For Business",
    "Business ERP Software",
    "Top ERP For Business Management",
    "Cloud ERP For Business",
    "ERP System For Small Business",
    "Enterprise Resource Planning Software",
    "Best ERP Software For SMEs",
    "Business Automation ERP",
    "All In One Business ERP",
    "Multi Branch ERP System",
    "Inventory And Accounting ERP",
    "ERP For Service Based Businesses",
    "Retail Business ERP System",
    "CRM And ERP Integrated System",
    "Business Management Software"
  ],

  alternates: {
    canonical: "https://www.yourdomain.com/best-erp-system-for-business"
  },

  openGraph: {
    title: "Best ERP System for Business | BizPlusERP",
    description:
      "Looking for the best ERP system for business? BizPlusERP offers accounting, inventory, CRM, HR, billing, and complete business automation for SMEs and Enterprises.",
    url: "https://www.yourdomain.com/best-erp-system-for-business",
    siteName: "BizPlusERP",
    images: [
      {
        url: "https://www.yourdomain.com/images/best-erp-system-for-business.jpg"
      }
    ],
    type: "website"
  }
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
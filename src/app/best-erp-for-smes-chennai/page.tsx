// "use client";

import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/best-erp-for-smes/Header';
import Hero from '@/components/best-erp-for-smes/Hero';
import Problems from '@/components/best-erp-for-smes/Problems';
import Modules from '@/components/best-erp-for-smes/Modules';
import DashboardSummary from '@/components/best-erp-for-smes/DashboardSummary';
import Offer from '@/components/best-erp-for-smes/Offer';
import Comparison from '@/components/best-erp-for-smes/Comparison';
import Benefits from '@/components/best-erp-for-smes/Benefits';
import Testimonials from '@/components/best-erp-for-smes/Testimonials';
import FAQ from '@/components/best-erp-for-smes/FAQ';
import LeadForm from '@/components/best-erp-for-smes/LeadForm';
import Footer from '@/components/best-erp-for-smes/Footer';
import BundleCRM from '@/components/best-erp-for-smes/BundleCRM';
import FloatingActions from '@/components/best-erp-for-smes/FloatingActions';
import Keywords from '@/components/best-erp-for-smes/Keywords';


export const metadata = {
  title: "Best ERP for SMEs | Smart, Affordable & Scalable ERP Solution 2026",
  description:
    "Discover the Best ERP for SMEs in 2026. Improve efficiency, automate operations, manage accounting, sales, inventory, and streamline business workflows with a powerful ERP designed for small and medium enterprises.",

  keywords: [
    "Best ERP For SMEs",
    "ERP Software For Small Business",
    "Top ERP For SMEs",
    "Cloud ERP For SMEs",
    "Affordable ERP System",
    "ERP For Growing Businesses",
    "Inventory And Accounting ERP",
    "All In One ERP For SMEs",
    "ERP For Startup Companies",
    "Small Business Automation Software",
    "ERP For Service Based SMEs",
    "ERP For Distribution SMEs",
    "Best ERP Solution For MSMEs",
    "Business Management ERP For SMEs",
    "SME Digital Transformation ERP"
  ],

  alternates: {
    canonical: "https://www.yourdomain.com/best-erp-for-smes"
  },

  openGraph: {
    title: "Best ERP For SMEs | BizPlusERP",
    description:
      "Looking for the best ERP for SMEs? BizPlusERP offers accounting, inventory, CRM, HR, billing, and complete business automation designed specially for small and medium enterprises.",
    url: "https://www.yourdomain.com/best-erp-for-smes",
    siteName: "BizPlusERP",
    images: [
      {
        url: "https://www.yourdomain.com/images/best-erp-for-smes.jpg"
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
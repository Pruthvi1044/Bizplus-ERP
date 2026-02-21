// "use client";

import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/best-erp-for-manufacturing/Header';
import Hero from '@/components/best-erp-for-manufacturing/Hero';
import Problems from '@/components/best-erp-for-manufacturing/Problems';
import Modules from '@/components/best-erp-for-manufacturing/Modules';
import DashboardSummary from '@/components/best-erp-for-manufacturing/DashboardSummary';
import Offer from '@/components/best-erp-for-manufacturing/Offer';
import Comparison from '@/components/best-erp-for-manufacturing/Comparison';
import Benefits from '@/components/best-erp-for-manufacturing/Benefits';
import Testimonials from '@/components/best-erp-for-manufacturing/Testimonials';
import FAQ from '@/components/best-erp-for-manufacturing/FAQ';
import LeadForm from '@/components/best-erp-for-manufacturing/LeadForm';
import Footer from '@/components/best-erp-for-manufacturing/Footer';
import BundleCRM from '@/components/best-erp-for-manufacturing/BundleCRM';
import FloatingActions from '@/components/best-erp-for-manufacturing/FloatingActions';
import Keywords from '@/components/best-erp-for-manufacturing/Keywords';


export const metadata = {
  title: "Best ERP for Manufacturing | Streamline Production & Operations in 2026",
  description: "Discover the Best ERP for Manufacturing companies in 2026. Optimize production, manage inventory, automate workflows, and increase efficiency with a scalable ERP system built for modern manufacturing needs.",
  keywords: [
    "Best ERP For Manufacturing",
    "Manufacturing ERP Software",
    "Top ERP For Manufacturing Industry",
    "Cloud ERP For Manufacturing",
    "ERP System For Manufacturers",
    "Manufacturing Production ERP",
    "Factory Management ERP Software",
    "Process Manufacturing ERP System",
    "Discrete Manufacturing ERP Solution",
    "Best ERP Software For Factories",
    "ERP For Industrial Manufacturing",
    "Smart Manufacturing ERP System",
    "Automotive Manufacturing ERP",
    "Textile Manufacturing ERP",
    "Food And Beverage Manufacturing ERP"
  ],

   alternates: {
    canonical: "https://www.yourdomain.com/best-erp-for-manufacturing"
  },

  openGraph: {
    title: "Best ERP For Manufacturing | BizPlusERP",
    description:
      "Looking for the best ERP for manufacturing? BizPlusERP offers inventory, production planning, accounting, CRM, billing, and complete business automation solutions for SMEs. Book a free demo today.",
    url: "https://www.yourdomain.com/best-erp-for-manufacturing",
    siteName: "BizPlusERP",
    images: [
      {
        url: "https://www.yourdomain.com/images/best-erp-manufacturing.jpg"
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
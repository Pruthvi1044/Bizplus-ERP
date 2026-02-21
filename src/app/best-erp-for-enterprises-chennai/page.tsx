// "use client";

import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/best-erp-for-enterprises/Header';
import Hero from '@/components/best-erp-for-enterprises/Hero';
import Problems from '@/components/best-erp-for-enterprises/Problems';
import Modules from '@/components/best-erp-for-enterprises/Modules';
import DashboardSummary from '@/components/best-erp-for-enterprises/DashboardSummary';
import Offer from '@/components/best-erp-for-enterprises/Offer';
import Comparison from '@/components/best-erp-for-enterprises/Comparison';
import Benefits from '@/components/best-erp-for-enterprises/Benefits';
import Testimonials from '@/components/best-erp-for-enterprises/Testimonials';
import FAQ from '@/components/best-erp-for-enterprises/FAQ';
import LeadForm from '@/components/best-erp-for-enterprises/LeadForm';
import Footer from '@/components/best-erp-for-enterprises/Footer';
import BundleCRM from '@/components/best-erp-for-enterprises/BundleCRM';
import FloatingActions from '@/components/best-erp-for-enterprises/FloatingActions';
import Keywords from '@/components/best-erp-for-enterprises/Keywords';


export const metadata = {
  title: "Best ERP for Enterprises | Enterprise-Grade Automation & Scalability",
  description:
    "Discover the Best ERP for Enterprises in 2026. Streamline multi-department operations, enhance productivity, improve compliance, integrate large-scale workflows, and accelerate digital transformation with a powerful enterprise-level ERP system.",

  keywords: [
    "Best ERP For Enterprises",
    "Enterprise ERP Software",
    "Top ERP For Large Companies",
    "Cloud ERP For Enterprises",
    "Enterprise Resource Planning System",
    "ERP For Corporations",
    "Large Scale Business ERP",
    "ERP For Multi-Location Enterprises",
    "Enterprise Automation Software",
    "Advanced ERP System",
    "Corporate ERP Solutions",
    "Enterprise Digital Transformation",
    "Enterprise Accounting & ERP",
    "Enterprise Supply Chain ERP",
    "End-to-End Enterprise Management ERP"
  ],

  alternates: {
    canonical: "https://www.yourdomain.com/best-erp-for-enterprises"
  },

  openGraph: {
    title: "Best ERP For Enterprises | BizPlusERP",
    description:
      "Looking for the best ERP for enterprises? BizPlusERP offers enterprise-level automation for finance, supply chain, HR, procurement, CRM, and multi-branch operations with real-time visibility and complete control.",
    url: "https://www.yourdomain.com/best-erp-for-enterprises",
    siteName: "BizPlusERP",
    images: [
      {
        url: "https://www.yourdomain.com/images/best-erp-for-enterprises.jpg"
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
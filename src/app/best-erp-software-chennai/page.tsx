import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/best-erp-software/Header';
import Hero from '@/components/best-erp-software/Hero';
import Problems from '@/components/best-erp-software/Problems';
import Modules from '@/components/best-erp-software/Modules';
import DashboardSummary from '@/components/best-erp-software/DashboardSummary';
import Offer from '@/components/best-erp-software/Offer';
import Comparison from '@/components/best-erp-software/Comparison';
import Benefits from '@/components/best-erp-software/Benefits';
import Testimonials from '@/components/best-erp-software/Testimonials';
import FAQ from '@/components/best-erp-software/FAQ';
import Keywords from '@/components/best-erp-software/Keywords';
import LeadForm from '@/components/best-erp-software/LeadForm';
import Footer from '@/components/best-erp-software/Footer';
import BundleCRM from '@/components/best-erp-software/BundleCRM';
import FloatingActions from '@/components/best-erp-software/FloatingActions';


/* ------------------------------
   ⭐ FULL SEO METADATA 
--------------------------------*/

export const metadata: Metadata = {
  title: "Best ERP Software in Chennai | BizPlusERP – Manufacturing ERP",
  description:
    "BizPlusERP is the best ERP software in Chennai for manufacturing companies. Handle production, inventory, job cards, costing, purchase, accounts and CRM in one dashboard.",
  keywords: [
    "Best ERP Software in Chennai",
    "Manufacturing ERP Chennai",
    "Factory ERP Software Chennai",
    "Production Management Software Chennai",
    "Inventory Management ERP Chennai",
    "BizPlusERP",
    "Best ERP software",
    "Best ERP software for manufacturing",
    "ERP software for small businesses",
    "Cloud ERP software",
    "Manufacturing ERP system",
    "Production management ERP",
    "Inventory management ERP",
    "Factory ERP solution",
    "ERP software Indial",
    "Best ERP system for SMEs"
  ],
  alternates: {
    canonical: "https://yourwebsite.com/api/best-erp-software-chennai",
  },
  openGraph: {
    title: "Best ERP Software in Chennai | BizPlusERP",
    description:
      "Top manufacturing ERP for Chennai industries. Used by factories in Ambattur, Guindy, Sriperumbudur, Oragadam & Thirumazhisai.",
    url: "https://yourwebsite.com/api/best-erp-software-chennai",
    siteName: "BizPlusERP",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image-chennai.jpg",
        width: 1200,
        height: 630,
        alt: "Best ERP software in Chennai"
      }
    ],
    locale: "en_IN",
  },
};


/* ---------------------------------------
   ⭐ PAGE + ORGANIZATION SCHEMA (JSON-LD)
----------------------------------------*/

export default function bestErpSoftwarePage() {
  return (
    <>
      {/* ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BizPlusERP",
            url: "https://yourwebsite.com",
            logo: "https://yourwebsite.com/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-7030323838",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["en", "hi", "ta"],
              },
            ],
          }),
        }}
      />

      {/* WEBPAGE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Best ERP Software in Chennai – BizPlusERP",
            url: "https://yourwebsite.com/api/best-erp-software-chennai",
            description:
              "BizPlusERP is Chennai’s most advanced manufacturing ERP with modules for production, job cards, inventory, finance, and CRM."
          }),
        }}
      />

      {/* PAGE CONTENT */}
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
          <Keywords />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
}

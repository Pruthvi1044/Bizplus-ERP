"use client";

import React from "react";
import Link from "next/link";

const keywordLinks = [
  { label: "Best ERP Software", slug: "best-erp-software-chennai" },
  { label: "Best ERP System for Business", slug: "best-erp-system-for-business-chennai" },
  { label: "Best ERP for Manufacturing", slug: "best-erp-for-manufacturing-chennai" },
  { label: "Best ERP for SMEs", slug: "best-erp-for-smes-chennai" },
  { label: "Best ERP for Enterprises", slug: "best-erp-for-enterprises-chennai" },
  { label: "Best ERP Software in India", slug: "best-erp-software-in-india-chennai" },
  { label: "Best Cloud ERP Software", slug: "best-cloud-erp-software-chennai" },
  { label: "Best ERP Provider", slug: "best-erp-provider-chennai" },
  { label: "Best ERP Solution for Companies", slug: "best-erp-solution-for-companies-chennai" },
  { label: "Best ERP for Inventory Management", slug: "best-erp-for-inventory-management-chennai" },
  { label: "ERP for Manufacturing Companies", slug: "erp-for-manufacturing-companies-chennai" },
  { label: "ERP for Retail Business", slug: "erp-for-retail-business-chennai" },
  { label: "ERP for Trading Companies", slug: "erp-for-trading-companies-chennai" },
  { label: "ERP for Distributors", slug: "erp-for-distributors-chennai" },
  { label: "ERP for Wholesalers", slug: "erp-for-wholesalers-chennai" },
  { label: "ERP for Logistics Companies", slug: "erp-for-logistics-companies-chennai" },
  { label: "ERP for Construction Companies", slug: "erp-for-construction-companies-chennai" },
  { label: "ERP for Healthcare Industry", slug: "erp-for-healthcare-industry-chennai" },
  { label: "ERP for Education Institutes", slug: "erp-for-education-institutes-chennai" },
  { label: "ERP for Pharma Companies", slug: "erp-for-pharma-companies-chennai" },
  { label: "ERP for Textile Industry", slug: "erp-for-textile-industry-chennai" },
  { label: "Best ERP for Accounting", slug: "best-erp-for-accounting-chennai" },
  { label: "Best ERP for Warehouse Management", slug: "best-erp-for-warehouse-management-chennai" },
  { label: "Best ERP for Production Planning", slug: "best-erp-for-production-planning-chennai" },
  { label: "Best ERP for Finance Management", slug: "best-erp-for-finance-management-chennai" },
  { label: "Best ERP for Supply Chain", slug: "best-erp-for-supply-chain-chennai" },
  { label: "ERP for Small Business", slug: "erp-for-small-business-chennai" },
  { label: "ERP for Medium Business", slug: "erp-for-medium-business-chennai" },
  { label: "ERP for Large Enterprises", slug: "erp-for-large-enterprises-chennai" },
  { label: "ERP for Growing Businesses", slug: "erp-for-growing-businesses-chennai" },
  { label: "ERP for MSME", slug: "erp-for-msme-chennai" },
  { label: "ERP for Multi Location Companies", slug: "erp-for-multi-location-companies-chennai" },
  { label: "ERP for Startups", slug: "erp-for-startups-chennai" },
  { label: "ERP for Corporations", slug: "erp-for-corporations-chennai" },
  { label: "ERP for Operations Management", slug: "erp-for-operations-management-chennai" },
  { label: "Best ERP Software for Organizations", slug: "best-erp-software-for-organizations-chennai" },
];

const Cities: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h4 className="text-2xl font-extrabold mb-4">
          Serving Chennai & Tamil Nadu Industrial Hubs
        </h4>

        <div className="flex flex-wrap justify-center gap-3">
          {keywordLinks.map((item, index) => (
            <Link
              key={index}
              href={`/${item.slug}`}
              className="px-4 py-2 bg-white rounded-full font-semibold text-sm hover:shadow-md transition text-sky-700"
            >
              {item.label}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Cities;
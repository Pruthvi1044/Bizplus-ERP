"use client";

import React from "react";
import { BarChart3, Headset, Wallet, Workflow } from "lucide-react";

const BundleCRM: React.FC = () => {
  const modules = [
    {
      title: "Sales CRM",
      desc: "Leads • Quotations • Follow-ups",
      icon: <BarChart3 size={22} strokeWidth={1.8} />,
    },
    {
      title: "Support System",
      desc: "Tickets • AMC • Client Service",
      icon: <Headset size={22} strokeWidth={1.8} />,
    },
    {
      title: "Accounting",
      desc: "GST Billing • Ledger • Expense Control",
      icon: <Wallet size={22} strokeWidth={1.8} />,
    },
    {
      title: "Lead Automation",
      desc: "Website • Facebook • WhatsApp Auto Capture",
      icon: <Workflow size={22} strokeWidth={1.8} />,
    },
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-sky-700 uppercase">
              🎯 Chennai Business Special Offer
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-sky-700 md:text-4xl">
            Get 4 Essential ERP Modules FREE for Businesses
          </h2>

          <p className="mx-auto max-w-2xl text-base text-slate-600">
            Implement the Best ERP System for Business in Chennai and unlock
            FREE Sales CRM, Support Desk, Accounting & Automated Lead Capture —
            exclusively for Chennai-based companies.
          </p>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {modules.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-5 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition-all duration-300 group-hover:bg-sky-700 group-hover:text-white">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-sky-700">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundleCRM;
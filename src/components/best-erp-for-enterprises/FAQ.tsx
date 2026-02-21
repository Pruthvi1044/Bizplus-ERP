"use client";

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { 
      q: 'Is this ERP suitable for large enterprises in Chennai?', 
      a: 'Yes. BizPlusERP is designed for enterprise-grade operations including finance, procurement, HR, supply chain, production, compliance, and multi-branch management for large organizations and corporates in Chennai.' 
    },

    { 
      q: 'Can the ERP be customized to our enterprise workflows?', 
      a: 'Absolutely. You can customize approval flows, automate complex processes, integrate APIs, add enterprise dashboards, set multi-level roles, and design custom modules to match your large-scale operational needs.' 
    },

    { 
      q: 'Does the ERP support multi-branch and multi-department operations?', 
      a: 'Yes. BizPlusERP supports enterprises with multiple locations in Chennai including OMR, Guindy, Ambattur, Sriperumbudur, and Oragadam, ensuring real-time sync of finance, sales, inventory, projects, and HR data.' 
    },

    { 
      q: 'Can this ERP handle enterprise-level accounting, audit, and compliance?', 
      a: 'Yes. It includes advanced financial controls, audit trails, multi-branch ledger management, approval-based workflows, compliance automation, and corporate-level reporting.' 
    },

    { 
      q: 'Is enterprise data secure in this ERP?', 
      a: 'Your enterprise data is fully secured with encrypted cloud storage, role-based access, audit logs, restricted permissions, 2-step authentication, and automated data backups.' 
    }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className={`p-4 rounded-2xl bg-slate-50 border ${open === i ? 'border-sky-100 shadow-md' : 'border-transparent'}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between">
                <h4 className="font-bold text-left">{f.q}</h4>
                <div className="w-8 h-8 bg-sky-700 text-white rounded-lg flex items-center justify-center">
                  {open === i ? '-' : '+'}
                </div>
              </button>
              {open === i && (
                <div className="mt-3 text-slate-600">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
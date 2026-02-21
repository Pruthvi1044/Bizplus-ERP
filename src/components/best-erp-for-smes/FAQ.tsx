"use client";

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { 
      q: 'Is this ERP suitable for SMEs in Chennai?', 
      a: 'Yes. BizPlusERP is built specifically for small and medium businesses in Chennai including trading, retail, distribution, services, and small-scale manufacturing. It supports GST, billing, inventory, CRM, accounting, and complete business operations.' 
    },

    { 
      q: 'Can the ERP be customized based on our SME workflows?', 
      a: 'Absolutely. You can customize forms, add fields, automate approvals, modify modules, and create custom reports to match the exact operational process of your SME.' 
    },

    { 
      q: 'Does the ERP support multi-branch SME operations?', 
      a: 'Yes. Whether you have branches in T. Nagar, Velachery, Tambaram, Chromepet, or Mount Road, BizPlusERP synchronizes sales, stock, customers, and accounts in real-time across all locations.' 
    },

    { 
      q: 'Can this ERP help us manage sales, purchases, accounting, and customer service?', 
      a: 'Yes. You can manage sales orders, quotations, purchases, supplier tracking, billing, inventory, CRM, and service tickets — all from a single centralized system.' 
    },

    { 
      q: 'Is our business data safe with this ERP?', 
      a: 'Your SME data is protected with cloud encryption, role-based permissions, secure login, audit logs, and automated backups to ensure complete data security at all times.' 
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
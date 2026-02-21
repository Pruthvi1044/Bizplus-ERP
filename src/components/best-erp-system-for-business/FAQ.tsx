"use client";

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { 
      q: 'Is this ERP suitable for Chennai-based businesses?', 
      a: 'Yes. BizPlusERP is designed for Chennai industries including manufacturing, trading, distribution, and service companies. It supports local workflows, GST rules, and multi-branch operations.' 
    },

    { 
      q: 'Can the ERP be customized based on our Chennai business process?', 
      a: 'Absolutely. You can customize modules, add fields, create custom reports, automate approvals, and match the ERP to your exact Chennai operational workflow.' 
    },

    { 
      q: 'Does the ERP support multi-branch operations across Chennai?', 
      a: 'Yes. Whether you have units in Ambattur, Guindy, Sriperumbudur, or Oragadam, the ERP synchronizes stock, sales, accounts, and production data in real-time.' 
    },

    { 
      q: 'Can this ERP help us track production and daily operations?', 
      a: 'Yes. You can track job cards, production stages, WIP, raw material consumption, workforce productivity, and machine utilization — all in real-time.' 
    },

    { 
      q: 'Is my business data safe with this ERP?', 
      a: 'Your data is protected with encryption, role-based access, secure cloud storage, automated backups, and restricted login permissions for better control.' 
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
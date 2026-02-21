"use client";

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { 
      q: 'Is this ERP suitable for manufacturing industries in Chennai?', 
      a: 'Yes. BizPlusERP is built for Chennai manufacturers including auto components, fabrication, plastics, machinery, electronics, textiles, and engineering units. It supports real-time production, inventory, and quality workflows.' 
    },

    { 
      q: 'Can the ERP be customized based on our manufacturing process?', 
      a: 'Absolutely. You can customize BOM, routing, production stages, QC parameters, approvals, material consumption, and create custom dashboards based on your factory’s unique process flow.' 
    },

    { 
      q: 'Does the ERP support multi-plant or multi-unit manufacturing operations in Chennai?', 
      a: 'Yes. Whether your factories are in Ambattur, Sriperumbudur, Oragadam, MM Nagar, or Guindy, the ERP syncs inventory, WIP, production, and QC data in real-time across all plants.' 
    },

    { 
      q: 'Can this ERP help track production, machine status, and daily output?', 
      a: 'Yes. You can track job cards, machine utilization, downtime, WIP movement, workforce productivity, shift-wise production, and FG output with complete real-time visibility.' 
    },

    { 
      q: 'Is my manufacturing data safe and secure?', 
      a: 'Your data is protected with encryption, secure cloud servers, role-based access, restricted permissions, audit logs, and automated backups to ensure maximum data safety for your manufacturing operations.' 
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
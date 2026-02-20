"use client";

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
   { 
    q: 'Can the ERP be customized for our manufacturing process?', 
    a: 'Yes. BizPlusERP offers process customization, additional fields, custom reports, and workflow automation based on your factory’s requirements.' 
  },

  { 
    q: 'Is this a cloud-based ERP or on-premise system?', 
    a: 'You can choose both. Our cloud version runs online without servers, while the on-premise version is installed inside your factory for full control.' 
  },

  { 
    q: 'Does the ERP support multi-location or multi-branch companies?', 
    a: 'Yes. The system supports multiple plants, warehouses, godowns, and branches with centralised reporting and stock visibility.' 
  },

  { 
    q: 'Can we track production stages using this ERP?', 
    a: 'Yes. You can track job cards, WIP status, raw material consumption, machine load, operator performance, and production efficiency in real-time.' 
  },

  { 
    q: 'Is my data safe and secure?', 
    a: 'Your data is stored in encrypted format with regular backups. Only authorized users can access the system based on role permissions.' 
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
                <div className="w-8 h-8 bg-sky-700 text-white rounded-lg flex items-center justify-center">{open === i ? '-' : '+'}</div>
              </button>
              {open === i && <div className="mt-3 text-slate-600">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

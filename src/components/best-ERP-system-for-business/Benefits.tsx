"use client";

import React from 'react';

const Benefits: React.FC = () => {
  const items = ['100% Production Visibility','Accurate BOM Control','Reduced Material Wastage','Real-Time Inventory','Job Card Accountability','Improved Profit Margin'];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-6">What You Achieve With BizPlusERP</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-50 text-center">
              <h4 className="font-bold">{it}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

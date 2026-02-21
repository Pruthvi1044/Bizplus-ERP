"use client";

import React from 'react';

const Problems: React.FC = () => {
  const items = [
    { title: 'Struggling to streamline business operations in Chennai?', text: 'Unorganized workflows slowing down decision-making and overall efficiency' },
    { title: 'Facing issues with sales, purchase, or inventory tracking?', text: 'Data stored across multiple tools causing errors and miscommunication' },
    { title: 'Difficulty managing finance and accounts?', text: 'Manual calculations leading to mistakes and poor financial visibility' },
    { title: 'Production delays affecting customer deliveries?', text: 'Lack of real-time tracking creating bottlenecks in operations' },
    { title: 'Stock mismatches impacting business performance?', text: 'No central system to track material movement across branches' },
    { title: 'No clarity on overall business performance?', text: 'Hard to track KPIs, profitability, and daily metrics without a proper ERP system' }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-8">Are You Facing These Business Management Problems?</h3>
        <p className="text-center text-slate-500 mb-8">These challenges reduce efficiency & profit for Chennai businesses</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="font-bold mb-2">{it.title}</h4>
              <p className="text-sm text-slate-500">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
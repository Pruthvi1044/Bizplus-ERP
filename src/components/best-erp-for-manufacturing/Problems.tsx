"use client";

import React from 'react';

const Problems: React.FC = () => {
  const items = [
    { title: 'Struggling to streamline manufacturing operations in Chennai?', text: 'Unorganized workflows slowing down production and overall plant efficiency.' },
    { title: 'Facing issues with raw material, WIP, or finished goods tracking?', text: 'Scattered data causing errors, delays, and miscommunication across departments.' },
    { title: 'Difficulty managing production planning & machine scheduling?', text: 'Manual coordination leading to underutilized machines and delayed orders.' },
    { title: 'Quality issues affecting customer deliveries?', text: 'No real-time QC tracking resulting in rework, wastage, and increased production cost.' },
    { title: 'Stock mismatches and inaccurate material consumption?', text: 'No centralized ERP system to track inventory flow across the manufacturing cycle.' },
    { title: 'No clarity on production metrics & factory performance?', text: 'Hard to monitor OEE, KPIs, production cost, and daily manufacturing insights.' }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-8">
          Are You Facing These Manufacturing Problems?
        </h3>
        <p className="text-center text-slate-500 mb-8">
          These challenges reduce productivity, increase cost & slow down Chennai manufacturing units
        </p>
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
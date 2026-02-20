"use client";

import React from 'react';

const Problems: React.FC = () => {
  const items = [
    { title: 'High labour turnover in Chennai?', text: 'Frequent worker changes causing productivity instability' },
    { title: 'Difficulty sourcing local raw materials?', text: 'Delays due to dependency on Sriperumbudur & Oragadam suppliers' },
    { title: 'Traffic delays affecting logistics?', text: 'Late delivery of goods due to Chennai congestion' },
    { title: 'Power fluctuations affecting production?', text: 'Machine downtime in industrial zones like Ambattur & Guindy' },
    { title: 'Stock mismatch during peak seasons?', text: 'Pongal & festival rush causing inventory errors' },
    { title: 'No clarity on production costing?', text: 'Hard to calculate real manufacturing cost due to variable labour & transport charges' }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-8">Are You Facing These Manufacturing Problems?</h3>
        <p className="text-center text-slate-500 mb-8">These problems directly affect profit margins</p>
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

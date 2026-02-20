"use client";

import React from 'react';

const Problems: React.FC = () => {
  const items = [
    { title: 'Production planning managed in Excel?', text: 'Multiple spreadsheets causing confusion and version conflicts' },
    { title: 'No proper BOM control?', text: 'Unable to track material requirements accurately' },
    { title: 'Raw material consumption not tracked?', text: 'Leading to wastage and increased costs' },
    { title: 'No clarity on job card status?', text: 'Production delays due to poor tracking' },
    { title: 'Stock mismatch between store & production?', text: 'Causing overstock or stockout situations' },
    { title: 'No finished goods costing visibility?', text: 'Unable to price products accurately' }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-3">Are You Facing These Manufacturing Problems?</h3>
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

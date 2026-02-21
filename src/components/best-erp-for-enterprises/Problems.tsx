"use client";

import React from 'react';

const Problems: React.FC = () => {
  const items = [
    { 
      title: 'Struggling to streamline multi-department operations across your enterprise?', 
      text: 'Fragmented workflows across departments leading to slow decisions and operational inefficiency.' 
    },
    { 
      title: 'Facing challenges in managing enterprise-wide finance, procurement or inventory?', 
      text: 'Data scattered across tools and legacy systems causing mismatches, delays, and compliance issues.' 
    },
    { 
      title: 'Difficulty handling large-scale accounting, multi-branch billing & audit requirements?', 
      text: 'Complex financial operations becoming harder to track without a unified ERP system.' 
    },
    { 
      title: 'Inconsistent customer experience across branches & teams?', 
      text: 'No centralized system to track customer lifecycle, enterprise CRM, or service workflows.' 
    },
    { 
      title: 'Lack of real-time visibility across plants, branches & corporate units?', 
      text: 'No unified dashboard to monitor operations, resources, budgets, and project status.' 
    },
    { 
      title: 'No clarity on enterprise-wide KPIs & performance analytics?', 
      text: 'Difficult to measure profitability, departmental performance, and strategic insights without ERP analytics.' 
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-8">
          Are You Facing These Enterprise-Level Challenges?
        </h3>
        <p className="text-center text-slate-500 mb-8">
          These issues slow down operations, increase costs & affect overall enterprise performance
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
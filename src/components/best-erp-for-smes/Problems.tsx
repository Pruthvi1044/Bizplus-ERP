"use client";

import React from 'react';

const Problems: React.FC = () => {
  const items = [
    { 
      title: 'Struggling to manage daily business operations in your Chennai SME?', 
      text: 'Manual processes slowing down workflow, productivity, and timely decision-making.' 
    },
    { 
      title: 'Facing issues with sales, purchase, or inventory tracking?', 
      text: 'Data spread across Excel sheets and multiple tools causing errors and confusion.' 
    },
    { 
      title: 'Difficulty managing accounts, billing & GST?', 
      text: 'Manual accounting leading to mistakes, delays, and compliance challenges.' 
    },
    { 
      title: 'Customer follow-ups and service requests getting missed?', 
      text: 'No centralized CRM system to manage leads, clients, and after-sales support.' 
    },
    { 
      title: 'Stock mismatches affecting business performance?', 
      text: 'No real-time insight into available stock, reorder levels, or branch-wise inventory.' 
    },
    { 
      title: 'No clarity on business performance & profitability?', 
      text: 'Hard to track KPIs, expenses, sales trends, and daily metrics without a proper ERP system.' 
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-8">
          Are You Facing These SME Business Challenges?
        </h3>
        <p className="text-center text-slate-500 mb-8">
          These issues reduce efficiency, increase costs & slow down Chennai’s small and medium businesses
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
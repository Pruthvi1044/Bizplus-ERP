"use client";

import React from 'react';

const Testimonials: React.FC = () => {
  const data = [
    { 
      quote: 'BizPlusERP helped us achieve full production traceability. Machine downtime dropped significantly after implementing automated scheduling.', 
      author: 'Suresh Kumar', 
      role: 'Plant Head, Metro Steel Fabricators, Sriperumbudur'  
    },
    { 
      quote: 'By far the best ERP for manufacturing in Chennai. Our raw material planning and WIP management improved tremendously within the first month.', 
      author: 'Meena Raghavan', 
      role: 'Operations Manager, Raghavan Metal Works, Thirumazhisai'  
    },
    { 
      quote: 'A game-changer for our factory. Real-time inventory tracking and quality analytics helped us reduce defects and speed up dispatch.', 
      author: 'Vijay Narayanan', 
      role: 'Production Director, Nova Auto Components, Oragadam' 
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-6">
          What Chennai Manufacturers Say About Our ERP
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="italic text-slate-600 mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
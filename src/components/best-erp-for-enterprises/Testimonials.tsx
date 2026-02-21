"use client";

import React from 'react';

const Testimonials: React.FC = () => {
  const data = [
    { 
      quote: 'BizPlusERP transformed the way our enterprise operates. We now manage finance, procurement, and operations from a single integrated system.', 
      author: 'S. Krishnan', 
      role: 'CFO, Global Tech Solutions, OMR'  
    },
    { 
      quote: 'The best ERP for enterprises in Chennai. Our multi-branch operations are now synchronized, enabling faster decisions and better performance tracking.', 
      author: 'Nisha Varma', 
      role: 'Operations Head, Varma Enterprises Group, Guindy'  
    },
    { 
      quote: 'A true enterprise-grade ERP. It improved visibility across departments, reduced compliance errors, and strengthened our audit and reporting processes.', 
      author: 'Arvind Raj', 
      role: 'Director, AR Infrastructure & Projects, Teynampet' 
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-6">
          What Chennai Enterprise Leaders Say About Our ERP
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
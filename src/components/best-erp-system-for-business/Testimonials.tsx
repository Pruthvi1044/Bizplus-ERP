"use client";

import React from 'react';

const Testimonials: React.FC = () => {
  const data = [
    { 
      quote: 'BizPlusERP gave our Chennai business complete operational control. Our order processing speed improved by 40% within weeks.', 
      author: 'Arun Prakash', 
      role: 'Managing Director, Prime Tech Industries, Ambattur'  
    },
    { 
      quote: 'The best ERP system for business in Chennai! Our entire workflow – sales, production and inventory – is now centralized and error-free.', 
      author: 'Divya Shankar', 
      role: 'Owner, Shankar Precision Works, Guindy'  
    },
    
    { 
      quote: 'Perfect ERP for Chennai-based businesses. We reduced wastage, improved costing accuracy, and scaled operations without confusion.', 
       author: 'Karthik Raj', 
      role: 'Director, Raj Engineering Components, Padi' 
    },
   
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-6">
          What Chennai Business Owners Say About Our ERP
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
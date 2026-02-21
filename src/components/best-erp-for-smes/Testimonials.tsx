"use client";

import React from 'react';

const Testimonials: React.FC = () => {
  const data = [
    { 
      quote: 'BizPlusERP helped us centralize billing, inventory, and customer data. Our team productivity improved instantly after implementation.', 
      author: 'Praveen M', 
      role: 'Owner, Praveen Electricals, T. Nagar'  
    },
    { 
      quote: 'The best ERP for SMEs in Chennai! We eliminated manual paperwork and now handle sales, purchases, and accounts from one place.', 
      author: 'Anitha J', 
      role: 'Managing Partner, AJ Traders, Velachery'  
    },
    { 
      quote: 'A perfect ERP for small and medium businesses. Our stock accuracy improved by 90%, and order processing time was cut in half.', 
      author: 'Ramesh B', 
      role: 'Director, RB Distributors, Chromepet' 
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-6">
          What Chennai SME Owners Say About Our ERP
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
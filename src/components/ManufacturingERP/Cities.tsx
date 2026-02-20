"use client";

import React from 'react';

const Cities: React.FC = () => {
  const cities = ['Pune','Mumbai','Bangalore','Hyderabad','Chennai','Delhi','Ahmedabad','Surat','Coimbatore','Indore','Jaipur','Kolkata','& More'];
  return (
    <section className="py-12 bg-slate-50 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h4 className="text-2xl font-extrabold mb-4">Available Across India</h4>
        <p className="text-slate-500 mb-6">We Provide ERP Implementation In:</p>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map(c => <span key={c} className="px-4 py-2 bg-white rounded-full font-semibold text-sm">{c}</span>)}
        </div>
      </div>
    </section>
  );
};

export default Cities;

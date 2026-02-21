"use client";

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10 text-center">
        <div className="inline-block bg-sky-800 text-white px-3 py-0.5 rounded-full text-sm font-semibold mb-2">
          Chennai’s Trusted ERP System for Modern Businesses
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Best ERP System for Business in Chennai – Smarter, Faster & Scalable
        </h2>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Transform the way your Chennai-based business operates with an intelligent ERP system built for growth. 
          Improve management of sales, finance, inventory, production, and day-to-day operations in one unified platform.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a href="#contact" className="bg-gradient-to-r from-sky-700 to-sky-500 text-white px-6 py-3 rounded-lg font-semibold">
            Get Free ERP Demo
          </a>
          <a href="https://wa.me/917030323838" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-3 rounded-lg font-semibold">
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✔</span> End-to-End Business Process Automation
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✔</span> Real-Time Control of Inventory & Finance
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✔</span> Tailored ERP System for Chennai Businesses
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
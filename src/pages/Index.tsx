
import React, { useRef } from "react";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const dashboardRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    if (dashboardRef.current) {
      const y = dashboardRef.current.getBoundingClientRect().top + window.scrollY - 40; // 40px offset for spacing
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="text-center py-16 md:py-24 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shadow-lg neon-border">
              <span className="text-3xl text-white font-bold">🤖</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold glow-text mb-4">AI Retail Intelligence</h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-6">Supercharge your retail business with multi-agent AI for inventory, pricing, and demand forecasting.</p>
          <a
            href="#dashboard"
            onClick={handleGetStarted}
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform neon-border"
          >
            Get Started
          </a>
        </div>
      </section>
      <div ref={dashboardRef} id="dashboard" className="pt-16 md:pt-24">
        <Dashboard />
      </div>
    </div>
  );
};

export default Index;

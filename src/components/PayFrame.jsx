import React, { useEffect, useState } from "react";
import { Send, Instagram, Linkedin, Twitter, Facebook, Mail, Phone, MapPin, X } from "lucide-react";

// Tailwind-only, single-file component with dummy SVG assets
// Drop this into your React app and render <PayFrameComingSoon />
export default function PayFrameComingSoon() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes = 300 seconds
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  const timeLabel = `${minutes}:${seconds}`;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-700 text-white overflow-hidden relative">
      {/* Watermark background */}
      <div className="absolute inset-0 opacity-15 select-none pointer-events-none">
        <div className="w-[200%] h-[200%] rotate-[-10deg] translate-x-[-10%] translate-y-[-10%] grid grid-cols-6 gap-8">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              className="text-5xl font-semibold tracking-wide whitespace-nowrap place-self-center"
            >
              COMING SOON
            </span>
          ))}
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 py-4">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0">
            {/* PayFrame Logo */}
            <img 
              src={require('../assets/payframe/payframe.png')}
              alt="PayFrame"
              className="h-[80px] object-contain w-auto max-w-full"
            />
          </div>

          <div className="w-full sm:w-auto flex justify-center sm:justify-end gap-4">
            <a 
              href="/"
              className="rounded-full bg-white/10 hover:bg-white/20 transition px-5 py-2.5 text-sm font-medium shadow flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Back to Home
            </a>
            <div className="hidden sm:block text-3xl md:text-4xl font-semibold tracking-widest">
              {timeLabel}
            </div>
            <button
              onClick={() => setShowContact(true)}
              className="rounded-full bg-white/15 hover:bg-white/25 transition px-5 py-2.5 text-sm font-medium shadow"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Hero section */}
        <div className="mt-8 lg:mt-12 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div className="max-w-xl">
            <h1 className="text-[40px] leading-[1.1] sm:text-6xl md:text-7xl font-extrabold drop-shadow">
              <span className="block">Building</span>
              <span className="block">Something</span>
              <span className="block">with</span>
              <span className="block text-white">PayFrame</span>
            </h1>

            {/* Email capture */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full sm:w-auto flex-1 rounded-full bg-white/10 focus:bg-white/15 placeholder-white/70 backdrop-blur border border-white/20 px-5 py-3 outline-none"
              />
              <button className="inline-flex items-center gap-2 rounded-full bg-white text-blue-700 hover:brightness-95 transition px-6 py-3 font-semibold shadow">
                Submit <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }, idx) => (
                <button
                  key={idx}
                  title={label}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 grid place-items-center transition"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Right illustration (dummy SVG) */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-white/10 blur-2xl" />
            <div className="relative rounded-[2rem] bg-white/10 border border-white/20 p-6 md:p-8 shadow-2xl">
              {/* Dashboard-like dummy scene */}
              <svg
                viewBox="0 0 640 420"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="640" height="420" fill="url(#g1)" rx="24" />
                {/* Charts */}
                <rect x="24" y="28" width="210" height="150" rx="14" fill="#3b82f6" opacity="0.2" />
                <rect x="250" y="28" width="170" height="150" rx="14" fill="#22d3ee" opacity="0.25" />
                <rect x="440" y="28" width="176" height="150" rx="14" fill="#a78bfa" opacity="0.25" />
                {/* Bar chart bars */}
                {[...Array(6)].map((_, i) => (
                  <rect key={i} x={46 + i * 30} y={120 - i * 12} width="18" height={90 - i * 12} fill="#2563eb" />
                ))}
                {/* Line chart */}
                <polyline
                  points="265,160 290,140 315,130 340,150 365,120 390,135 415,110"
                  fill="none"
                  stroke="#0891b2"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {/* Cards */}
                <rect x="24" y="200" width="592" height="180" rx="18" fill="#111827" opacity="0.06" />
                {/* Team avatars (dummy) */}
                {[0,1,2,3].map((i) => (
                  <g key={i} transform={`translate(${60 + i*120}, 240)`}>
                    <circle cx="0" cy="0" r="36" fill="#1f2937" opacity="0.25" />
                    <circle cx="0" cy="0" r="30" fill="#ffffff" opacity="0.9" />
                    <rect x="-28" y="50" width="56" height="10" rx="5" fill="#ffffff" opacity="0.7" />
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowContact(false)} />

          <div className="relative w-[95vw] max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-[#2146d1] to-[#1e2fb9]">
            {/* Close */}
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 rounded-full bg-white/15 hover:bg-white/25 p-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left info */}
            <div className="p-8 sm:p-10 text-white">
              <h2 className="text-5xl sm:text-6xl font-extrabold leading-[1.05]">Together, we<br/>shape the<br/>future</h2>

              <div className="mt-10 space-y-6">
                <div className="w-full sm:w-auto flex justify-center sm:justify-end gap-4">
                  <span className="w-11 h-11 grid place-items-center rounded-full bg-white/15"><Mail className="w-5 h-5"/></span>
                  <a href="mailto:framedigital.solutions@gmail.com" className="text-lg hover:underline">framedigital.solutions@gmail.com</a>
                </div>
                <div className="w-full sm:w-auto flex justify-center sm:justify-end gap-4">
                  <span className="w-11 h-11 grid place-items-center rounded-full bg-white/15"><Phone className="w-5 h-5"/></span>
                  <a href="tel:+917294962001" className="text-lg hover:underline">+91 72949 62001</a>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-11 h-11 grid place-items-center rounded-full bg-white/15"><MapPin className="w-5 h-5"/></span>
                  <p className="text-lg leading-relaxed">
                    204 2nd Floor, Paras Mall, Old, Purani Motihari Rd, Jaiprakash Nagar, Muzaffarpur, Bihar 843108
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <button className="w-12 h-12 grid place-items-center rounded-xl bg-white/15 hover:bg-white/25 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </button>
                <button className="w-12 h-12 grid place-items-center rounded-xl bg-white/15 hover:bg-white/25 transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </button>
              </div>
            </div>

            {/* Right form card */}
            <div className="relative bg-[#12205a]/60 p-6 sm:p-8 flex items-stretch">
              <div className="w-full bg-[#0f1b4a]/60 border border-white/10 rounded-2xl p-6 sm:p-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message sent! (demo)");
                    setShowContact(false);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 outline-none placeholder-white/80" placeholder="Last Name" />
                    <input className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 outline-none placeholder-white/80" placeholder="First Name" />
                  </div>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 outline-none placeholder-white/80" placeholder="Email" />
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 outline-none placeholder-white/80" placeholder="Phone Number" />
                  <textarea rows={6} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 outline-none placeholder-white/80" placeholder="Message" />

                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-400 hover:bg-indigo-300 text-[#0a0f2b] font-semibold py-4">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom ticker */}
      <div className="absolute bottom-0 inset-x-0 bg-white/10 backdrop-blur border-t border-white/20">
        <div className="whitespace-nowrap overflow-hidden">
          <div className="animate-[marquee_18s_linear_infinite] py-2 text-sm tracking-wider">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="mx-3">COMING SOON</span>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        .opacity-15 { opacity: 0.15; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

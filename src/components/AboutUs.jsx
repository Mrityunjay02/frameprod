import React, { useState } from "react";
import mesh1 from "../assets/about/mesh_1.png";
import ai from "../assets/about/ai.png";
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(99,102,241,0.20),transparent_60%)]" />
        <img src={mesh1} alt="Mesh" className="absolute w-72 h-72 -top-8 -left-10 rotate-45 opacity-80 blur-[1px]" />
      </div>

      {/* Title */}
      <header onClick={scrollToTop} className="select-none cursor-pointer text-center uppercase font-bold leading-[1.1] tracking-tight px-4 py-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">User Focused Value<br className="hidden sm:block"/> Based Data Driven</h1>
      </header>

      {/* About label (vertical) */}
      <div className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-2xl font-['Jacques_Francois'] text-neutral-100">
        About Us
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left copy */}
        <div className="text-neutral-200/95 text-base md:text-lg leading-7 md:leading-8 font-inter">
          <p>
            Welcome to Frame Digital! We're a dedicated team offering top‑notch digital solutions including logo design, UI/UX design, development, marketing, and SEO.
          </p>
          <p className="mt-5">
            With our collective expertise, we turn ideas into reality. Whether you're a startup or an established brand, we're here to elevate your online presence and help you achieve your goals.
          </p>
          <p className="mt-5">
            At Frame Digital, we prioritize quality, innovation, and client satisfaction. Let's work together to bring your vision to life.
          </p>

          <button onClick={() => setOpen(true)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 text-white font-medium">
            Get in touch
          </button>
        </div>

        {/* Right art */}
        <div className="flex justify-end">
          <img src={ai} alt="AI Illustration" className="w-full max-w-xl h-auto object-contain" />
        </div>
      </div>

      {/* Contact modal */}
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#2341C2] text-white rounded-3xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white/90 hover:text-white text-2xl">✕</button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-8 md:p-10">
              {/* Left details */}
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">Together, we shape the future</h2>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Mail className="h-5 w-5"/></span>
                    <a href="mailto:framedigital.solutions@gmail.com" className="hover:underline underline-offset-4">framedigital.solutions@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Phone className="h-5 w-5"/></span>
                    <a href="tel:+917294962001" className="hover:underline underline-offset-4">+91 72949 62001</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><MapPin className="h-5 w-5"/></span>
                    <span>204 2nd Floor, Paras Mall, Old, Purani Motihari Rd, Jaiprakash Nagar, Muzaffarpur, Bihar 843108 </span>
                  </li>
                </ul>
                <div className="flex items-center gap-3 pt-2">
                  <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition"><Linkedin className="h-5 w-5"/></a>
                  <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition"><Instagram className="h-5 w-5"/></a>
                </div>
              </div>

              {/* Right form */}
              <div className="rounded-2xl bg-[#161B3C]/70 backdrop-blur border border-white/10 shadow-2xl p-6 sm:p-8">
                <form onSubmit={(e)=>{e.preventDefault(); setOpen(false);}} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Last Name" className="h-12 rounded-lg bg-white/5 border border-white/15 px-4 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" required />
                    <input type="text" placeholder="First Name" className="h-12 rounded-lg bg-white/5 border border-white/15 px-4 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" required />
                  </div>
                  <input type="email" placeholder="Email" className="w-full h-12 rounded-lg bg-white/5 border border-white/15 px-4 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" required />
                  <input type="tel" placeholder="Phone Number" className="w-full h-12 rounded-lg bg-white/5 border border-white/15 px-4 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
                  <textarea rows={5} placeholder="Message" className="w-full rounded-lg bg-white/5 border border-white/15 p-4 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" required />
                  <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5864FF] hover:bg-[#6B76FF] transition h-12 px-5 text-sm font-medium">
                    <span>Send Message</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;

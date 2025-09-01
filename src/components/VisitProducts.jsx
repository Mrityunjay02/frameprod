import React from "react";
import phone from "../assets/product/phone.jpg";
import dollar from "../assets/product/dollar.png";
import check from "../assets/product/check.png";
import wallet from "../assets/product/wallet.png";
import like from "../assets/product/like.png";

/* ----------------------------- Small product card ----------------------------- */
const ProductCard = ({
  title,
  description,
  subtitle,
  titleStyle,
  subtitleStyle,
  descriptionStyle,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "16px",
      width: "calc(33.333% - 32px)",
      margin: "0 16px",
      maxWidth: "300px",
    }}
  >
    <div
      style={{
        width: "100%",
        textAlign: "center",
        color: "#F4F4F4",
        fontSize: "32px",
        fontFamily: "Jacques Francois",
        fontWeight: 400,
        textTransform: "capitalize",
        lineHeight: 1.2,
        wordWrap: "break-word",
        marginBottom: "20px",
      }}
    >
      Visit Our Products
    </div>

    <div
      style={{
        width: "100%",
        aspectRatio: "201/275",
        background: "white",
        borderRadius: "20px",
      }}
    />

    <div
      style=
        {titleStyle || {
          color: "#BFBFBF",
          fontSize: 30,
          fontFamily: "Inter",
          fontWeight: 700,
          wordWrap: "break-word",
        }}
    >
      {title}
    </div>

    {subtitle && (
      <div
        style=
          {subtitleStyle || {
            color: "#BFBFBF",
            fontSize: 15,
            fontFamily: "Inter",
            fontWeight: 300,
            wordWrap: "break-word",
            letterSpacing: "0.3px",
            marginTop: "4px",
            marginBottom: "4px",
          }}
      >
        {subtitle}
      </div>
    )}

    <div
      style=
        {descriptionStyle || {
          color: "#BFBFBF",
          fontSize: 18,
          fontFamily: "Inter",
          fontWeight: 400,
          wordWrap: "break-word",
          lineHeight: 1.5,
          marginTop: "8px",
        }}
    >
      {description}
    </div>
  </div>
);

/* ----------------------------- TOP: Why Choose Us (CSS) ----------------------------- */
const WhyChooseUs = () => {
  const products = [
    {
      title: "Venmo",
      subtitle: "Singular function",
      description:
        "At launch, the popular payment solution Venmo had a singular benefit to the end-user: it allowed friends to quickly split bills.",
    },
    {
      title: "Thomson Reuters Middle-Market Funds",
      subtitle: "Multiple primary functions",
      description:
        "1. Market research, events, and resources\n2. Portfolio metrics, historical pricing, and news\n3. Fund financials, dividends, and filings\n4. Investee mark to market + more",
      titleStyle: {
        color: "#BFBFBF",
        fontSize: 30,
        fontFamily: "Inter",
        fontWeight: 700,
        wordWrap: "break-word",
      },
      subtitleStyle: {
        color: "#BFBFBF",
        fontSize: 15,
        fontFamily: "Inter",
        fontWeight: 300,
        wordWrap: "break-word",
      },
      descriptionStyle: {
        color: "#BFBFBF",
        fontSize: 18,
        fontFamily: "Inter",
        fontWeight: 400,
        wordWrap: "break-word",
        whiteSpace: "pre-line",
      },
    },
    {
      title: "InKind Space",
      subtitle: "Hierarchical approach",
      description:
        "Primarily allows patients and their network to request and/or give support. Secondarily provides non-medical tips, local resources, and curated content.",
      titleStyle: {
        color: "#BFBFBF",
        fontSize: 30,
        fontFamily: "Inter",
        fontWeight: 700,
        wordWrap: "break-word",
      },
      subtitleStyle: {
        color: "#BFBFBF",
        fontSize: 15,
        fontFamily: "Inter",
        fontWeight: 300,
        wordWrap: "break-word",
      },
      descriptionStyle: {
        color: "#BFBFBF",
        fontSize: 18,
        fontFamily: "Inter",
        fontWeight: 400,
        wordWrap: "break-word",
      },
    },
  ];

  return (
    <section className="hero4">
      <style>{`
          .hero4 { width: 100%; background: #000; color: #f4f4f4; padding: 56px 20px 80px; box-sizing: border-box; overflow: hidden; }
          .hero4 .container { max-width: 1200px; margin: 0 auto; }
          .hero4 .title { font-family: "Jacques Francois", serif; font-weight: 400; font-size: 32px; line-height: 1.2; text-align: center; margin-bottom: 32px; }
          .hero4 .layout { display: grid; grid-template-columns: 1.1fr 1fr; align-items: center; gap: 48px; }
          .hero4 .phoneWrap { position: relative; display: flex; justify-content: center; align-items: center; min-height: 520px; }
          .hero4 .phoneImg { width: 440px; max-width: 100%; height: auto; display: block; border-radius: 8px; box-shadow: 0 30px 60px rgba(0,0,0,.55); transform: translateX(-8%); }
          .hero4 .cards { display: grid; grid-template-columns: repeat(2, minmax(240px, 1fr)); gap: 24px; }
          .hero4 .card { background: #191919; border: 1px solid #2a2a2a; border-radius: 12px; padding: 28px 22px; text-align: center; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; box-shadow: 0 10px 30px rgba(0,0,0,.25); }
          .hero4 .card:hover { transform: translateY(-6px); box-shadow: 0 16px 46px rgba(0,0,0,.45); border-color: #3a3a3a; }
          .hero4 .icon { width: 66px; height: 66px; object-fit: contain; margin: 2px auto 14px; display: block; }
          .hero4 .cardTitle { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; font-weight: 600; font-size: 22px; margin: 6px 0 8px; }
          .hero4 .cardText { color: #bdbdbd; font-size: 15.5px; line-height: 1.6; }
          @media (max-width: 1024px) { .hero4 .layout { grid-template-columns: 1fr; gap: 36px; } .hero4 .phoneImg { transform: none; width: 420px; } .hero4 .cards { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 680px) { .hero4 { padding: 48px 16px 68px; } .hero4 .cards { grid-template-columns: 1fr; } .hero4 .phoneWrap { min-height: auto; } .hero4 .phoneImg { width: 360px; } }
        `}</style>

      <div className="container">
        <h2 className="title">Why Choose Us</h2>
        <div className="layout">
          <div className="phoneWrap">
            <img src={phone} alt="Smartphone mockup" className="phoneImg" />
          </div>

          <div className="cards">
            <article className="card">
              <img src={dollar} alt="Affordable" className="icon" />
              <h3 className="cardTitle">Affordable Price</h3>
              <p className="cardText">We provide websites to all startups at very affordable prices.</p>
            </article>

            <article className="card">
              <img src={wallet} alt="Personal connection" className="icon" />
              <h3 className="cardTitle">Personal Connection</h3>
              <p className="cardText">We build a personal connection with all company owners.</p>
            </article>

            <article className="card">
              <img src={check} alt="Industry standard" className="icon" />
              <h3 className="cardTitle">Industry Standard</h3>
              <p className="cardText">We ensure our work meets industry standards.</p>
            </article>

            <article className="card">
              <img src={like} alt="Trust" className="icon" />
              <h3 className="cardTitle">100% Trust</h3>
              <p className="cardText">We give 100% trust to our clients and their startups.</p>
            </article>
          </div>
        </div>
      </div>

      {/* Bottom inline cards row (kept for your use) */}
      <section
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#000000",
          padding: "40px 0 0",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "40px",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>
    </section>
  );
};

/* ----------------------------- Colorful iPhone grid (Tailwind) ----------------------------- */
const Phone15Mock = () => (
  <div className="relative w-full aspect-[3/5]">
    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200" />
    <div className="absolute inset-[6px] rounded-[1.8rem] bg-slate-100" />
    <div className="absolute inset-[12px] rounded-[1.6rem] bg-indigo-100/70 shadow-inner" />
    <div className="absolute top-3 left-1/2 -translate-x-1/2 h-3 w-24 rounded-full bg-black/70" />
    <div className="absolute -bottom-1 inset-x-4 h-6 bg-black/10 blur-md rounded-full" />
  </div>
);

const GradientFeatureCard = ({ title, subtitle, description, accent }) => (
  <div className="relative">
    <div
      className={`rounded-2xl p-[1px] ${
        accent || "bg-gradient-to-br from-fuchsia-500 via-sky-500 to-emerald-400"
      } shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform duration-200 will-change-transform hover:-translate-y-1`}
    >
      <div className="relative rounded-2xl bg-neutral-900">
        <div className="p-5">
          <Phone15Mock />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-white font-semibold leading-tight">
            {title} {subtitle && <span className="font-normal opacity-90">{subtitle}</span>}
          </h3>
          {description && (
            <p className="mt-2 text-xs text-white/70 leading-5 max-w-[90%]">{description}</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

const featureCards = [
  {
    title: "Live stream from",
    subtitle: "your iPhone, fast.",
    description:
      "Turn your iPhone or iPad into a multi‑camera streaming studio and stream to YouTube, Twitch, and more.",
    accent: "bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-500",
  },
  {
    title: "Live stream from",
    subtitle: "your iPhone, fast.",
    description:
      "Turn your iPhone or iPad into a multi‑camera streaming studio and stream to YouTube, Twitch, and more.",
    accent: "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500",
  },
  {
    title: "Podcast Auto Edit",
    subtitle: "",
    description: "Automatically edits your podcast or interview videos, in seconds.",
    accent: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
  },
  {
    title: "Teleprompter on",
    subtitle: "Your iPhone",
    description: "Read your script and record your video at the same time, in one app.",
    accent: "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500",
  },
  {
    title: "Live Green Screen",
    subtitle: "Editor",
    description:
      "Remove your video background in a tap, and put yourself in any setting you can imagine.",
    accent: "bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-600",
  },
  {
    title: "Automatic Captions",
    subtitle: "",
    description: "Add, animate and customize AI‑generated captions.",
    accent: "bg-gradient-to-br from-lime-400 via-amber-400 to-rose-400",
  },
];

const ColorfulProductHelps = () => (
  <section className="relative w-full bg-black text-white">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%)]" />
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-18 lg:py-24">
      <header className="mb-10 text-center">
        <h2 className="text-sm tracking-[0.18em] uppercase text-white/70">How Our Product Helps You</h2>
      </header>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((f, i) => (
          <GradientFeatureCard key={i} {...f} />
        ))}
      </div>
    </div>
  </section>
);

/* ----------------------------- MERGED EXPORT ----------------------------- */
export default function visitproduct() {
  return (
    <>
      <WhyChooseUs />
      <ColorfulProductHelps />
    </>
  );
}

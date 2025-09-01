import React from "react";

/* ---------------- Reusable Portrait Card ---------------- */
const PortraitCard = ({ src, alt, name, role }) => (
  <div
    style={{
      width: "378px",
      height: "auto",
      borderRadius: 10,
      overflow: "hidden",
      background: "#111",
      boxShadow: "0 10px 30px rgba(0,0,0,.35)",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div style={{ width: "100%", height: "412px" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
    <div style={{ padding: "10px 12px", background: "#111", textAlign: "center" }}>
      <div
        style={{
          fontFamily: "DM Serif Display, Georgia, serif",
          fontSize: 16,
          color: "#fff",
          fontWeight: 600,
          marginBottom: 4,
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          color: "rgba(255,255,255,.8)",
        }}
      >
        {role}
      </div>
    </div>
  </div>
);

const Team = () => {
  const data = {
    left: {
      big: {
        name: "Manas Mahendra",
        role: "Founder & CEO",
        img: require("../assets/team/ceo.jpg"),
      },
    },
    mid: [
      {
        name: "Suraj Kumar",
        role: "Chief UI/UX Designer",
        img: require("../assets/team/chief ui.jpg"),
        tall: true,
      },
      {
        name: "Swami Kumar",
        role: "Senior Designer",
        img: require("../assets/team/sdesign.jpg"),
        tall: false,
      },
    ],
    right: [
      {
        name: "Vishal Singh",
        role: "CO–Founder & CFO",
        img: require("../assets/team/co&ceo.jpg"),
      },
      { name: "Nikita Bansal", role: "Manager", img: require("../assets/team/manager.jpg") },
      { name: "Priya", role: "COO Manager", img: require("../assets/team/coo.jpg") },
    ],
    sales: [
      { name: "Nausheen", role: "Senior Manager", img: require("../assets/team/ssmanager.jpg") },
      { name: "Rohit Sharma", role: "Manager", img: require("../assets/team/smanager.jpg") },
    ],
  };

  return (
    <section style={{ background: "#000", color: "#fff" }}>
      <style>{`
        .wrap{max-width:1160px;margin:0 auto;padding:56px 24px 64px;box-sizing:border-box}
        .gridTop{display:grid;grid-template-columns:1.2fr 1fr 0.9fr;gap:34px;align-items:start}
        .stack{display:grid;gap:26px}
        .rightCol{display:grid;gap:26px}
        .title{font-family:"Jacques Francois",serif;font-weight:400;font-size:28px;margin:0 0 12px}
        .sub{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;font-size:14px;line-height:1.6;color:#e6e6e6;opacity:.9}
        .divider{height:48px}
        .salesGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:44px;justify-items:center}
        .salesCard{width:420px}
        @media(max-width:1100px){
          .gridTop{grid-template-columns:1fr;gap:28px}
          .salesGrid{grid-template-columns:1fr;gap:28px}
          .salesCard{width:100%}
        }
      `}</style>

      <div className="wrap">
        {/* ---------- TOP: Our Team (3 columns) ---------- */}
        <div className="gridTop">
          {/* Left column: heading + big CEO */}
          <div>
            <h2 className="title">Our Team</h2>
            <p className="sub">
              Our Dedicated Team Strives To Deliver<br />
              Excellence In Every Service We Provide.
            </p>

            <div className="divider" />

            <PortraitCard
              src={data.left.big.img}
              alt={data.left.big.name}
              name={data.left.big.name}
              role={data.left.big.role}
            />
          </div>

          {/* Middle column: one tall + one small */}
          <div className="stack">
            <PortraitCard
              src={data.mid[0].img}
              alt={data.mid[0].name}
              name={data.mid[0].name}
              role={data.mid[0].role}
            />

            <PortraitCard
              src={data.mid[1].img}
              alt={data.mid[1].name}
              name={data.mid[1].name}
              role={data.mid[1].role}
            />
          </div>

          {/* Right column: three stacked small cards */}
          <div className="rightCol">
            {data.right.map((m) => (
              <PortraitCard
                key={m.name}
                src={m.img}
                alt={m.name}
                name={m.name}
                role={m.role}
              />
            ))}
          </div>
        </div>

        {/* ---------- SALES TITLE ---------- */}
        <h3
          style={{
            fontFamily: "Jacques Francois, serif",
            fontWeight: 400,
            fontSize: 22,
            textAlign: "center",
            margin: "72px 0 28px",
            color: "#EDEDED",
            letterSpacing: ".02em",
          }}
        >
          Sales Executive Team
        </h3>

        {/* ---------- Bottom: two wide cards ---------- */}
        <div className="salesGrid">
          {data.sales.map((m) => (
            <div key={m.name} className="salesCard">
              <PortraitCard
                src={m.img}
                alt={m.name}
                name={m.name}
                role={m.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

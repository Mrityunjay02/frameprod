import React, { useState } from 'react';
import cursorImg from '../assets/product/cursor.png';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowRight } from 'lucide-react';

import Frame1Svg from '../assets/product/Frame (1).svg';
import FrameSvg from '../assets/product/Frame.svg';
import Frame2Svg from '../assets/product/Frame (2).svg';
import Frame3Svg from '../assets/product/Frame (3).svg';

const Hero3 = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="relative w-full overflow-hidden">
      {/* ------------------- HERO TOP ------------------- */}
      <div className="min-h-screen bg-white text-black relative overflow-hidden">
        {/* Left Side Image */}
        <div
          style={{
            position: 'absolute',
            left: '50px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <img
            src={require('../assets/product/Group.png')}
            alt="Group"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>

        {/* Our Products Text */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            right: '400px',
            transform: 'translateY(-50%)',
            textAlign: 'right',
            zIndex: 10,
            fontFamily: 'Jacques Francois',
            fontSize: '80px',
            fontWeight: '400',
            textTransform: 'capitalize',
            lineHeight: '120px',
            color: '#373737',
          }}
        >
          Our Products
        </div>

        {/* Description Text */}
        <div
          style={{
            position: 'absolute',
            top: '65%',
            left: '65%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 10,
            maxWidth: '800px',
            fontFamily: 'serif',
            fontSize: '40px',
            lineHeight: '1.75',
            color: 'black',
          }}
        >
          <p>Our User-Centered Design</p>
          <p>Encourages Productivity</p>
          <p>And Boosts Revenue</p>
        </div>

        {/* New Text */}
        <div
          style={{
            position: 'absolute',
            bottom: '100px',
            left: '65%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              color: '#373737',
              fontSize: '18px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '500',
              textTransform: 'capitalize',
              lineHeight: '27px',
              wordWrap: 'break-word',
              display: 'inline-block',
            }}
          >
            We don't do cookie-cutter solutions
          </div>
        </div>

        {/* Button */}
        <div
          style={{
            position: 'absolute',
            bottom: '5px',
            left: '60%',
            transform: 'translateX(-50%)',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <div
            onClick={() => setShowContactForm(true)}
            style={{
              width: 'fit-content',
              padding: '13px 31px',
              background: '#464BF9',
              borderRadius: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: '20px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '500',
                whiteSpace: 'nowrap',
              }}
            >
              Get in touch
            </div>
          </div>

          {/* Cursor Image */}
          <div
            style={{
              position: 'absolute',
              bottom: '-70px',
              left: 'calc(50% + 60px)',
              width: '60px',
              height: '60px',
            }}
          >
            <img
              style={{
                width: '100%',
                height: '100%',
                transform: 'rotate(-60deg)',
                transformOrigin: 'top left',
                pointerEvents: 'none',
                zIndex: 1,
              }}
              src={cursorImg}
              alt="Cursor decoration"
            />
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowContactForm(false)}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#2341C2] text-white rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 sm:p-8 md:p-10">
                {/* Left Content */}
                <div className="space-y-10">
                  <h1 className="font-semibold leading-tight tracking-tight">
                    <span className="block text-4xl sm:text-5xl md:text-6xl">
                      Together, we shape the future
                    </span>
                  </h1>

                  <ul className="space-y-7">
                    <li className="flex items-center gap-4">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                        <Mail className="h-5 w-5" />
                      </span>
                      <a
                        href="mailto:framedigital.solutions@gmail.com"
                        className="text-lg hover:underline underline-offset-4"
                      >
                        framedigital.solutions@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                        <Phone className="h-5 w-5" />
                      </span>
                      <a
                        href="tel:+917294962001"
                        className="text-lg hover:underline underline-offset-4"
                      >
                        +91 72949 62001
                      </a>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <span className="text-lg">204 2nd Floor, Paras Mall, Old, Purani Motihari Rd, Jaiprakash Nagar, Muzaffarpur, Bihar 843108 </span>
                    </li>
                  </ul>

                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Right Card / Form */}
                <div className="rounded-3xl bg-[#161B3C]/70 backdrop-blur border border-white/10 shadow-2xl p-6 sm:p-8 md:p-10">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setShowContactForm(false);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="w-full h-12 rounded-lg bg-white/5 border border-white/15 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="First Name"
                          className="w-full h-12 rounded-lg bg-white/5 border border-white/15 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                          required
                        />
                      </div>
                    </div>

                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full h-12 rounded-lg bg-white/5 border border-white/15 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full h-12 rounded-lg bg-white/5 border border-white/15 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />

                    <textarea
                      placeholder="Message"
                      rows={5}
                      className="w-full rounded-lg bg-white/5 border border-white/15 p-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    />

                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5864FF] hover:bg-[#6B76FF] transition h-12 px-5 text-sm font-medium"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ------------------- HERO BOTTOM ------------------- */}
      <div
        style={{
          width: '100vw',
          minHeight: '100vh',
          backgroundColor: 'white',
          padding: '80px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          gap: '60px',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* ===== Clean Features heading + left rail ===== */}
        <div
          className="featuresBlock"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 24,
            width: '100%',
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          {/* Left rail */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              minWidth: 56,
              height: 220,
            }}
          >
            <div
              style={{
                width: 2,
                height: '70%',
                background: '#E5E7EB',
                borderRadius: 2,
                opacity: 0.75,
              }}
            />
            <span
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                fontFamily: 'Jacques Francois, serif',
                fontWeight: 400,
                fontSize: 16,
                letterSpacing: '0.22em',
                textTransform: 'none',
                color: '#6B7280',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              Our Features
            </span>
          </div>

          {/* Right heading */}
          <div
            style={{
              flex: 1,
              color: '#333333',
              fontFamily:
                'DM Sans, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
              fontWeight: 600,
              fontSize: 38,
              lineHeight: 1.35,
              textTransform: 'none',
              wordBreak: 'break-word',
            }}
          >
            As a tight-knit team of experts, we create memorable and emotional websites,
            digital experiences, and native apps.
          </div>
        </div>

        {/* Responsive styles */}
        <style jsx>{`
          @media (max-width: 1024px) {
            .featuresBlock div[style*="font-weight: 600"] {
              font-size: 32px !important;
            }
            .featuresBlock > div:first-child {
              height: 180px !important;
              min-width: 48px !important;
            }
          }
          @media (max-width: 640px) {
            .featuresBlock {
              gap: 16px !important;
              padding: 0 16px !important;
            }
            .featuresBlock div[style*="font-weight: 600"] {
              font-size: 22px !important;
              line-height: 1.4 !important;
            }
            .featuresBlock > div:first-child {
              height: 140px !important;
              min-width: 40px !important;
            }
            .featuresBlock span[style*="writing-mode"] {
              font-size: 13px !important;
              letter-spacing: 0.16em !important;
            }
          }
        `}</style>

        {/* Feature Sections */}
        <div style={{ width: '100%', maxWidth: '1200px' }}>
          {/* Main Feature Box */}
          <div
            style={{
              width: '100%',
              height: '400px',
              backgroundColor: 'black',
              borderRadius: '12px',
              marginBottom: '40px',
              position: 'relative',
              overflow: 'hidden',
              padding: '40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'absolute',
                top: '70px',
                left: '50px',
                maxWidth: '500px',
              }}
            >
              <img src={FrameSvg} alt="" style={{ width: '48px', height: '48px' }} />
              <div style={{ color: 'white', fontSize: '30px', fontWeight: '700' }}>
                Your ultra-capable teammate
              </div>
              <div style={{ color: 'white', fontSize: '18px', opacity: 0.9 }}>
                Messy notes? Have Notion AI summarize what's important and actionable.
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                backgroundColor: '#E2E6F8',
                right: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
                borderRadius: '8px',
              }}
            />
          </div>

          {/* 3 Small Feature Boxes */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '60px' }}>
            {/* Box 1 */}
            <div
              style={{
                flex: 1,
                backgroundColor: 'black',
                borderRadius: '12px',
                padding: '60px 24px 24px 32px',
                color: 'white',
              }}
            >
              <img src={Frame1Svg} alt="" style={{ width: '40px', marginBottom: '16px' }} />
              <h3>Action item</h3>
              <p style={{ opacity: 0.8 }}>
                Analyze meeting notes to generate next steps, instantly.
              </p>
            </div>

            {/* Box 2 */}
            <div
              style={{
                flex: 1,
                backgroundColor: 'black',
                borderRadius: '12px',
                padding: '60px 24px 24px 32px',
                color: 'white',
              }}
            >
              <img src={Frame2Svg} alt="" style={{ width: '40px', marginBottom: '16px' }} />
              <h3>Summaries</h3>
              <p style={{ opacity: 0.8 }}>
                Write a summary in 30 seconds, not 30 minutes.
              </p>
            </div>

            {/* Box 3 */}
            <div
              style={{
                flex: 1,
                backgroundColor: 'black',
                borderRadius: '12px',
                padding: '60px 24px 24px 32px',
                color: 'white',
              }}
            >
              <img src={Frame3Svg} alt="" style={{ width: '40px', marginBottom: '16px' }} />
              <h3>Takeaways</h3>
              <p style={{ opacity: 0.8 }}>
                Surface what’s important from research, sales calls & more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;

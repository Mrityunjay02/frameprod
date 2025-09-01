import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowRight, Home } from 'lucide-react';

const HomePage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      overflowX: 'hidden',
      background: 'radial-gradient(circle at center, #FFFFFF 0%, #BDBEFF 50%, #8084FF 100%)',
      color: 'white',
      position: 'relative',
      left: 0,
      right: 0,
      margin: 0,
      padding: 0
    }}>
      {/* Navigation */}
      <div className="container mx-auto px-6" style={{
        paddingTop: '24px',
        paddingBottom: '24px'
      }}>
        <Navigation />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center" style={{
        height: 'calc(100vh - 88px)',
        padding: '20px 0',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        <h1 style={{
          color: '#132D85',
          fontSize: '64px',
          fontFamily: 'Inter',
          fontWeight: '600',
          lineHeight: '1.2',
          wordWrap: 'break-word',
          marginBottom: '1.5rem',
          maxWidth: '90%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Supercharge Your Business
        </h1>
        
        <p style={{
          color: 'black',
          fontSize: '20px',
          fontFamily: 'Inter',
          fontWeight: '500',
          lineHeight: '1.5',
          wordWrap: 'break-word',
          marginBottom: '2rem',
          maxWidth: '90%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Fueling Growth Through Tailored Solutions
        </p>
        
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
          {/* Main content */}
          <div className="relative flex flex-col items-center" style={{zIndex: 10, marginBottom: '40px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
              >
                Get in Touch
              </button>
              
              {/* Vector below button */}
              <div style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #1D4ED8, #6D28D9)',
                padding: '10px',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                <img 
                  src={require('../assets/home/Vector.svg')?.default || ''}
                  alt="Vector"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
              
              {/* Decorative elements - Right side */}
              <div style={{ 
                position: 'relative',
                width: '150px',
                height: '250px',
                marginTop: '20px',
                marginRight: '20px'
              }}>
                {/* Top image - Right side */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '500px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  zIndex: 2,
                }}>
                  <img 
                    src={require('../assets/home/Frame-1.png')}
                    alt="Frame 1"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      transformOrigin: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                
                {/* Icon at the end of black line */}
                <div style={{
                  position: 'absolute',
                  bottom: '150px',
                  right: '-500px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  zIndex: 10,
                  '@media (max-width: 1024px)': {
                    right: '-300px',
                    width: '50px',
                    height: '50px'
                  }
                }}>
                  <Link to="/payframe" style={{ display: 'block', width: '100%', height: '100%' }}>
                    <img 
                      src={require('../assets/home/Frame.png')}
                      alt="Frame"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        transformOrigin: 'center',
                        cursor: 'pointer'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Image in bottom right corner */}
            <div style={{
              position: 'absolute',
              right: '-150px',
              bottom: '-50px',
              width: '200px',
              height: '160px',
              zIndex: 5,
              overflow: 'hidden',
              '@media (max-width: 768px)': {
                width: '150px',
                height: '120px',
                right: '-100px',
                bottom: '-30px'
              }
            }}>
              <img 
                src={require('../assets/home/visual.png')}
                alt="Visual element"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
            </div>
            
            {/* Vector container */}
            {/* Left side image */}
            <div style={{ 
              position: 'absolute',
              left: '-19%',
              top: '-15%',
              transform: 'translateY(-50%)',
              width: '25%',
              maxWidth: '200px',
              zIndex: 1,
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <img 
                src={require('../assets/home/tours 2.png')} 
                alt="Tours"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />

            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setShowContactForm(false)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#2341C2] text-white rounded-3xl" onClick={e => e.stopPropagation()}>
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
                  <span className="block text-4xl sm:text-5xl md:text-6xl">Together, we shape the future</span>
                </h1>

                <ul className="space-y-7">
                  <li className="flex items-center gap-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                      <Mail className="h-5 w-5" />
                    </span>
                    <a href="mailto:framedigital.solutions@gmail.com" className="text-lg hover:underline underline-offset-4">
                      framedigital.solutions@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                      <Phone className="h-5 w-5" />
                    </span>
                    <a href="tel:+917294962001" className="text-lg hover:underline underline-offset-4">
                      +91 72949 62001
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="text-lg">204 2nd Floor, Paras Mall, Old, Purani Motihari Rd, Jaiprakash Nagar, Muzaffarpur, Bihar 843108  </span>
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
                <form onSubmit={(e) => {
                  e.preventDefault();
                  // Handle form submission here
                  setShowContactForm(false);
                }} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lastName" className="sr-only">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="w-full h-12 rounded-lg bg-white/5 border border-white/15 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="firstName" className="sr-only">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        className="w-full h-12 rounded-lg bg-white/5 border border-white/15 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full h-12 rounded-lg bg-white/5 border border-white/15 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full h-12 rounded-lg bg-white/5 border border-white/15 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      placeholder="Message"
                      rows={5}
                      className="w-full rounded-lg bg-white/5 border border-white/15 p-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5864FF] hover:bg-[#6B76FF] transition h-12 px-5 text-sm font-medium"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

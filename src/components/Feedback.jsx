import React from "react";
import sanjanaDp from '../assets/feedback/dp.svg';
import clientImage from '../assets/feedback/boy.jpg';

const Feedback = () => {
  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "none",
    borderBottom: "1px solid #777",
    background: "transparent",
    color: "#fff",
    outline: "none",
    fontSize: "14px"
  };

  return (
    <div style={{ width: "100vw", background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)", color: "#fff" }}>
      
      {/* ================= CLIENT FEEDBACK SECTION ================= */}
      <div style={{
        width: '100%',
        padding: '60px 40px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}>
        
        {/* Heading */}
        <h1 style={{
          color: '#F4F4F4',
          fontSize: '32px',
          fontFamily: 'Jacques Francois, serif',
          fontWeight: '400',
          marginBottom: '30px'
        }}>
          What Our Clients Say
        </h1>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
        }}>
          
          {/* Left Side - Client Card */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '220px'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              fontFamily: 'sans-serif'
            }}>
              <img 
                src={clientImage}
                alt="Jalen Kyle"
                style={{ 
                  width: '100%', 
                  height: '280px',
                  objectFit: 'cover',
                  display: 'block' 
                }}
              />

              {/* Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                padding: '10px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: '#fff'
              }}>
                <h3 style={{ margin: '0', fontSize: '15px' }}>Jalen Kyle</h3>
                <p style={{ margin: '2px 0 0 0', fontSize: '12px', opacity: 0.8 }}>
                  Founder of Mediahouse
                </p>
              </div>
            </div>
            
            <p style={{ 
              fontSize: '12px', 
              marginTop: '6px', 
              opacity: 0.7,
              color: '#F4F4F4',
              textAlign: 'center'
            }}>
              We supply clients across the entire globe with improved network connections.
            </p>
          </div>

          {/* Right Side */}
          <div style={{ flex: 1, color: '#fff' }}>
            <p style={{
              fontSize: '22px',
              fontWeight: '500',
              lineHeight: '1.5',
              marginBottom: '20px'
            }}>
              Awsmd focuses on the end-user and helps improve retention.
              <br />They excel in user experience and big-picture thinking.
            </p>

            <hr style={{ border: '0.5px solid #444', margin: '15px 0' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Client Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img 
                  src={sanjanaDp}
                  alt="Sanjana"
                  style={{ width: '55px', height: '55px', borderRadius: '50%' }}
                />
                <div>
                  <h4 style={{ margin: 0 }}>Sanjana Singh</h4>
                  <p style={{ fontSize: '13px', opacity: 0.7, margin: 0 }}>
                    Founder & CEO, Mountabu School
                  </p>
                </div>
              </div>

              {/* Arrows */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button style={{ background:'transparent', border:'none', color:'#fff', fontSize:'20px', cursor:'pointer' }}>←</button>
                <button style={{ background:'transparent', border:'none', color:'#fff', fontSize:'20px', cursor:'pointer' }}>→</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTACT FORM SECTION ================= */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "60px 40px",
        fontFamily: "Arial, sans-serif",
        minHeight: "80vh",
        boxSizing: 'border-box',
        gap: "30px"
      }}>
        
        {/* Left Section */}
        <div style={{ flex: 1, marginRight: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "400", marginBottom: "8px" }}>
            Have An Idea?
          </h3>
          <h1 style={{ fontSize: "42px", color: "#3B82F6", margin: "8px 0" }}>
            Drop us a <br /> line
          </h1>
          <p style={{ margin: "15px 0", fontSize: "14px" }}>
            Kumar manas8084@Gmail.Com 📋
          </p>
          
          {/* Social Buttons */}
          <div style={{ display: "flex", gap: "12px", marginTop: "15px" }}>
            <button style={{
              border: "1px solid #25D366",
              background: "rgba(37, 211, 102, 0.1)",
              padding: "8px 16px",
              color: "#25D366",
              cursor: "pointer",
              borderRadius: "6px",
            }}>
              WhatsApp
            </button>
            <button style={{
              border: "1px solid #0077B5",
              background: "rgba(0, 119, 181, 0.1)",
              padding: "8px 16px",
              color: "#0077B5",
              cursor: "pointer",
              borderRadius: "6px",
            }}>
              LinkedIn
            </button>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div style={{ flex: 1 }}>
          <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ flex: 1 }}>
                <label>Your Name*</label>
                <input type="text" style={inputStyle} />
              </div>
              <div style={{ flex: 1 }}>
                <label>Your Email*</label>
                <input type="email" style={inputStyle} />
              </div>
            </div>
            
            <div>
              <label>Tell Us About Your Project</label>
              <textarea style={{ ...inputStyle, height: "100px" }}></textarea>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={{ cursor: "pointer" }}>📎 Attach File</label>
              <span style={{ fontSize: "12px", color: "#aaa" }}>0/1000</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input type="checkbox" />
              <label>I Agree With Your <span style={{ color: "#3B82F6" }}>Privacy Policy</span></label>
            </div>
            
            <button style={{
              background: "#3B82F6",
              color: "#fff",
              border: "none",
              padding: "10px 22px",
              borderRadius: "24px",
              fontSize: "15px",
              cursor: "pointer",
              alignSelf: "flex-start"
            }}>
              ➝ Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

import React from 'react';
import Logo from '../assets/home/Vector.svg';

const Navigation = () => {
  return (
    <div className="w-full flex justify-between items-center">
      {/* Logo */}
      <div className="w-[69px] h-[71px] flex items-center justify-center flex-shrink-0">
        <img src={Logo} alt="Frame Digital Logo" className="h-12 w-auto" />
      </div>
      
      {/* Navigation Links - Centered */}
      <div className="flex-1 flex justify-center">
        <div className="px-2.5 py-1.5 bg-sky-100 rounded-[50px] border-2 border-sky-200 shadow-lg">
          <div className="flex justify-center items-center gap-12">
            {[
              { text: 'About Us', id: 'about' },
              { text: 'Products', id: 'products' },
              { text: 'Team', id: 'team' },
              { text: 'Contact Us', id: 'contact' }
            ].map(({ text, id }) => {
              const scrollToSection = (e) => {
                e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              };
              
              return (
                <a 
                  key={id}
                  href={`#${id}`}
                  onClick={scrollToSection}
                  className="text-sky-800 text-lg font-semibold leading-[120%] hover:text-sky-600 transition-colors duration-200"
                  style={{
                    fontFamily: 'Inter',
                  }}
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Right side spacer for alignment */}
      <div className="w-[50px] flex-shrink-0"></div>
    </div>
  );
};

export default Navigation;

"use client";

import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing with email:', email);
    }
  };

  return (
    <section 
      className="relative bg-cover bg-center" 
      style={{ backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/footer-30.jpg?')" }}
    >
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-0">
        <div className="flex justify-center lg:justify-end lg:min-h-[700px] lg:items-center">
          <div className="bg-[#212121] text-white p-8 sm:p-12 lg:p-16 w-full max-w-2xl lg:max-w-none lg:w-[45%]">
            <p className="font-body text-xs tracking-wider text-gray-400">
              Get the latest news about skincare tips and new products.
            </p>
            <h2 className="font-display text-4xl sm:text-5xl mt-2 font-normal uppercase leading-none">
              Hear more<br />from us
            </h2>

            <form onSubmit={handleSubmit} className="mt-12 w-full">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  className="peer w-full bg-transparent border-b border-gray-500 font-body text-sm text-white placeholder:text-gray-500/80 placeholder:uppercase placeholder:tracking-[0.2em] focus:border-white focus:outline-none pt-4 pb-3 transition-colors duration-300"
                  required
                />
              </div>
              
              <div className="mt-16 flex flex-col items-center text-center">
                <button 
                  type="submit"
                  className="group flex h-24 w-24 items-center justify-center rounded-full border border-gray-500 transition-all duration-300 hover:border-white hover:bg-white"
                  aria-label="Subscribe"
                >
                  <svg className="h-4 w-7 text-white transition-colors duration-300 group-hover:text-black" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.78166 0.211426L12.0001 4.14441L7.78166 7.78885" stroke="currentColor" strokeWidth="1.2"></path>
                    <path d="M11.5342 4.14429H0.333984" stroke="currentColor" strokeWidth="1.2"></path>
                  </svg>
                </button>
                <span className="mt-4 font-body text-[10px] uppercase tracking-[0.2em] text-white">
                  SUBSCRIBE
                </span>
              </div>
            </form>

            <div className="mx-auto mt-12 w-full max-w-xs border-t border-gray-700"></div>

            <p className="mx-auto mt-8 max-w-xs text-center font-body text-xs leading-relaxed text-gray-400">
              No spam, only quality articles to help you be more radiant. You can opt out anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
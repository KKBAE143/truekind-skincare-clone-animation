import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white">
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-black/40 z-10" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        >
          <source src="https://truekindskincare.com/hero.mp4" type="video/mp4" />
          <p>Your browser does not support the video element. Please consider updating to a modern browser.</p>
        </video>
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden w-full h-full object-cover"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        >
          <source src="https://truekindskincare.com/hero-m.mp4" type="video/mp4" />
          <p>Your browser does not support the video element. Please consider updating to a modern browser.</p>
        </video>
      </div>

      <div className="z-20 text-center flex flex-col items-center px-6 animate-in fade-in-0 duration-1000">
        <h1 className="font-light text-[48px] md:text-[64px] lg:text-[72px] leading-[1.15] text-white">
          <div className="font-[var(--font-body)]">
            <span className="font-[var(--font-display)]">True</span> to Oneself
          </div>
          <div className="font-[var(--font-body)]">
            kind to <span className="font-[var(--font-display)]">Nature</span>
          </div>
        </h1>
        <p className="font-[var(--font-body)] text-base md:text-lg max-w-[540px] mt-6 leading-relaxed">
          Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions!
        </p>
      </div>

      <Link
        href="/products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center bg-secondary text-primary rounded-full py-2.5 sm:py-3 pl-6 sm:pl-8 pr-2.5 sm:pr-3 font-medium text-xs sm:text-sm tracking-[0.05em] uppercase whitespace-nowrap animate-in fade-in-0 duration-1000 delay-300"
      >
        <span>Explore All Products</span>
        <div className="ml-4 sm:ml-6 bg-primary rounded-full p-2 flex-shrink-0">
          <ArrowRight className="text-primary-foreground w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </Link>
    </section>
  );
};

export default HeroSection;
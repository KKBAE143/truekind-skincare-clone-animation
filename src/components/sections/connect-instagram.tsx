import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const InstagramButton = () => (
  <a
    href="https://www.instagram.com/truekind.skin/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center gap-4 bg-background border border-border text-primary px-6 rounded-full h-[54px] w-[200px] transition-all duration-300 hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  >
    <span className="text-sm font-medium tracking-widest uppercase">Instagram</span>
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300">
      <Instagram size={16} />
    </div>
  </a>
);

const ConnectInstagram = () => {
  return (
    <section className="bg-background text-foreground py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-body text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider mb-12 md:mb-20">
          Connect <span className="font-semibold">With Us</span>
        </h2>
        
        {/* Mobile Layout: Flex Column */}
        <div className="md:hidden flex flex-col items-center text-center space-y-8">
          <div className="relative w-full max-w-xs group">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/connect-m-28.jpg?"
              alt="Woman with eyes closed"
              width={400}
              height={500}
              className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <p className="w-56 text-muted-foreground font-light text-base">
            Get the latest news about skincare tips and new products.
          </p>
          <h2 className="font-display text-5xl italic text-primary">
            on <span className="font-normal">instagram</span>
          </h2>
          <InstagramButton />
        </div>

        {/* Desktop Layout: Absolute Positioning */}
        <div className="hidden md:block relative h-[750px] lg:h-[800px]">
          <div className="absolute top-0 left-0 w-32 h-32 lg:w-40 lg:h-40 group">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/connect-1-26.jpg?"
              alt="Woman applying skincare"
              width={160}
              height={160}
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] lg:w-[45%] h-auto group">
             <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/connect-27.jpg?"
              alt="Woman with eyes closed in sunlight"
              width={550}
              height={700}
              className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <p className="absolute top-[50%] left-[10%] w-56 text-muted-foreground font-light text-lg">
            Get the latest news about skincare tips and new products.
          </p>

          <h2 className="absolute bottom-[20%] left-1/2 -translate-x-1/2 font-display text-6xl lg:text-7xl italic text-primary w-full text-center">
            on <span className="font-normal">instagram</span>
          </h2>

          <div className="absolute bottom-[15%] right-[15%] w-32 h-32 lg:w-40 lg:h-40 group">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/IMG_7461-29.jpg?"
              alt="Close up of two women's faces"
              width={160}
              height={160}
              className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <InstagramButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectInstagram;
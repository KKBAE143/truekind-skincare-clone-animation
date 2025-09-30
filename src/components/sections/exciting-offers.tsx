import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * NOTE: This component uses a custom animation 'float'.
 * For it to work, you need to define it in your tailwind.config.js:
 *
 * module.exports = {
 *   theme: {
 *     extend: {
 *       animation: {
 *         float: 'float 6s ease-in-out infinite',
 *       },
 *       keyframes: {
 *         float: {
 *           '0%, 100%': { transform: 'translateY(0px)' },
 *           '50%': { transform: 'translateY(-15px)' },
 *         },
 *       },
 *     },
 *   },
 * };
 */

const ExcitingOffers = () => {
  return (
    <section className="bg-light-pink-beige py-20 lg:py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="font-body text-5xl md:text-6xl text-dark-charcoal leading-tight">
              Exciting
              <br />
              offers <em className="font-display font-light">awaits</em>
            </h2>
            <p className="mt-6 text-lg text-muted-gray max-w-sm mx-auto lg:mx-0">
              Shop now to get a chance to win 2 extra products. Grab the offer before it ends.
            </p>
            <a
              href="https://truekindskincare.com/products"
              className="mt-12 inline-flex flex-col items-center group"
            >
              <div className="w-20 h-20 bg-dark-charcoal rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <span className="mt-4 font-body text-sm font-medium tracking-[0.15em] uppercase text-dark-charcoal">
                Shop Now
              </span>
            </a>
          </div>

          <div className="relative aspect-square order-1 lg:order-2">
            <div className="absolute inset-0 bg-golden-beige" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-gradient-start to-purple-gradient-end"
              style={{ clipPath: "polygon(0% 100%, 100% 40%, 100% 100%)" }}
            />
            <a
              href="https://truekindskincare.com/products"
              aria-label="Shop now"
              className="absolute top-[38%] right-[8%] w-14 h-14 bg-dark-charcoal rounded-full flex items-center justify-center z-20 transition-transform duration-300 hover:scale-110"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </a>
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 animate-[float_6s_ease-in-out_infinite]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/offer-22.jpg?"
                alt="Exciting offers on TrueKind skincare product"
                width={580}
                height={580}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcitingOffers;
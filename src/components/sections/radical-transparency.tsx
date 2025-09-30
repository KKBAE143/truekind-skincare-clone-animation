import Image from "next/image";
import { ArrowRight } from "lucide-react";

const RadicalTransparency = () => {
  return (
    <section className="relative bg-[#F7F7F7] py-24 sm:py-32 xl:py-40 overflow-x-clip">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1300px]">
        {/* Background Texture */}
        <div className="absolute top-0 left-0 lg:left-[-5%] w-full lg:w-[70%] h-full z-0 pointer-events-none">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/texture-20.png?"
            alt="Decorative texture"
            width={1000}
            height={1000}
            className="w-full h-full object-contain object-top opacity-50 mix-blend-multiply"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8">
          {/* LEFT CONTENT AREA */}
          <div className="relative">
            <p className="inline-block py-1.5 px-4 border border-zinc-400 rounded-full text-xs font-body uppercase tracking-[0.1em] text-zinc-600 mb-8">
              Ethos
            </p>

            <a
              href="/philosophy"
              className="absolute top-[4rem] md:top-[6rem] lg:top-[7rem] left-0 w-32 h-32 md:w-36 md:h-36 bg-primary text-primary-foreground rounded-full flex flex-col items-center justify-center text-center p-4 group z-20 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="font-body text-sm leading-tight pt-3">
                Our <br />
                <span className="font-display text-base">Philosophy</span>
              </div>
              <div className="absolute bottom-5">
                <div className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-full bg-transparent group-hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </a>
            
            <div className="pl-0 md:pl-28 lg:pl-0">
              <div className="relative">
                <h2 className="font-body text-[19vw] md:text-[14vw] lg:text-[130px] font-light text-foreground uppercase leading-none tracking-tighter">
                  Radical
                </h2>
                <h2 className="font-display text-[19vw] md:text-[14vw] lg:text-[130px] font-thin text-foreground leading-[0.8] tracking-tight ml-4">
                  Transparency.
                </h2>
              </div>
              <div className="relative text-right mr-0 md:mr-16 lg:mr-0 mt-2">
                <h2 className="font-body text-[19vw] md:text-[14vw] lg:text-[130px] font-light text-foreground uppercase leading-none tracking-tighter">
                  Hide
                </h2>
                <h2 className="font-display text-[19vw] md:text-[14vw] lg:text-[130px] font-thin text-foreground leading-[0.8] tracking-tight mr-4">
                  Nothing.
                </h2>
              </div>
            </div>

            {/* FEATURES LIST */}
            <div className="mt-28 sm:mt-32 xl:mt-48 max-w-lg ml-auto pr-0 md:pr-10 lg:pr-0">
              <div className="space-y-12">
                {/* Feature 1 */}
                <div className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border border-border group-hover:border-zinc-400 transition-colors flex items-center justify-center">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/svgs/icon-highest-standards-5.svg?"
                      alt="Transparent Formulas Icon"
                      width={32}
                      height={32}
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div>
                    <h3 className="font-body text-xl lg:text-2xl text-foreground font-medium">
                      100% Transparent Formulas
                    </h3>
                    <h5 className="font-display text-lg lg:text-xl text-foreground mt-1">
                      Highest Standards.
                    </h5>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                      We formulate to the highest standards of efficacy and safety – using only proven, verified ingredients in bio-compatible bases; and free from over 1800 questionable ingredients
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border border-border group-hover:border-zinc-400 transition-colors flex items-center justify-center">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/svgs/icon-real-results-6.svg?"
                      alt="Verified Ingredients Icon"
                      width={32}
                      height={32}
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div>
                    <h3 className="font-body text-xl lg:text-2xl text-foreground font-medium">
                      Only Verified Ingredients
                    </h3>
                    <h5 className="font-display text-lg lg:text-xl text-foreground mt-1">
                      Real Results.
                    </h5>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                      Skin care packed with anti oxidants, skin replenishing and skin restoring agents in stable pH levels that don’t promise miracles, but deliver real results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT IMAGE AREA */}
          <div className="hidden lg:block relative lg:-mr-24 xl:-mr-32">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/175A3642-3-741-21.jpg?"
              alt="A woman with glowing skin"
              width={741}
              height={1112}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image for mobile/tablet */}
          <div className="lg:hidden mt-20">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/175A3642-3-741-21.jpg?"
              alt="A woman with glowing skin"
              width={741}
              height={1112}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadicalTransparency;
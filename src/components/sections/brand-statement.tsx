import Image from 'next/image';
import { Search, FileCheck2, FlaskConical, Leaf as LeafIcon } from 'lucide-react';

// Centralized data for features for easier management
const features = [
  {
    icon: Search,
    title: 'Clean, Beyond Reproach',
    description: 'Truly clean with only verified ingredients; and free from over 1800 questionable ingredients. Because what you put on your skin matters.',
    desktopClassName: 'absolute top-[28%] left-[10%] xl:left-[15%]',
  },
  {
    icon: FileCheck2,
    title: 'Radical Transparency',
    description: 'No black boxes, nothing to hide, we disclose our full formulas, so you will never have to guess what\'s in it and how much.',
    desktopClassName: 'absolute top-[12%] left-[45%] xl:left-[48%]',
  },
  {
    icon: FlaskConical,
    title: 'Potent & Multi Tasking',
    description: 'Our formulas are chock-a-block with actives, anti oxidants, skin restoring agents backed by dermal science that aim to deliver real results.',
    desktopClassName: 'absolute top-[68%] left-[20%] xl:left-[25%]',
  },
  {
    icon: LeafIcon,
    title: 'Conscious & Responsible',
    description: 'Peta Certified Vegan and Cruelty Free. Our products are always housed in responsible packaging and made sustainably.',
    desktopClassName: 'absolute top-[60%] left-[58%] xl:left-[62%]',
  },
];

// SVG component for the decorative arrow on desktop
const DesktopArrow = () => (
  <svg
    width="443" height="454" viewBox="0 0 443 454" fill="none"
    className="absolute top-[-2%] left-[30%] xl:left-[35%] w-[443px] h-[454px] text-gray-300 pointer-events-none"
  >
    <path d="M1.5 138.5C1.5 284 219.5 450 439.5 452.5" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

// SVG component for the decorative arrow on mobile
const MobileArrow = () => (
    <svg
      width="122" height="195" viewBox="0 0 122 195" fill="none"
      className="absolute right-0 top-[20%] w-[122px] h-[195px] text-gray-300 pointer-events-none"
    >
      <path d="M1 92C1 133.5 60.5 193 120 194" stroke="currentColor" strokeWidth="1"/>
    </svg>
);

// Component for the feature items
const FeatureItem = ({ icon: Icon, title, description, className }: { icon: React.ElementType; title: string; description: string; className?: string }) => (
    <div className={`w-[280px] p-6 text-center md:text-left bg-white rounded-xl border border-border/80 shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`}>
        <div className="flex justify-center md:justify-start mb-3">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-background">
                <Icon className="w-6 h-6 text-foreground" />
            </div>
        </div>
        <h3 className="font-body font-medium text-[17px] text-primary mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
);

// Main BrandStatement component
const BrandStatement = () => {
    return (
        <section id="brand-statement" className="bg-background py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Desktop Layout */}
                <div className="hidden md:block relative h-[850px]">
                    <div className="absolute top-8 left-0 max-w-lg z-10">
                        <h2 className="font-body text-5xl xl:text-[3.5rem] font-light text-primary leading-tight">
                            CLEAN, CONSCIOUS, <br />
                            PERFORMANCE{' '}
                            <span className="font-display text-6xl xl:text-7xl italic relative inline-block">
                                skincare.
                                <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-primary" />
                            </span>
                        </h2>
                        <p className="mt-6 text-base text-muted-foreground max-w-sm">
                            Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions!
                        </p>
                    </div>

                    <DesktopArrow />

                    <div className="absolute top-[20%] right-0 w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] pointer-events-none">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-warm-beige rounded-full transform -translate-x-10 translate-y-10"></div>
                            <div className="absolute top-[10%] left-[15%] w-[210px] h-[210px] xl:w-[280px] xl:h-[280px]">
                                <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
                                    <Image 
                                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/empress-2.png?"
                                        alt="Empress"
                                        layout="fill"
                                        objectFit="cover"
                                        className="scale-125"
                                    />
                                </div>
                            </div>
                            <div className="absolute top-[5%] right-[5%] w-32 h-auto -rotate-12">
                                <Image 
                                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/leaf-1.png?"
                                    alt="Leaf"
                                    width={128}
                                    height={128}
                                    className="drop-shadow-md"
                                />
                            </div>
                            <div className="absolute bottom-[20%] left-[5%] w-28 h-28 transform rotate-12">
                                <div className="relative w-full h-full rounded-full overflow-hidden shadow-md">
                                    <Image 
                                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ingredients-clip-3.jpg?"
                                        alt="Ingredients"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {features.map((feature, index) => (
                        <FeatureItem 
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            className={feature.desktopClassName}
                        />
                    ))}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden relative">
                    <div className="text-center">
                        <h2 className="font-body text-4xl font-light text-primary leading-tight">
                            CLEAN, CONSCIOUS, <br />
                            PERFORMANCE{' '}
                            <span className="font-display text-5xl italic relative inline-block">
                                skincare.
                                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-3/4 h-[1px] bg-primary" />
                            </span>
                        </h2>
                        <p className="mt-6 text-base text-muted-foreground mx-auto max-w-sm">
                            Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions!
                        </p>
                    </div>

                    <div className="relative mt-16 flex justify-center items-center h-64">
                        <div className="absolute inset-0">
                          <MobileArrow />
                        </div>
                        <div className="absolute w-[260px] h-[260px] bg-warm-beige rounded-full"></div>
                        <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg z-10">
                            <Image 
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/empress-2.png?"
                                alt="Empress"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                         <div className="absolute top-0 right-8 w-24 h-auto -rotate-12 z-20">
                            <Image 
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/leaf-1.png?"
                                alt="Leaf"
                                width={96}
                                height={96}
                                className="drop-shadow-md"
                            />
                        </div>
                    </div>
                    
                    <div className="mt-12 grid grid-cols-1 gap-6">
                        {features.map((feature, index) => (
                            <FeatureItem 
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                className="w-full max-w-sm mx-auto"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStatement;
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const valuesData = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/svgs/icon-clean-beyond-reproach-1.svg?",
    title: "Clean, Beyond Reproach",
    description: "Truly clean with only verified ingredients; and free from over 1800 questionable ingredients. Because what you put on your skin matters.",
    alt: "Clean, Beyond Reproach icon",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/svgs/icon-radical-transparency-2.svg?",
    title: "Radical Transparency",
    description: "No black boxes, nothing to hide, we disclose our full formulas, so you will never have to guess what's in it and how much.",
    alt: "Radical Transparency icon",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/svgs/icon-potent-multi-tasking-3.svg?",
    title: "Potent & Multi Tasking",
    description: "Our formulas are chock-a-block with actives, anti oxidants, skin restoring agents backed by dermal science that aim to deliver real results.",
    alt: "Potent & Multi Tasking icon",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/svgs/icon-conscious-responsible-4.svg?",
    title: "Conscious & Responsible",
    description: "Peta Certified Vegan and Cruelty Free. Our products are always housed in responsible packaging and made sustainably.",
    alt: "Conscious & Responsible icon",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

interface ValueItemProps {
  iconSrc: string;
  title: string;
  description: string;
  alt: string;
}

const ValueItem = ({ iconSrc, title, description, alt }: ValueItemProps) => (
  <motion.div 
    variants={itemVariants}
    className="flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-[1.03]"
  >
    <div className="mb-6 flex-shrink-0 w-[88px] h-[88px] rounded-full border border-border flex items-center justify-center">
      <Image src={iconSrc} alt={alt} width={40} height={40} className="w-10 h-10 object-contain" />
    </div>
    <h3 className="font-display text-[22px] font-medium text-primary mb-3">
      {title}
    </h3>
    <p className="font-body text-[15px] text-muted-foreground leading-relaxed max-w-[280px]">
      {description}
    </p>
  </motion.div>
);

const ValuesGrid = () => {
  return (
    <section id="values" className="bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40">

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-left md:text-left mb-16 md:mb-[120px] max-w-lg"
        >
          <h2 className="text-[40px] leading-none md:text-[48px] font-normal font-body text-primary">
            Clean, Conscious,
            <br className="block" />
            Performance <span className="font-display italic">skincare.</span>
          </h2>
          <p className="text-muted-foreground text-[15px] mt-6 max-w-sm">
            Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {valuesData.map((value, index) => (
            <ValueItem
              key={index}
              {...value}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesGrid;
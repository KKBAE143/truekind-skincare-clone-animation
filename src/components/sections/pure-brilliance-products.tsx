"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Plus } from 'lucide-react';

const products = [
  {
    name: "AHA Brightening Exfoliant Cleanser/Face Wash",
    href: "/products/aha-brightening-exfoliant-cleanserface-wash",
    image1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurDj7VsGrYSvh0W_1-5.jpg?",
    image2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurDkbVsGrYSvh0X_2-6.jpg?",
    price: "₹899",
  },
  {
    name: "Bio Exfoliant Brightening Sleeping Mask",
    href: "/products/bio-exfoliant-brightening-sleeping-mask",
    image1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurMbbVsGrYSviXa_1-7.jpg?",
    image2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurMb7VsGrYSviXc_2-8.jpg?",
    price: "₹899",
  },
  {
    name: "AHA Brightening Exfoliant Toner/Essence",
    href: "/products/aha-brightening-exfoliant-toneressence",
    image1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurL27VsGrYSviVl_1-9.jpg?",
    image2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurL3bVsGrYSviVo_2-10.jpg?",
    price: "₹899",
  },
];

interface ProductCardProps {
  product: typeof products[0];
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={product.href} className="group relative flex-shrink-0 w-[80vw] sm:w-[400px] lg:w-[25.4vw]" aria-label={product.name}>
      <div className="bg-[#F2E6D5] rounded-lg p-5 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <p className="bg-black/10 text-black text-xs font-medium px-3 py-1 rounded-full">Pure Brilliance</p>
          <button className="w-7 h-7 bg-black/5 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <Plus className="w-4 h-4 text-black" />
          </button>
        </div>
        <div className="relative aspect-square w-full -mx-1 self-center mb-auto">
           <Image
            src={product.image1}
            alt={product.name}
            fill
            className="object-contain transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
          />
          <Image
            src={product.image2}
            alt={`${product.name} - before and after`}
            fill
            className="object-contain transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-dark-charcoal text-base font-medium leading-tight">{product.name}</h3>
          <p className="text-dark-charcoal mt-2">{product.price}</p>
        </div>
      </div>
    </Link>
  );
};

const ArrowCurveIcon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-[5vw] hidden lg:block">
    <path d="M1 9.5C1 14.1944 4.80558 18 9.5 18C14.1944 18 18 14.1944 18 9.5C18 4.80558 14.1944 1 9.5 1" stroke="black" strokeWidth="0.5"/>
    <path d="M9.5 0V1L8.5 1V0H9.5Z" fill="black"/>
    <path d="M10 1H9V0H10V1Z" fill="black"/>
  </svg>
);


const PureBrillianceProducts = () => {
  return (
    <section id="explore" className="bg-white py-24 sm:py-32">
      <h2 className="text-center font-display text-5xl md:text-7xl lg:text-[5.4vw] leading-none text-dark-charcoal">
        Explore <br />
        <span className="font-serif">pure potency</span>
      </h2>
      <div className="container relative mt-8 hidden lg:block">
        <ArrowCurveIcon />
      </div>
      <div className="mt-16 lg:mt-[10vw] grid grid-cols-1 lg:grid-cols-2 lg:items-start">
        <div className="relative w-full h-[50vh] lg:h-full lg:min-h-[900px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/explore-1-4.jpg?"
            alt="Product Highlight"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="lg:pl-[5vw] lg:pt-[8vw] lg:pr-[2vw] p-6 sm:p-10">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-display text-5xl md:text-6xl lg:text-[5.2vw] leading-none text-dark-charcoal ">
                Pure<br />
                <span className="font-serif">Brilliance</span>
              </h3>
              <Link href="/products" className="text-dark-charcoal underline mt-4 inline-block hover:text-accent">
                Products
              </Link>
            </div>
            <Link href="/products" aria-label="View Products" className="hidden lg:block relative w-20 h-20 rounded-full border border-white/50 text-white group mt-10 mr-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
          <div className="mt-12">
            <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
          <p className="mt-12 text-muted-foreground max-w-sm text-lg">
            Stay glowing and healthy without having to think about it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PureBrillianceProducts;
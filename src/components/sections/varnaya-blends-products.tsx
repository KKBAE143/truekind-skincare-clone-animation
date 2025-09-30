"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  href: string;
  category: string;
  image1: string;
  image2: string;
  price: string;
}

const products: Product[] = [
  {
    name: "Rosehip & Bakuchiol Skin Perfecting Oil",
    href: "/products/rosehip-bakuchiol-skin-perfecting-oil",
    category: "Varnaya Blends",
    image1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurQ9LVsGrYSvimZ_1-12.jpg?",
    image2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurQ9rVsGrYSvimb_2-13.jpg?",
    price: "₹899",
  },
  {
    name: "Manjistha and Saffron Moisture Gel",
    href: "/products/manjistha-and-saffron-moisture-gel",
    category: "Varnaya Blends",
    image1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurQjbVsGrYSvik0_1-14.jpg?",
    image2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurQj7VsGrYSvik3_2-15.jpg?",
    price: "₹899",
  },
  {
    name: "Acne Calming Herb Rescue Mask",
    href: "/products/acne-calming-herb-rescue-mask",
    category: "Varnaya Blends",
    image1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurNf7VsGrYSviaK_1-16.jpg?",
    image2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurNgbVsGrYSviaN_2-17.jpg?",
    price: "₹899",
  },
  {
    name: "Kumkumadi Radiance Facial Oil",
    href: "/products/kumkumadi-radiance-facial-oil",
    category: "Varnaya Blends",
    image1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurP_7VsGrYSvijF_1-18.jpg?",
    image2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/ZurQAbVsGrYSvijG_2-19.jpg?",
    price: "₹899",
  },
];

const ArrowIcon = () => (
  <svg className="h-2 w-3.5" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2 4.25H0" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9.2 1L12.2 4L9.2 7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ProductCard = ({ product }: { product: Product }) => (
  <Link href={product.href} className="group block w-64 flex-shrink-0 md:w-72">
    <div className="relative">
      <p className="absolute top-4 left-4 z-10 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
        {product.category}
      </p>
      <div className="aspect-[0.75] overflow-hidden rounded-lg bg-[#F2E6D5]">
        <div className="relative h-full w-full">
          <Image
            src={product.image1}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
          />
          <Image
            src={product.image2}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="absolute inset-0 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </div>
    </div>
    <div className="mt-4 text-left">
      <h4 className="font-body text-base font-medium text-primary">{product.name}</h4>
      <p className="mt-1 font-body text-base text-primary">{product.price}</p>
    </div>
  </Link>
);

const VarnayaBlendsProducts = () => {
    // A simple utility to hide scrollbars, add to your global CSS if preferred
    const noScrollbarStyle = `
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    `;
  
  return (
    <section>
        <style>{noScrollbarStyle}</style>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-white px-6 py-16 text-primary sm:px-12 lg:order-1 lg:px-20 lg:py-28 xl:px-28">
          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
            <div className="relative">
              <h3 className="font-display text-4xl leading-tight sm:text-5xl">
                Varnaya
                <br />
                <span className="font-serif">Blends</span>
              </h3>
              <Link href="/products" aria-label="Products" className="absolute -top-2 right-0 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition-transform hover:scale-105 sm:h-20 sm:w-20 lg:top-0">
                <ArrowIcon />
              </Link>
            </div>
            
            <div className="mt-12 -mx-6 sm:-mx-12 lg:-mx-20 xl:-mx-28">
              <div className="no-scrollbar flex space-x-6 overflow-x-auto px-6 pb-4 sm:px-12 lg:px-20 xl:px-28">
                {products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </div>
            
            <p className="mt-10 max-w-sm font-body text-sm uppercase tracking-widest text-muted-foreground">
              Stay glowing and healthy without having to think about it.
            </p>
          </div>
        </div>

        <div className="relative min-h-[60vh] lg:order-2 lg:min-h-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/explore-2-11.jpg?"
            alt="Varnaya Blends product lifestyle"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VarnayaBlendsProducts;
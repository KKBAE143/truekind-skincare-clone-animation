"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Instagram, Twitter, Dribbble, Facebook } from 'lucide-react';

const TrueKindLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="136" height="28" viewBox="0 0 136 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9.135 23.414V4.78h3.313v18.633H9.135Z"></path>
    <path d="M15.545 23.414V4.78h11.233v2.88H18.858v4.996h7.327v2.865h-7.327v5.013h7.92v2.88h-11.233Z"></path>
    <path d="M36.19 19.348h-7.794l-1.22 4.066h-3.487L31.5 4.78h3.805l7.81 18.634h-3.488l-1.22-4.066Zm-1.53-2.88-2.58-8.627-2.58 8.627h5.16Z"></path>
    <path d="M49.932 23.414h-3.329V4.78h3.329v18.634Z"></path>
    <path d="M60.36 23.414h-3.44l-5.1-7.48v7.48H48.5V4.78h3.328l5.087 7.558V4.78H60.36v18.634Z"></path>
    <path d="M66.45 23.414V4.78h3.313v18.633H66.45Z"></path>
    <path d="M72.86 23.414V4.78h11.233v2.88H76.173v4.996h7.327v2.865h-7.327v5.013h7.92v2.88H72.86Z"></path>
    <path d="M96.062 14.1c0 5.862-3.912 9.314-9.98 9.314-6.07 0-9.98-3.452-9.98-9.314 0-5.86 3.91-9.313 9.98-9.313 6.068 0 9.98 3.452 9.98 9.313Zm-3.313 0c0-4.08-2.626-6.433-6.667-6.433-4.04 0-6.667 2.353-6.667 6.432 0 4.08 2.627 6.434 6.667 6.434 4.041 0 6.667-2.353 6.667-6.433Z"></path>
    <path d="M109.804 23.414h-3.329V4.78h3.329v18.634Z"></path>
    <path d="M135.534 19.348h-7.794l-1.22 4.066h-3.488l7.81-18.634h3.805l7.81 18.634h-3.488l-1.22-4.066Zm-1.53-2.88-2.58-8.627-2.58 8.627h5.16Z"></path>
  </svg>
);

const CartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14.072 17.5H.813a.813.813 0 0 1-.813-.813V5.552c0-.449.364-.813.813-.813h13.259c.449 0 .813.364.813.813V16.687a.813.813 0 0 1-.813.813Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M4.09 6.819V3.535C4.09 1.86 5.617.5 7.42.5c1.802 0 3.328 1.36 3.328 3.035v3.284" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15.834 17.5H.167a.167.167 0 0 1-.167-.167V15.5c0-2.333 1.9-4.333 4.233-4.333h7.534c2.333 0 4.233 2 4.233 4.333v1.833c0 .092-.075.167-.167.167Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M8 7.333a3.667 3.667 0 1 0 0-7.333 3.667 3.667 0 0 0 0 7.333Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 1.00003L20 20" stroke="currentColor" strokeWidth="1.5"></path>
    <path d="M20 1.00003L1 20" stroke="currentColor" strokeWidth="1.5"></path>
  </svg>
);

const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.5 7.5L12.5 4L8.5 0.5" stroke="currentColor"></path>
    <path d="M12.5 4H-4.76837e-07" stroke="currentColor"></path>
  </svg>
);

const navItems = [
  { name: 'Shop', href: '/products' },
  { name: 'Philosophy', href: '/philosophy' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Journal', href: '/journal' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY && !isMenuOpen) {
          setIsNavVisible(false);
        } else {
          setIsNavVisible(true);
        }
      } else {
        setIsScrolled(false);
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        id="header"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 text-foreground",
          isScrolled && "bg-background/80 backdrop-blur-sm shadow-sm",
          !isNavVisible && "-translate-y-full"
        )}
      >
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center h-10">
            <div className="flex-1 flex justify-start md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu" className="relative w-6 h-6 z-20">
                <span className={cn("block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out top-1/2", isMenuOpen ? "rotate-45" : "-translate-y-1.5")}></span>
                <span className={cn("block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out top-1/2", isMenuOpen ? "-rotate-45" : "translate-y-1.5")}></span>
              </button>
            </div>
            
            <div className="flex-1 flex justify-center md:justify-start">
              <Link href="/" aria-label="Truekind homepage">
                <TrueKindLogo className="h-6 md:h-7 w-auto text-primary" />
              </Link>
            </div>

            <div className="hidden md:flex flex-1 justify-center">
              <ul className="flex items-center space-x-10">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-base font-body font-medium hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-1 items-center justify-end space-x-4">
              <ul className="hidden md:flex items-center space-x-5 text-sm font-body tracking-wider">
                 <li><span>0269</span></li>
                 <li><span>05789</span></li>
              </ul>
              
              <Sheet>
                <SheetTrigger asChild>
                  <button aria-label="Open cart">
                    <CartIcon className="h-5 w-auto" />
                  </button>
                </SheetTrigger>
                <SheetContent className="bg-sidebar w-[90vw] sm:w-[480px] p-0 flex flex-col border-l-sidebar-border">
                  <SheetHeader className="p-6 border-b border-sidebar-border">
                    <div className="flex justify-between items-center">
                       <SheetTitle className="font-body text-base tracking-[0.15em] uppercase text-sidebar-foreground">Cart (0)</SheetTitle>
                      <SheetClose>
                        <CloseIcon className="h-4 w-4 text-sidebar-foreground" />
                        <span className="sr-only">Close</span>
                      </SheetClose>
                    </div>
                  </SheetHeader>
                  <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
                    <p className="font-body text-xl text-sidebar-foreground mb-8">
                      Your cart is <br /> <span className="font-display text-4xl italic font-light">empty</span>
                    </p>
                    <Link href="/products" className="group flex items-center space-x-3 text-sm font-bold uppercase tracking-widest text-sidebar-foreground">
                      <span>Browse Products</span>
                      <span className="relative w-4 h-2 overflow-hidden">
                        <ArrowIcon className="absolute top-0 left-0 transition-transform duration-300 group-hover:translate-x-4" />
                        <ArrowIcon className="absolute top-0 -left-full transition-transform duration-300 group-hover:left-0" />
                      </span>
                    </Link>
                  </div>
                  <SheetFooter className="bg-background p-6 border-t border-border">
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-4 font-body text-foreground">
                        <p>Subtotal</p>
                        <p>₹0.00</p>
                      </div>
                      <Button variant="default" className="w-full h-14 bg-primary text-primary-foreground rounded-lg group text-base tracking-wider font-semibold">
                        <span className="flex items-center justify-between w-full">
                          <span>Continue to checkout</span>
                           <span className="relative w-4 h-2 overflow-hidden">
                            <ArrowIcon className="absolute top-1/2 -translate-y-1/2 left-0 transition-transform duration-300 group-hover:translate-x-4 stroke-primary-foreground" />
                            <ArrowIcon className="absolute top-1/2 -translate-y-1/2 -left-full transition-transform duration-300 group-hover:left-0 stroke-primary-foreground" />
                          </span>
                        </span>
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-4 px-4">Shipping, taxes, and discount codes are calculated at checkout</p>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              <div className="hidden md:block w-px h-6 bg-border mx-2"></div>
              
              <Link href="/login" aria-label="Login" className="hidden md:block">
                <UserIcon className="h-5 w-auto" />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className={cn(
        "fixed inset-0 z-10 bg-background transition-opacity duration-500 md:hidden",
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}>
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
            <ul className="flex flex-col space-y-8 mt-16">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} onClick={toggleMenu} className="text-4xl font-display font-medium text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
               <li className="pt-6">
                  <Link href="/login" onClick={toggleMenu} className="text-xl font-body text-primary">
                    Sign Up / Login
                  </Link>
                </li>
            </ul>
            <div className="absolute bottom-10 text-center">
              <p className="text-xs uppercase text-muted-foreground mb-4 font-body tracking-widest">Contact Us</p>
              <ul className="text-base font-body text-primary space-y-2 mb-8">
                <li><a href="mailto:truekind@seventurns.in" className="hover:underline">truekind@seventurns.in</a></li>
                <li><a href="tel:+918939997071" className="hover:underline">+91 89399 97071</a></li>
              </ul>
              <div className="flex justify-center space-x-6">
                <a href="https://www.instagram.com/truekind.skin/" aria-label="Instagram"><Instagram className="h-6 w-6 text-primary"/></a>
                <a href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-primary"/></a>
                <a href="#" aria-label="Dribbble"><Dribbble className="h-6 w-6 text-primary"/></a>
                <a href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-primary"/></a>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
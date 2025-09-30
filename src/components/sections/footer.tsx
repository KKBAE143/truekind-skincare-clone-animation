import Link from 'next/link';
import type { FC } from 'react';

const TrueKindLogo: FC = () => (
  <Link href="/" className="font-display text-3xl font-light text-primary">
    true.Kind.
  </Link>
);

const Footer: FC = () => {
  return (
    <footer className="bg-background font-body text-foreground">
      <div className="container mx-auto px-6 pt-16 sm:pt-24 pb-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Explore</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><Link href="/products" className="text-base text-foreground hover:underline">Shop</Link></li>
                <li><Link href="/philosophy" className="text-base text-foreground hover:underline">Philosophy</Link></li>
                <li><Link href="/gallery" className="text-base text-foreground hover:underline">Gallery</Link></li>
                <li><Link href="/journal" className="text-base text-foreground hover:underline">Journal</Link></li>
                <li><Link href="/login" className="text-base text-foreground hover:underline">Sign Up/Login</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Follow Us</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="https://www.instagram.com/truekind.skin/" target="_blank" rel="noopener noreferrer" className="text-base text-foreground hover:underline">Instagram</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-base text-foreground hover:underline">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Contact Us</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="mailto:tk@brandsofobia.com" className="text-base text-foreground hover:underline">tk@brandsofobia.com</a></li>
                <li><a href="tel:1111-2222-3333" className="text-base text-foreground hover:underline">1111-2222-3333</a></li>
              </ul>
            </div>
          </div>
          {/* The newsletter component would occupy lg:col-span-5 */}
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-8">
          <div className="space-y-4">
            <TrueKindLogo />
            <p className="text-sm text-muted-foreground max-w-[320px]">
              Clean, Conscious, Clinical Skincare.<br />
              Honest products that truly work,
            </p>
            <p className="text-xs text-muted-foreground">© 2023 TrueKind, All Rights Reserved</p>
          </div>
          <div className="flex-shrink-0 pt-2">
            <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-x-6 gap-y-2">
              <li><a href="#" className="text-xs text-muted-foreground hover:underline">Disclaimer</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:underline">Credits</a></li>
              <li className="text-xs text-muted-foreground">
                Website by:{' '}
                <a href="#" className="hover:underline">
                  abhishek &amp; reksa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
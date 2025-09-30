"use client";

import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import BrandStatement from "@/components/sections/brand-statement";
import ValuesGrid from "@/components/sections/values-grid";
import PureBrillianceProducts from "@/components/sections/pure-brilliance-products";
import VarnayaBlendsProducts from "@/components/sections/varnaya-blends-products";
import RadicalTransparency from "@/components/sections/radical-transparency";
import ExcitingOffers from "@/components/sections/exciting-offers";
import CleanJournal from "@/components/sections/clean-journal";
import ConnectInstagram from "@/components/sections/connect-instagram";
import NewsletterSignup from "@/components/sections/newsletter-signup";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BrandStatement />
      <ValuesGrid />
      <PureBrillianceProducts />
      <VarnayaBlendsProducts />
      <RadicalTransparency />
      <ExcitingOffers />
      <CleanJournal />
      <ConnectInstagram />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
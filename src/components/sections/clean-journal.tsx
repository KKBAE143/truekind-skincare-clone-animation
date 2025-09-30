import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const featuredArticle = {
  href: "https://truekindskincare.com/journal/beauty-secrets-from-around-the-world-rituals-and-ingredients-you-need-to-try",
  imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/Z-Ac73dAxsiBvxdO_elegant-glass-dropper-bottles-23.jpg?",
  imgAlt: "Beauty Secrets from Around the World: Rituals and Ingredients You Need to Try",
  title: "Beauty Secrets from Around the World: Rituals and Ingredients You Need to Try",
  excerpt: "Drawing from our rich ayurvedic legacy of over 30 years and embracing dermal science, we aim to create transparent skincare that is incredibly effective, safe and without harming the environment or the planet.",
  date: "8 Feb 2025"
};

const smallArticles = [
  {
    href: "https://truekindskincare.com/journal/your-skincare-and-makeup-routine-impacts-your-well-being",
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/Z-6shXdAxsiBwSng_journal-2-24.jpg?",
    imgAlt: "Your Skincare and Makeup Routine Impacts Your Well-Being",
    title: "Your Skincare and Makeup Routine Impacts Your Well-Being",
    date: "20 Dec 2024"
  },
  {
    href: "https://truekindskincare.com/journal/how-to-make-your-routine-more-eco-friendly",
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4f139eff-3230-4642-bb14-786a115c9a59-truekindskincare-com/assets/images/Z-6uzHdAxsiBwSpf_journal-3-25.jpg?",
    imgAlt: "How to Make Your Routine More Eco-Friendly",
    title: "How to Make Your Routine More Eco-Friendly",
    date: "25 Jan 2025"
  }
];

interface ArticleCardProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  date: string;
}

const SmallArticleCard = ({ href, imgSrc, imgAlt, title, date }: ArticleCardProps) => (
  <Link href={href} className="group block bg-secondary text-primary rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1.5">
    <Image src={imgSrc} alt={imgAlt} width={580} height={260} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-display text-2xl font-medium leading-tight mb-4 flex-grow" style={{ minHeight: '4rem' }}>
        {title}
      </h3>
      <div className="flex justify-between items-center text-sm font-body text-muted-foreground mt-4">
        <span>{date}</span>
        <span className="font-medium text-primary underline underline-offset-4 decoration-primary/50 group-hover:decoration-primary transition-colors">
          Read more
        </span>
      </div>
    </div>
  </Link>
);


const CleanJournal = () => {
  return (
    <section className="bg-primary text-primary-foreground py-24 sm:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          
          {/* Left: Featured Article */}
          <Link href={featuredArticle.href} className="group block bg-secondary text-primary rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 h-full">
            <div className="relative">
              <Image src={featuredArticle.imgSrc} alt={featuredArticle.imgAlt} width={580} height={386} className="w-full object-cover" style={{ aspectRatio: '1.5 / 1' }}/>
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Featured
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="font-display text-3xl font-medium leading-snug mb-3">
                {featuredArticle.title}
              </h3>
              <p className="font-body text-base text-muted-foreground mb-6 flex-grow">
                {featuredArticle.excerpt}
              </p>
              <div className="flex justify-between items-center text-sm font-body text-muted-foreground mt-auto">
                <span>{featuredArticle.date}</span>
                <span className="font-medium text-primary underline underline-offset-4 decoration-primary/50 group-hover:decoration-primary transition-colors">
                  Read more
                </span>
              </div>
            </div>
          </Link>

          {/* Right: Other Articles & Title */}
          <div className="flex flex-col">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-5xl font-normal leading-none" style={{ fontFamily: 'var(--font-body)' }}>
                <span className="font-display italic text-6xl">clean</span>
                <span className="font-bold uppercase tracking-[0.2em] ml-1"> Journal</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-sm mx-auto lg:mx-0">
                Healty tips on skincare, regimen and overall a better lifestyle.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {smallArticles.map((article) => (
                <SmallArticleCard key={article.href} {...article} />
              ))}
            </div>

            <Link href="/journal" className="group self-center lg:self-start mt-12 lg:mt-16 text-center no-underline">
              <div className="relative flex items-center justify-center w-28 h-28 border border-white/50 group-hover:border-white rounded-full transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-45" />
              </div>
              <p className="mt-4 uppercase text-xs sm:text-sm tracking-widest font-medium">
                See all
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanJournal;
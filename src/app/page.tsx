import "use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Star, Heart } from "lucide-react";

const assetMap = [{"id":"hero","url":"https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"High-End Gaming PC Interior with Colorful RGB Lights"},{"id":"feature-1-image","url":"https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up of a hand with a pen analyzing data on colorful bar and line charts on paper."},{"id":"feature-2-image","url":"https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two professionals in business attire engage in a thoughtful discussion sitting in a stylish, modern room."},{"id":"contact-image","url":"https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of the word 'email' formed with letter tiles on a gray surface."}];

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "home" },
              { name: "Features", id: "features" },
              { name: "Pricing", id: "pricing" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="SaaS Platform"
            buttonText="Join Now"
          />
        </div>
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Boost Your Productivity"
            description="Harness the power of your workspace with our advanced SaaS tools."
            imageSrc={assetMap.find(a => a.id === "hero")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "features" }
            ]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Efficient", description: "Streamline your workflow.", icon: Star },
              { title: "Intuitive", description: "User-friendly interfaces.", icon: Heart }
            ]}
            imageSrc={assetMap.find(a => a.id === "feature-1-image")?.url ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Our Features"
            features={[
              { title: "Advanced Analytics", description: "Gain insights into your data.", imageSrc: assetMap.find(a => a.id === "feature-1-image")?.url ?? "/public/images/placeholder.webp" },
              { title: "Collaboration Tools", description: "Work together seamlessly.", imageSrc: assetMap.find(a => a.id === "feature-2-image")?.url ?? "/public/images/placeholder.webp" }
            ]}
          />
        </div>
      </div>

      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardThree
            title="Choose Your Plan"
            plans={[
              {
                id: "basic",
                badge: "Best Value",
                price: "$19/mo",
                name: "Basic Plan",
                buttons: [
                  { text: "Get Started", href: "#" },
                  { text: "Learn More", href: "#" }
                ],
                features: ["5 Projects", "Limited Support"]
              },
              {
                id: "pro",
                badge: "Most Popular",
                badgeIcon: Sparkles,
                price: "$39/mo",
                name: "Pro Plan",
                buttons: [
                  { text: "Get Started", href: "#" },
                  { text: "Contact Sales", href: "#" }
                ],
                features: ["Unlimited Projects", "Priority Support"]
              }
            ]}
          />
        </div>
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FaqSplitMedia
            faqs={[
              { id: "1", title: "Can I upgrade at any time?", content: "Yes, you can upgrade your plan anytime." },
              { id: "2", title: "Is there a free trial?", content: "We offer a 14-day free trial of our Pro Plan." }
            ]}
            imageSrc={assetMap.find(a => a.id === "feature-2-image")?.url ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Stay Connected"
            title="Join our community"
            description="Subscribe to our newsletter for updates and tips."
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url ?? "/public/images/placeholder.webp"}
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Product",
                items: [
                  { label: "Features", href: "features" },
                  { label: "Pricing", href: "pricing" }
                ]
              },
              {
                title: "Company",
                items: [
                  { label: "About", href: "about" },
                  { label: "Contact", href: "contact" }
                ]
              }
            ]}
            copyrightText="© 2025 | SaaS Platform"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

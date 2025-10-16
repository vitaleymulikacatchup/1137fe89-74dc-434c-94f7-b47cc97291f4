"use client";
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

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Features", id: "feature" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SaaS Platform"
          buttonText="Join Now"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Boost Your Productivity"
            description="Harness the power of your workspace with our advanced SaaS tools."
            imageSrc="https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
            imageSrc="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Our Features"
            features={[
              { title: "Advanced Analytics", description: "Gain insights into your data.", imageSrc: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { title: "Collaboration Tools", description: "Work together seamlessly.", imageSrc: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
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
            imageSrc="https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Stay Connected"
            title="Join our community"
            description="Subscribe to our newsletter for updates and tips."
            imageSrc="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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

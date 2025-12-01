"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Instagram, Linkedin, Twitter, Mail, Sparkles, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Bevel Marketing"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607136656-u1zymobs.jpg"
          logoAlt="Bevel Marketing Logo"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get in Touch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          tag="Los Angeles Boutique Agency"
          title="Elevate Your Brand's Story"
          description="Award-winning marketing strategies tailored for ambitious brands. We combine creative excellence with data-driven insights to deliver transformative results."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607137395-wovc4vxe.jpg"
          imageAlt="Modern marketing agency workspace"
          buttons={[
            { text: "Start Your Journey", href: "contact" },
            { text: "View Our Work", href: "services" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We are a boutique marketing powerhouse in Los Angeles, dedicated to crafting brands that resonate. With over a decade of experience, we partner with visionary companies to unlock their full potential through innovative strategy and creative excellence."
          buttons={[
            { text: "Learn Our Approach", href: "services" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Our Services"
          description="Comprehensive marketing solutions designed to elevate your brand presence"
          tag="What We Offer"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="two-columns-alternating-heights"
          features={[
            {
              id: "01",
              title: "Brand Strategy",
              description: "Develop compelling brand narratives and positioning that differentiate you in the marketplace and resonate with your target audience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607138092-qp6g0t5q.jpg",
              imageAlt: "Brand strategy and planning"
            },
            {
              id: "02",
              title: "Creative Design",
              description: "From logo design to complete visual identities, we create stunning visual experiences that capture your brand essence.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607138749-a4mvad3t.jpg",
              imageAlt: "Creative design and branding"
            },
            {
              id: "03",
              title: "Social Media",
              description: "Strategic social campaigns that build community, drive engagement, and amplify your brand message across all platforms.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607139816-p7yi28rh.jpg",
              imageAlt: "Social media marketing content"
            },
            {
              id: "04",
              title: "Performance Analytics",
              description: "Data-driven insights and comprehensive reporting to measure success, optimize campaigns, and maximize ROI.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607140513-khq9jlbr.jpg",
              imageAlt: "Analytics and performance metrics"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="We work with innovative companies and Fortune 500 brands who trust us to drive their growth"
          tag="Our Partners"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607146678-bhe23bgd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607147493-k0lypcb5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607148406-qc9m1gqh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607149117-nu5lpa4j.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607149607-bwzwhq2o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607150125-xrq0wyko.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607150637-dx9p6lih.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607151358-tnsn76u2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607152102-sm9nxy33.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607152743-jrnpooi4.jpg"
          ]}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Team"
          description="Creative minds and strategic thinkers passionate about elevating brands"
          tag="Our Experts"
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Alexandra Chen",
              role: "Founder & Creative Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607141006-u4s4s1z9.jpg",
              imageAlt: "Alexandra Chen",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Strategy Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607141595-bwfaxza2.jpg",
              imageAlt: "Marcus Rodriguez",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "3",
              name: "Sophia Williams",
              role: "Lead Designer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607142587-pa1e0jhf.jpg",
              imageAlt: "Sophia Williams",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://portfolio.example.com" }
              ]
            },
            {
              id: "4",
              name: "James Park",
              role: "Social Media Strategist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607143220-pctkg1an.jpg",
              imageAlt: "James Park",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Instagram, url: "https://instagram.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Clients Say"
          description="Hear from brands that have experienced transformation through our partnership"
          tag="Client Stories"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Victoria Martinez",
              role: "CEO",
              company: "TechVision Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607143896-t7b8ya37.jpg",
              imageAlt: "Victoria Martinez"
            },
            {
              id: "2",
              name: "David Thompson",
              role: "Founder",
              company: "Creative Studios LA",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607144627-9xi8m85z.jpg",
              imageAlt: "David Thompson"
            },
            {
              id: "3",
              name: "Jennifer Lee",
              role: "Marketing Director",
              company: "Luxe Brands Co",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607145312-7nc1f81d.jpg",
              imageAlt: "Jennifer Lee"
            },
            {
              id: "4",
              name: "Michael Santos",
              role: "Head of Growth",
              company: "StartUp Ecosystem",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607146126-2hup0d1o.jpg",
              imageAlt: "Michael Santos"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Our Pricing Plans"
          description="Transparent pricing designed for brands at every stage of growth"
          tag="Investment Options"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              price: "Starting at $3,500",
              name: "Starter Package",
              buttons: [
                { text: "Get Started", href: "contact" }
              ],
              features: [
                "Brand consultation & audit",
                "Social media strategy",
                "Monthly performance reports",
                "Email support"
              ]
            },
            {
              id: "2",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "Starting at $8,500",
              name: "Growth Package",
              buttons: [
                { text: "Get Started", href: "contact" }
              ],
              features: [
                "Complete brand strategy",
                "Design & creative direction",
                "Multi-channel campaigns",
                "Weekly strategy calls",
                "Priority support"
              ]
            },
            {
              id: "3",
              price: "Custom",
              name: "Enterprise Package",
              buttons: [
                { text: "Contact Us", href: "contact" }
              ],
              features: [
                "Fully customized solutions",
                "Dedicated account team",
                "Advanced analytics & reporting",
                "Ongoing optimization",
                "24/7 support access"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about working with Bevel Marketing"
          textPosition="left"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What industries do you specialize in?",
              content: "We work with brands across technology, e-commerce, healthcare, luxury goods, and startups. Our boutique approach allows us to deeply understand diverse market needs and create tailored strategies for each sector."
            },
            {
              id: "2",
              title: "How long does a typical engagement take?",
              content: "Projects typically range from 3-12 months depending on scope. Most brand strategy engagements begin showing results within 30-60 days, with significant growth metrics visible after 90 days of implementation."
            },
            {
              id: "3",
              title: "Do you offer standalone services?",
              content: "Yes, we offer flexible service options. Whether you need social media management, design work, or strategic consulting, we can customize packages to meet your specific needs and budget."
            },
            {
              id: "4",
              title: "How do you measure success?",
              content: "We establish clear KPIs at the start of each engagement including brand awareness metrics, engagement rates, lead generation, and ROI. Monthly reports detail performance against these benchmarks with actionable insights."
            },
            {
              id: "5",
              title: "Are consultations free?",
              content: "Yes, we offer complimentary 30-minute discovery calls to understand your brand, goals, and challenges. This helps us determine if we're the right fit and propose tailored solutions."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Let's Create Something Remarkable"
          description="Ready to elevate your brand? Get in touch with our team. We'll discuss your vision, goals, and how we can drive real results for your business."
          buttonText="Send Message"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: false },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project and goals...",
            rows: 6,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Bevel"
          logoWidth={120}
          logoHeight={40}
          copyrightText="© Bevel Marketing, 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Services", href: "services" },
                { label: "Team", href: "team" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Case Studies", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Mail, href: "mailto:hello@bevel.com", ariaLabel: "Email" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BarChart, Briefcase, FolderOpen, Linkedin, Megaphone, MessageSquare, Monitor, Palette, Search, Settings, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "feature" },
            { name: "Team", id: "team" },
            { name: "Work", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Dialed Web"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Digital Marketing That Drives Results"
          description="We create powerful digital experiences that convert visitors into customers. From web design to SEO optimization, we help businesses grow online with data-driven strategies and stunning design."
          tag="Digital Agency"
          tagIcon={Zap}
          imageSrc="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern web development workspace"
          imagePosition="right"
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "blog"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Dialed Web"
          description="We combine creative design with technical expertise to deliver exceptional digital solutions that drive business growth and exceed expectations."
          tag="Our Approach"
          tagIcon={Target}
          imagePosition="left"
          imageSrc="https://images.pexels.com/photos/8534173/pexels-photo-8534173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Creative web design process"
          bulletPoints={[
            {
              title: "Data-Driven Strategy",
              description: "Every decision backed by analytics and user research",
              icon: BarChart
            },
            {
              title: "Custom Solutions",
              description: "Tailored approach for each client's unique needs",
              icon: Settings
            },
            {
              title: "Proven Results",
              description: "Track record of increasing conversions and ROI",
              icon: TrendingUp
            }
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "feature"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Our Services"
          description="Comprehensive digital solutions to transform your online presence and drive business growth"
          tag="What We Do"
          tagIcon={Briefcase}
          features={[
            {
              title: "Web Design & Development",
              description: "Custom websites that look stunning and perform flawlessly across all devices",
              icon: Monitor,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "SEO Optimization",
              description: "Improve your search rankings and drive organic traffic with proven SEO strategies",
              icon: Search,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Digital Marketing",
              description: "Comprehensive marketing campaigns that generate leads and increase conversions",
              icon: Megaphone,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Brand Identity",
              description: "Create a memorable brand that resonates with your target audience",
              icon: Palette,
              button: {
                text: "Learn More",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Team"
          description="Talented professionals dedicated to delivering exceptional digital solutions"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alex Johnson",
              role: "Lead Developer",
              description: "Full-stack developer with 8+ years experience in modern web technologies and scalable solutions.",
              imageSrc: "https://images.pexels.com/photos/7594090/pexels-photo-7594090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Johnson portrait",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Creative Director",
              description: "Award-winning designer specializing in user experience and brand identity with Fortune 500 clients.",
              imageSrc: "https://images.pexels.com/photos/7652243/pexels-photo-7652243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen portrait",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "3",
              name: "Michael Rodriguez",
              role: "Marketing Strategist",
              description: "Digital marketing expert with proven track record of increasing ROI by 300% for growing businesses.",
              imageSrc: "https://images.pexels.com/photos/6476561/pexels-photo-6476561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Rodriguez portrait",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped transform their digital presence"
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              role: "CEO",
              company: "TechStart Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Walsh portrait"
            },
            {
              id: "2",
              name: "David Kim",
              role: "Marketing Director",
              company: "GrowthCorp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "Founder",
              company: "InnovateHub",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Thompson portrait"
            },
            {
              id: "4",
              name: "Robert Chen",
              role: "VP of Sales",
              company: "ScaleUp Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Chen portrait"
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Recent Work"
          description="Explore our latest projects and see how we help businesses succeed online"
          tag="Portfolio"
          tagIcon={FolderOpen}
          blogs={[
            {
              id: "1",
              category: "Web Design",
              title: "E-commerce Platform Redesign",
              excerpt: "Complete redesign that increased conversions by 150% and improved user experience",
              imageSrc: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "E-commerce website redesign project",
              authorName: "Dialed Web Team",
              authorAvatar: "https://images.pexels.com/photos/7594090/pexels-photo-7594090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Development",
              title: "SaaS Application Build",
              excerpt: "Custom SaaS platform built from scratch with modern tech stack and scalable architecture",
              imageSrc: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "SaaS application development project",
              authorName: "Dialed Web Team",
              authorAvatar: "https://images.pexels.com/photos/7652243/pexels-photo-7652243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "08 Jan 2025"
            },
            {
              id: "3",
              category: "Branding",
              title: "Complete Brand Identity",
              excerpt: "Brand redesign and digital strategy that transformed startup into industry leader",
              imageSrc: "https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Brand identity design project",
              authorName: "Dialed Web Team",
              authorAvatar: "https://images.pexels.com/photos/6476561/pexels-photo-6476561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "02 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Transform Your Digital Presence?"
          description="Get in touch with our team to discuss your project. We'll provide a free consultation and custom proposal tailored to your business needs."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: false
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://images.pexels.com/photos/5554668/pexels-photo-5554668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern office workspace"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Web Design",
                  href: "feature"
                },
                {
                  label: "Development",
                  href: "feature"
                },
                {
                  label: "SEO",
                  href: "feature"
                },
                {
                  label: "Digital Marketing",
                  href: "feature"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Portfolio",
                  href: "blog"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Case Studies",
                  href: "blog"
                },
                {
                  label: "Free Consultation",
                  href: "contact"
                },
                {
                  label: "Blog",
                  href: "https://blog.dialedweb.com"
                },
                {
                  label: "Support",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Dialed Web. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
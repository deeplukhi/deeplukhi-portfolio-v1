import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/deeplukhi/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/deeplukhi",
    icon: Github,
  },
  {
    name: "Twitter",
    url: "https://x.com/DeepLukhi11",
    icon: Twitter,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/deeplukhi11/",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <h2 className="section-title">Contact</h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollAnimation delay={0.1} direction="left">
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground">
                Feel free to reach out if you want to collaborate, have a question, 
                or just want to say hi! 👋
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:deeplukhi11@gmail.com"
                  className="contact-link"
                >
                  <Mail size={20} />
                  <span className="mono-text">deeplukhi11@gmail.com</span>
                </a>

                <a
                  href="tel:+918460908591"
                  className="contact-link"
                >
                  <Phone size={20} />
                  <span className="mono-text">+91 8460908591</span>
                </a>

                <div className="contact-link">
                  <MapPin size={20} />
                  <span>Surat, India</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Social Links */}
          <ScrollAnimation delay={0.2} direction="right">
            <div>
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-card flex items-center gap-3 hover:bg-secondary transition-colors"
                  >
                    <link.icon />
                    <span className="font-medium">{link.name}</span>
                    <ArrowUpRight size={16} className="ml-auto" />
                  </a>
                ))}
              </div>

              {/* Resume Button */}
              <a
                href="/DEEP_LUKHI.pdf"
                download="DEEP_LUKHI_Resume.pdf"
                className="btn-primary w-full mt-8 flex items-center justify-center gap-2"
              >
                Download Resume <ArrowUpRight size={18} />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

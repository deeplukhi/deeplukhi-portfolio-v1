import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "projects", href: "/projects" },
  { label: "workExperience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm pt-4">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-center relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-16 md:gap-24">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-base  tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button - Absolute Top Right */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute top-5 right-6 p-2 z-50 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link px-6 py-3"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

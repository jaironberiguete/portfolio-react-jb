import React from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = ({ onToggle }) => {
  const [open, setOpen] = React.useState(false);

  const nav = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }, 
  ];

  return (
    <nav className="fixed w-full z-50 py-3 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold">
          Jairon Beriguete
        </a>

        {/* Desktop menu */}
        <div className="hidden sm: pr-24 md:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm opacity-90 hover:opacity-100"
            >
              {item.name}
            </a>
          ))}

          <div className="sm: ml-4">
          <ThemeToggle onToggle={onToggle} />
          </div>
          
        </div>

        

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen((o) => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden  backdrop-blur-md py-6">
          <div className="flex flex-col items-center gap-6">
            {nav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm opacity-90 hover:opacity-100"
              >
                {item.name}
              </a>
            ))}
            <div className="flex justify-center mt-auto">
            <ThemeToggle onToggle={onToggle} /> 
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

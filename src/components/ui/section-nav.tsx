import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface SectionNavProps {
  sections: { id: string; label: string }[];
  className?: string;
}

export function SectionNav({ sections, className }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={cn(
      "fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3",
      className
    )}>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => handleClick(e, section.id)}
          className={cn(
            "group flex items-center gap-3 transition-all duration-300",
            activeSection === section.id ? "opacity-100" : "opacity-40 hover:opacity-70"
          )}
        >
          <span className={cn(
            "h-2 rounded-full transition-all duration-300",
            activeSection === section.id 
              ? "w-6 bg-accent" 
              : "w-2 bg-muted-foreground group-hover:bg-accent/50"
          )} />
          <span className={cn(
            "text-xs font-medium transition-all duration-300 whitespace-nowrap",
            activeSection === section.id 
              ? "opacity-100 translate-x-0 text-foreground" 
              : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground"
          )}>
            {section.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

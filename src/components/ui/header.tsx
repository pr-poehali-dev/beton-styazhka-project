
import * as React from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export function Header({ className, ...props }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Услуги", href: "#services" },
    { label: "Преимущества", href: "#benefits" },
    { label: "Этапы работ", href: "#steps" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Вопросы", href: "#faq" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent",
        className
      )}
      {...props}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">БетонПро</span>
            <span className="hidden md:inline-block text-sm text-gray-500">| Стяжки по всему Крыму</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-yellow-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+79781234567" className="hidden md:flex items-center gap-1">
              <Icon name="Phone" className="text-yellow-600" size={16} />
              <span className="font-medium">+7 978 123-45-67</span>
            </a>
            
            <Button
              onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
              className="hidden md:inline-flex"
            >
              Позвать мастера
            </Button>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-2 text-base font-medium hover:text-yellow-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:+79781234567" className="py-2 text-base font-medium flex items-center gap-2">
                <Icon name="Phone" size={18} />
                +7 978 123-45-67
              </a>
              <Button onClick={() => {
                document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}>
                Позвать мастера
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

import { useEffect, useState } from "preact/hooks";
import { navigation_items, NavigationLinks } from "../lib/types";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      class={`fixed top-0 z-[100] w-full py-2 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-black/30 backdrop-blur-xs"}`}
    >
      <div class="container mx-auto flex flex-row items-center justify-between px-4">
        <a href={`#${NavigationLinks.Home}`}>
          <img
            src={"/assets/church_logo.jpg"}
            alt="A description of my image."
            class={"aspect-auto h-12 w-12 rounded-full"}
          />
        </a>
        <ul class="flex flex-row items-center gap-8">
          {navigation_items
            .filter((item) => item.show)
            .map((item) => (
              <li>
                <a
                  href={item.href}
                  class={`rounded-md px-3 py-2 text-lg font-semibold transition-all duration-300 ${isScrolled ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}

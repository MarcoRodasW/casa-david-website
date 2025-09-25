
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
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
<nav
    class={`fixed top-0 z-50 w-full  transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-black/30 backdrop-blur-sm py-4'}`}
>
    <div
        class="container mx-auto flex flex-row items-center justify-between px-4"
    >
        <div class="flex flex-row items-center gap-2">
            <img
                src={"./public/assets/church_logo.jpg"}
                alt="A description of my image."
                class={"aspect-auto w-12 h-12 rounded-full"}
            />
            <a
                href={`#${NavigationLinks.Home}`}
                class="text-lg font-semibold text-black">Casa de David</a
            >
        </div>
        <ul class="flex flex-row items-center gap-8">
            {
                navigation_items.map((item) => (
                    <li>
                        <a
                            href={item.href}
                            class="text-lg font-semibold text-black"
                        >
                            {item.name}
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
</nav>
  )
}

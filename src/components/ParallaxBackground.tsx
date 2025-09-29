import { useEffect, useState } from "preact/hooks";

interface ParallaxBackgroundProps {
  imageSrc: string;
  alt?: string;
  speed?: number;
  className?: string;
}

export default function ParallaxBackground({
  imageSrc,
  alt = "Hero background",
  speed = 0.5,
  className = "",
}: ParallaxBackgroundProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: -1 }}
    >
      <div
        className="absolute inset-0 h-[120%] w-full"
        style={{
          transform: `translateY(${offsetY}px)`,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />
    </div>
  );
}

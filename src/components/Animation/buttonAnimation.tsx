"use client";
import { Button } from "@/ui/button";
import gsap from "gsap";

const ButtonAnimation = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.08,
      duration: 0.3,
      ease: "power1.in",
    });
    if (e.currentTarget.classList.contains("btn-scale")) {
      gsap.to(e.currentTarget, {
        backgroundColor: "red",
        color: "white",
        duration: 0.3,
        ease: "elastic.out",
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    if (e.currentTarget.classList.contains("btn-scale")) {
      gsap.to(e.currentTarget, {
        backgroundColor: "#FFCA28",
        color: "black",
        font: "normal",
      });
    }
  };
  return (
    <div className="flex justify-center gap-5 mt-5">
      <Button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="btn-scale bg-amber-400 text-black text-[20px]"
      >
        Scale
      </Button>
      <Button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-amber-400 text-black text-[20px]"
      >
        Glow
      </Button>
      <Button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-amber-400 text-black text-[20px]"
      >
        Wiggle
      </Button>
    </div>
  );
};

export default ButtonAnimation;

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@/ui/button";

export default function Demo() {
  //   const boxRef = useRef<HTMLDivElement>(null)
  const leftCardRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(leftCardRef.current, {
      x: -160,
      rotation: -12,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(centerCardRef.current, {
      scale: 1.08,
      rotation: 0,
      zIndex: 50,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(rightCardRef.current, {
      x: 150,
      rotation: 12,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(leftCardRef.current, {
      x: 0,
      rotation: -8,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(centerCardRef.current, {
      scale: 1,
      rotation: -8,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(rightCardRef.current, {
      x: 0,
      rotation: -8,
      duration: 0.4,
      marginLeft: -40,
      marginTop: 10,
      zIndex: 50,
      ease: "power2.out",
    });
  };

  const handleMouseEnterLeft = () => {
    gsap.to(leftCardRef.current, {
      x: -120,
      rotation: 0,
      duration: 0.4,
      scale: 1.08,
      ease: "power2.out",
    });
    gsap.to(centerCardRef.current, {
      x: 50,
      rotation: 8,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(rightCardRef.current, {
      x: 50,
      rotation: 8,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const handleMouseLeaveLeft = () => {
    gsap.to(leftCardRef.current, {
      x: 0,
      rotation: 4,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(centerCardRef.current, {
      x: 0,
      rotation: -10,
      zIndex: 20,
      duration: 0.4,
      marginLeft: -100,
      marginTop: 15,
      ease: "power2.out",
    });

    gsap.to(rightCardRef.current, {
      x: 0,
      rotation: 10,
      marginTop: -10,
      marginLeft: -100,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const handleMouseEnterRight = () => {
    gsap.to(leftCardRef.current, {
      x: -50,
      rotation: -8,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(centerCardRef.current, {
      x: -50,
      rotation: -8,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(rightCardRef.current, {
      x: 120,
      rotation: 0,
      duration: 0.4,
      scale: 1.08,
      ease: "power2.out",
    });
  };
  const handleMouseLeaveRight = () => {
    gsap.to(leftCardRef.current, {
      x: 0,
      rotation: -8,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(centerCardRef.current, {
      x: 0,
      rotation: -1,
      zIndex: 20,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(rightCardRef.current, {
      x: 0,
      rotation: 10,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    gsap.fromTo(
      ".box",
      {
        y: 200,
        backgroundColor: "pink",
      },
      {
        x: 700,
        y: 0, //move 500 px down
        backgroundColor: "blue",
        duration: 9, // over 2sec
        rotation: 360, //spin a full turn
        ease: "power2.out",
      },
    );
    gsap.set(".box1", {
      x: 200,
      y: 200,
      backgroundColor: "purple",
    });
    gsap.to(".box2", {
      x: 400,
      rotation: 720,
      duration: 3,
      ease: "bounce.out",
      backgroundColor: "red",
    });
    gsap.from(".box3", {
      x: 400,
      rotation: 720,
      duration: 3,
      ease: "bounce.out",
      backgroundColor: "orange",
    });
    gsap.fromTo(
      ".box4",
      {
        x: 400,
        rotation: 720,
        duration: 1,
        ease: "bounce.out",
        opacity: 0,
        scale: 0.5,
        backgroundColor: "green",
      },
      {
        x: "+=400",
        rotation: 720,
        duration: 1,
        ease: "bounce.out",
        opacity: 1,
        scale: 1,
        backgroundColor: "orange",
      },
    );

    gsap.to(".box5", {
      x: 200,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
      backgroundColor: "pink",
      stagger: {
        each: 0.4,
        from: "random",
        grid: [2, 2],
      },
    });

    const tl = gsap.timeline({paused: true});
    tl.to(".box6", { x: 600, duration: 1.3, ease: "power3.out" })
      .to(".box7", { x: 600, duration: 1.3, ease: "power3.out" })
      .to(".box8", { x: 600, duration: 1.3, ease: "power3.out" }, 0)
      .to(".box9", { x: 600, duration: 1.3, ease: "power3.out" }, "-=0.9")
      .to(".box10", { x: 600, duration: 1.3, ease: "power3.out" }, "+=0.8");
     tl.play();
      const timer = setTimeout(() => {
      tl.pause();
    }, 2000);
    

    return () => clearTimeout(timer);

    // gsap.set([".box2", ".box3", ".box4"], {
    //   x: 600,
    //   y: 0,
    // });
  }, []);

  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isMouseEnterSecond, setIsMouseEnterSecond] = useState(false);
  const [isMouseEnterThird, setIsMouseEnterThird] = useState(false);

  return (
    <>
      <div className="w-20 h-20 box" />
      <div className="w-20 h-20 box1"></div>
      <div className="w-20 h-20 box2"></div>
      <div className="w-20 h-20 box3"></div>
      <div className="w-20 h-20 box4"></div>
      <div className="w-[200px] grid grid-cols-2 gap-3">
        <div className="w-20 h-20 box5"></div>
        <div className="w-20 h-20 box5"></div>
        <div className="w-20 h-20 box5"></div>
        <div className="w-20 h-20 box5"></div>
        <div className="w-20 h-20 box5"></div>
        <div className="w-20 h-20 box5"></div>
        <div className="w-20 h-20 box5"></div>
        <div className="w-20 h-20 box5"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-20 h-20 bg-amber-900 box6"></div>
        <div className="w-20 h-20 bg-purple-900 box7"></div>
        <div className="w-20 h-20 bg-green-900 box8"></div>
        <div className="w-20 h-20 bg-gray-900 box9"></div>
        <div className="w-20 h-20 bg-pink-900 box10"></div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex gap-8 justify-center">
          <div
            onMouseEnter={() => setIsMouseEnter(true)}
            onMouseLeave={() => setIsMouseEnter(false)}
            className="relative w-50 h-70 rounded-lg bg-amber-400 hover:rotate-6 transition-transform duration-300 cursor-pointer hover:scale-100 ease-in-out hover:h-75"
          >
            {isMouseEnter && (
              <>
                <div className="absolute -top-10 left-20">
                  <Image
                    src="/catEar.png"
                    alt="cat ear"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="absolute -bottom-3 left-16">
                  <Button className="p-2 rounded-sm bg-pink-500 text-white font-bold">
                    Read More
                  </Button>
                </div>
              </>
            )}
          </div>
          <div
            onMouseEnter={() => setIsMouseEnterSecond(true)}
            onMouseLeave={() => setIsMouseEnterSecond(false)}
            className="relative w-50 h-70 rounded-lg bg-green-400 hover:-rotate-6 transition-transform duration-300 cursor-pointer hover:h-75"
          >
            {isMouseEnterSecond && (
              <>
                <div className="absolute -top-10 left-20">
                  <Image
                    src="/catEar.png"
                    alt="cat ear"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="absolute -bottom-3 left-16">
                  <Button className="p-2 rounded-sm bg-pink-500 text-white font-bold">
                    Read More
                  </Button>
                </div>
              </>
            )}
          </div>
          <div
            onMouseEnter={() => setIsMouseEnterThird(true)}
            onMouseLeave={() => setIsMouseEnterThird(false)}
            className="relative w-50 h-70 rounded-lg bg-gray-400 hover:rotate-6 transition-transform duration-300 cursor-pointer hover:h-75"
          >
            {isMouseEnterThird && (
              <>
                <div className="absolute -top-10 left-20">
                  <Image
                    src="/catEar.png"
                    alt="cat ear"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="absolute -bottom-3 left-16">
                  <Button className="p-2 rounded-sm bg-pink-500 text-white font-bold">
                    Read More
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center py-20 overflow-hidden">
          <div className=" flex">
            {/* Card 1 */}
            <div
              ref={leftCardRef}
              onMouseEnter={handleMouseEnterLeft}
              onMouseLeave={handleMouseLeaveLeft}
              className="w-72 h-80 bg-[#FAED8F] rounded-3xl -rotate-8  p-6 z-10"
            ></div>

            {/* Card 2 */}
            <div
              ref={centerCardRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="w-72 h-80 bg-[#FEB6FA] rounded-3xl p-6 -ml-15 rotate-8 z-20 cursor-pointer"
            ></div>

            {/* Card 3 */}
            <div
              ref={rightCardRef}
              onMouseEnter={handleMouseEnterRight}
              onMouseLeave={handleMouseLeaveRight}
              className="w-72 h-80 bg-[#DDFCFC] rounded-3xl -rotate-9 p-6 -ml-16 z-30"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

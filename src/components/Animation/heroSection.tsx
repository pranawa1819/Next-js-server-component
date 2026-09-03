"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SecondSection from "./secondSection";

const HeroSection = () => {
  const counterRef = useRef<HTMLHeadingElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obj = { value: 0 };
    const tl = gsap.timeline({ paused: true });
    gsap.set(".heading",{yPercent:60});
    tl.to(loaderRef.current, {
      yPercent: 100,
      duration: 1.2,
      ease: "expo.out",
    }).from(
      ".hero-section",
      {
        scale: 1.5,
        duration: 1.23,
        ease: "expo.out",
      },
      "-=0.8",
    ).from(".heading",{
        yPercent:0,
        duration:1.2,
        ease:"power3.out",

    },"-=1");

    gsap.to(obj, {
      value: 100,
      duration: 6,
      delay: 0.5,
      ease: "none",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.round(obj.value)}%`;
        }
      },
      onComplete: () => {
        gsap.to(counterRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          onComplete: () => {
            tl.play();
          },
        });
      },
    });
  }, []);
  return (
    <>
      <div className="relative">
        <section
          ref={loaderRef}
          className="fixed top-0 left-0 z-50 w-full min-h-screen flex justify-center items-center bg-black"
        >
          <h2 ref={counterRef} className="text-[40px] font-bold text-white">
            0%
          </h2>
        </section>
        <section
          className="relative hero-section min-h-screen w-full bg-cover bg-center overflow-scroll"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="heading text-4xl font-bold text-black">Hello</h1>
            <p className="text-black">kkdkd</p>
          </div>
          <div className="absolute w-full h-125 p-4 bottom-0 left-0 ">
          <SecondSection/>
          </div>
        </section>
       
      </div>
    </>
  );
};

export default HeroSection;

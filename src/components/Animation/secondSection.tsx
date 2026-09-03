import gsap from "gsap";
import { useEffect, useRef } from "react";

const SecondSection = () => {
  const firstItemsRef = useRef<HTMLDivElement>(null);
  const secondItemsRef = useRef<HTMLDivElement>(null);
  const thirdItemsRef = useRef<HTMLDivElement>(null);
  const firstImageRef = useRef<HTMLVideoElement>(null);
  const secondImageRef = useRef<HTMLVideoElement>(null);
  const thirdImageRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    firstImageRef.current?.play();

    gsap.set(
      [firstImageRef.current, secondImageRef.current, thirdImageRef.current],
      {
        yPercent: 50,
        opacity: 0,
      },
    );
    gsap.set(firstImageRef.current, { yPercent: 0, opacity: 1 });

    tl.to(firstItemsRef.current, {
      delay: 2,
      rotate: 360,
      duration: 15,
      ease: "linear",
      onComplete: () => {
        gsap.to(firstItemsRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          onComplete: () => {
            firstImageRef.current?.pause();
            gsap.set([secondItemsRef.current], { opacity: 1, color: "black" });
            gsap.set(firstImageRef.current, { opacity: 0 });
            gsap.to(secondImageRef.current, {
              yPercent: 0,
              duration: 1.2,
              delay: 0.5,
              ease: "bounce.in",
              scale: 1.2,
              opacity: 1,
            });
            secondImageRef.current?.play();
          },
        });
      },
    })
      .to(secondItemsRef.current, {
        delay: 1.2,
        rotate: 360,
        duration: 10,
        ease: "linear",
        onComplete: () => {
          gsap.to(secondItemsRef.current, {
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            onComplete: () => {
              secondImageRef.current?.pause();
              gsap.set([thirdItemsRef.current], { opacity: 1, color: "black" });
              gsap.set(secondImageRef.current, { opacity: 0 });
              gsap.fromTo(thirdImageRef.current, {
                x:600,                
              },{
                x:0,
                y:-200,
                duration: 1.2,
                ease: "power1.in",
                scale: 1.2,
                opacity: 1,
              });
              thirdImageRef.current?.play();
            },
          });
        },
      })
      .to(thirdItemsRef.current, {
        delay: 1.2,
        rotate: 360,
        duration: 10,
        ease: "linear",
        onComplete: () => {
          gsap.to(thirdItemsRef.current, {
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            onComplete: () => {
              thirdImageRef.current?.pause();
              gsap.set([firstItemsRef.current], { opacity: 1, color: "black" });
              gsap.set(thirdImageRef.current, { opacity: 0 });
              gsap.fromTo(
                firstImageRef.current,
                {
                  x: -100,
                },
                {
                  x: 30,
                  duration: 1.2,
                  ease: "back.in",
                  scale: 1.1,
                  opacity: 1,
                },
              );
              firstImageRef.current?.play();
            },
          });
        },
      });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="flex gap-4 justify-between bg-white p-6 ">
      <div className="w-150 flex flex-col gap-3 p-3 ">
        <span className="text-[20px] font-bold text-black">
          Precision field reporting, made easy.
        </span>
        <div className="flex gap-4 items-center ">
          <div className="flex gap-2 items-center">
            <div
              ref={firstItemsRef}
              className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
            ></div>
            <span className=" text-[12px] text-black font-medium">
              Time Tracking
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <div
              ref={secondItemsRef}
              className="w-4 h-4 border-2 border-black border-t-transparent rounded-full opacity-0"
            ></div>
            <span className="text-[12px] text-black font-medium">
              Scheduling
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <div
              ref={thirdItemsRef}
              className="w-4 h-4 border-2 border-black border-t-transparent rounded-full opacity-0"
            ></div>
            <span className="text-[12px] text-black font-medium">
              Production
            </span>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="relative w-150 h-159.5 bg-gray-200 rounded-md flex justify-center items-center">
          <video
            ref={firstImageRef}
            muted
            playsInline
            className="w-120 h-120 object-cover"
          >
            <source src="/time.mp4" type="video/mp4" />
          </video>

          <video
            ref={secondImageRef}
            muted
            playsInline
            className="w-120 h-120 object-cover absolute inset-0 top-40 left-30"
          >
            <source src="/scheduling.mp4" type="video/mp4" />
          </video>

          <video
            ref={thirdImageRef}
            muted
            playsInline
            className="w-120 h-120 object-cover absolute inset-0"
          >
            <source src="/production.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

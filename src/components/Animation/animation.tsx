import { Button } from "@/ui/button";

const Animation = () => {
  return (
    <div className="flex flex-col p-6 justify-center items-center gap-3">
      <Button className="bg-blue-500 hover:bg-red-500 transition-color duration-500">
        Hover Me
      </Button>
      <Button className="bg-pink-500 hover:-translate-y-1 hover:bg-amber-300  delay-150 transition duration-300 ease-in-out">
        Hover
      </Button>
      <Button className="hover:rotate-45 transition delay-300">Hello</Button>
      <Button className="shadow-md hover:shadow-2xl transition-shadow duration-500">
        kjsakskcnsdlkkff
      </Button>
      <div className="w-10 h-10 bg-amber-600 rounded-full animate-bounce"></div>
      <div className="w-10 h-10 border-4 border-blue-500 animate-spin"></div>
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="rotate-y-180 backface-visible">jjdskkdmsdm</div>
      <div className="perspective-normal perspective-origin-bottom">
        <div className="rotate-x-45">Card</div>
      </div>
      <div className="hover:scale-110 transition">Card</div>
      <div className="skew-x-12">Text</div>
      <div className="transform-gpu hover:scale-110">cccc</div>
    </div>
  );
};

export default Animation;

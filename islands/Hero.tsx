import { animate, inView } from "motion";
import Countdown from "./Countdown.tsx";

const Hero = () => {
  inView("#counter", () => {
    animate(
      "#counter",
      { opacity: 1, transform: "none" },
      { delay: 1, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] },
    );
  });

  inView("#title", () => {
    animate(
      "#title",
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] },
    );
  });

  return (
    <section class="h-screen w-full bg-black flex flex-col items-center justify-between mb-[22px] md:mb-[60px]">
      <div class="w-full h-[82px]">
        <div class="flex flex-row pr-6" />
      </div>
      <div class="h-full w-full gap-6 flex flex-col items-center justify-center">
        <img src="/image/unbank.svg" alt="Unbank" class="w-[139px] h-[139px]" />
        <div id="counter" class="opacity-0 translate-y-6 text-center">
          <Countdown />
        </div>
      </div>
      <div class="w-full content-start items-start flex justify-start px-5 md:px-10">
        <h2
          id="title"
          class="opacity-0 translate-y-4 text-white text-[28px] md:text-4xl font-inter-tight font-bold"
        >
          Unbank
        </h2>
      </div>
    </section>
  );
};

export default Hero;

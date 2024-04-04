import { animate, inView } from "motion";
import Countdown from "./Countdown.tsx";
import Content from "deco-sites/unbank/islands/Content.tsx";
import type { TextBlock } from "./Content.tsx";

interface Props {
  textBlock: TextBlock[];
}

const Hero = ({ textBlock }: Props) => {
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
    <section class="h-auto w-auto bg-black flex flex-col items-center justify-start flex-nowrap gap-6 md:gap-[60px] min-h-fit">
      <div class="w-full flex flex-col h-lvh justify-between items-center">
        <div class="w-full h-[82px]">
          <div class="flex flex-row pr-6" />
        </div>
        <div class="h-full w-full gap-6 flex flex-col items-center justify-center">
          <img
            src="/image/unbank.svg"
            alt="Unbank"
            class="w-[139px] h-[139px]"
          />
          <div id="counter" class="opacity-0 translate-y-6 text-center">
            <Countdown />
          </div>
        </div>
        <div class="w-full items-center flex justify-start max-w-[1400px] px-5 md:px-10">
          <h2
            id="title"
            class="opacity-0 translate-y-4 text-white text-[28px] md:text-4xl font-inter-tight font-semibold"
          >
            Unbank
          </h2>
        </div>
      </div>
      <Content textBlock={textBlock} />
    </section>
  );
};

export default Hero;

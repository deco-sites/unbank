import Icon from "deco-sites/unbank/components/Icon.tsx";

const Hero = () => {
  return (
    <section class="h-screen w-full bg-black flex flex-col items-center justify-between">
      <div class="h-full w-full flex items-center justify-center">
        <img src="/image/unbank.svg" alt="Unbank" class="w-[139px] h-[139px]" />
      </div>
      <div class="w-full content-start items-start flex justify-start px-5 py-0">
        <h2 class="text-white text-[28px] md:text-4xl font-inter-tight">
          Unbank
        </h2>
      </div>
    </section>
  );
};

export default Hero;

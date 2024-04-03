const Hero = () => {
  return (
    <section class="h-screen w-full bg-black flex flex-col items-center justify-between mb-[22px] md:mb-[60px]">
      <div class="w-full h-[82px]">
        <div class="flex flex-row pr-6" />
      </div>
      <div class="h-full w-full flex flex-col items-center justify-center">
        <img src="/image/unbank.svg" alt="Unbank" class="w-[139px] h-[139px]" />
        <div class="text-center">
          <p class="font-abel font-normal text-6xl leading-none mb-0">
            18<span class="text-gray-400">D</span>11<span class="text-gray-400">
              H
            </span>22<span class="text-gray-400">
              M
            </span>15<span class="text-gray-400">S</span>
          </p>
        </div>
      </div>
      <div class="w-full content-start items-start flex justify-start px-5 md:px-10">
        <h2 class="text-white text-[28px] md:text-4xl font-inter-tight font-bold">
          Unbank
        </h2>
      </div>
    </section>
  );
};

export default Hero;

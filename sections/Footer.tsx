export default function Footer() {
  return (
    <footer class="bg-black pt-14 w-full pb-20 px-5 md:px-10 flex flex-col items-center md:items-start justify-start">
      <div class="relative border-4 border-solid border-[#FFFFFF99] rounded-full flex items-center justify-center size-[110px]">
        <img
          src="/image/unb-circular.svg"
          alt="Unbank"
          class="size-[96px] animate-spin-slow absolute"
        />
        <div class="border-4 border-solid border-[#FFFFFF99] rounded-full flex items-center justify-center size-[63px]">
          <img
            src="/image/unb-wave.svg"
            alt="Unbank"
            class="w-[38px] h-[25px]"
          />
        </div>
      </div>
    </footer>
  );
}

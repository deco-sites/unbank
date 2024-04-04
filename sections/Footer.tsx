export default function Footer() {
  return (
    <footer class="bg-black w-full h-[300px] flex flex-col items-center justify-center">
      <div class="border-4 border-solid border-[#FFFFFF99] rounded-full flex items-center justify-center size-[96px]">
        {
          /* <div id="circle">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
    <defs>
        <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
    </defs>
    <circle cx="150" cy="100" r="75" fill="none"/>
    <g>
        <use xlink:href="#circlePath" fill="none"/>
        <text fill="#FFFFFF99">
            <textPath xlink:href="#circlePath">✦ UNBANK ✦ UNBANK ✦ UNBANK</textPath>
        </text>
    </g>
</svg>
</div> */
        }

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

import { animate, inView } from "motion";

export default function WhatsNextCard() {
  inView("#card", () => {
    animate(
      "#card",
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 0.6, easing: [0.17, 0.55, 0.55, 1] },
    );
  });

  return (
    <section class="w-full bg-black h-auto px-5 md:px-10">
      <div
        id="card"
        class="opacity-0 translate-y-5 p-10 gap-6 border border-[#ffffff1f] bg-[#0D0D0D] rounded-[20px] flex flex-col max-w-[400px]"
      >
        <div class="size-14 flex items-center justify-center bg-[#262626] rounded-[10px]">
          <img
            src="/image/hat.svg"
            alt="Unbank"
            class="w-[25px] h-[30px]"
          />
        </div>
        <div>
          <h5 class="font-inter text-lg italic text-white font-semibold mb-3">
            What's next?
          </h5>
          <div class="font-inter text-base leading-[1.8rem] text-[#c9c9c9] italic font-light">
            <p>
              Ao longo dos últimos meses começamos a montar uma alternativa.
            </p>
            <br />
            <p>
              O primeiro passo é construir um produto que seja mais útil e tenha
              uma experiência superior à dos bancos, pelo menos para um nicho
              inicial de power users.
            </p>
            <br />
            <p>
              Estamos inovando ao criar uma experiência bancária totalmente
              diferente dos bancos. Usando uma nova interface, e uma nova
              plataforma. Se os neobanks cresceram em cima do apps mobile, o que
              podemos fazer que é 10x melhor?
            </p>
            <br />
            <p>
              Se você quiser ter uma prévia do que estamos construindo, é só
              clicar abaixo:
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/message/FZWJAHLNHF5AG1"
          target="_blank"
          class="button border hover:opacity-90 border-[#222426] w-fit h-[49px] flex items-center justify-center rounded-[7px] px-6  bg-gradient-to-b from-[#131415] to-[#050505]"
        >
          <span class="font-inter text-base text-[#c4c4c4] font-medium ">
            Quero saber mais
          </span>
        </a>
      </div>
    </section>
  );
}

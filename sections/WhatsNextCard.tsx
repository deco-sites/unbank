export default function WhatsNextCard() {
  return (
    <section class="w-full bg-black h-auto px-5 md:px-10">
      <div class="p-10 gap-6 border border-[#ffffff1f] bg-[#0D0D0D] rounded-[20px] flex flex-col max-w-[400px]">
        <div class="size-14 flex items-center justify-center">
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
          <div class="font-inter text-base text-[#c9c9c9] italic font-light">
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

        <div>
          <a class="button bg-black">
            <div data-framer-name="Border"></div>
            <div data-framer-name="Color 1"></div>
            <div data-framer-name="Color 1 Glow"></div>
            <div data-framer-name="Color 2"></div>
            <div data-framer-name="Color 2 Glow"></div>
            <div data-framer-name="Fill"></div>
            <div>
              <p>Quero saber mais</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

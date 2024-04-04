import { animate, inView } from "motion";

/**
 * @title {{{title}}}
 */
interface TextBlock {
  title: string;
  /** @format html */
  text: string;
}

export interface Props {
  textBlock: TextBlock[];
}

export default function Content({ textBlock }: Props) {
  inView("#textTitle", () => {
    animate(
      "#textTitle",
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] },
    );
  });

  inView("#text", () => {
    animate(
      "#text",
      { opacity: 1, transform: "none" },
      { delay: 0.5, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] },
    );
  });

  return (
    <section class="h-auto w-full px-5 md:px-10">
      <div class="flex flex-col gap-6 flex-nowrap">
        <div>
          {textBlock.map((block) => (
            <div>
              <h2
                id="textTitle"
                class="opacity-0 translate-y-4 font-inter text-[22px] text-white font-bold"
              >
                {block.title}
              </h2>
              <div
                id="text"
                class="opacity-0 translate-y-4 max-w-[660px] min-w-[300px] text-lg font-inter font-normal"
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

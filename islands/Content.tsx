import { animate, inView } from "motion";
import { useEffect } from "preact/hooks";

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
	useEffect(() => {
	  textBlock.forEach((_, index) => {
		const titleId = `#textTitle${index}`;
		const textId = `#text${index}`;

		inView(titleId, () => {
		  animate(
			titleId,
			{ opacity: 1, transform: "none" },
			{ delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] },
		  );
		});

		inView(textId, () => {
		  animate(
			textId,
			{ opacity: 1, transform: "none" },
			{ delay: 0.5, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] },
		  );
		});
	  });
	}, [textBlock]);

	return (
	  <section className="h-auto w-full px-5 md:px-10">
		<div className="flex flex-col gap-6 flex-nowrap">
			{textBlock.map((block, index) => (
			  <div key={index}>
				<h2
				  id={`textTitle${index}`}
				  className="opacity-0 translate-y-4 font-inter text-[22px] text-white font-bold"
				>
				  {block.title}
				</h2>
				<div
				  id={`text${index}`}
				  className="opacity-0 translate-y-4 max-w-[660px] min-w-[300px] text-lg font-inter font-normal"
				  dangerouslySetInnerHTML={{ __html: block.text }}
				/>
			  </div>
			))}
		</div>
	  </section>
	);
  }

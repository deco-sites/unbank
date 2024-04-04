import { animate, inView } from "motion";
import { useEffect } from "preact/hooks";

/**
 * @title {{{title}}}
 */
export interface TextBlock {
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
			{ delay: 0.2, duration: 0.6, easing: [0.17, 0.55, 0.55, 1] },
		  );
		});

		inView(textId, () => {
		  animate(
			textId,
			{ opacity: 1, transform: "none" },
			{ delay: 0.5, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] },
		  );
		});
	  });
	}, [textBlock]);

	return (
		<div className="w-full flex flex-col flex-nowrap gap-6 pt-6 md:pt-0 pb-20 px-5 md:px-10 md:pb-20 max-w-[1400px]">
			{textBlock.map((block, index) => (
			  <div key={index} class="flex flex-col gap-6 flex-nowrap">
				<h2
				  id={`textTitle${index}`}
				  className="opacity-0 translate-y-4 font-inter text-[22px] text-white font-medium leading-6"
				>
				  {block.title}
				</h2>
				<div
				  id={`text${index}`}
				  className="opacity-0 translate-y-4 max-w-[660px] min-w-[300px] text-lg font-inter leading-8 font-normal text-[#FFFFFF99]"
				  dangerouslySetInnerHTML={{ __html: block.text }}
				/>
			  </div>
			))}
		</div>
	);
  }

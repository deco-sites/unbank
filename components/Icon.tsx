import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons = "UnbankLogo";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  id: AvailableIcons;
  size?: number;
}

function Icon(
  { id, strokeWidth = 16, size, width, height, ...otherProps }: Props,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;

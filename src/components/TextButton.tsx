import { type JSX } from "react";
import type { TextButtonProp } from "../types/models";

function TextButton({
  text,
  className,
  handleClick,
}: TextButtonProp): JSX.Element {
  return (
    <button className={className} type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default TextButton;

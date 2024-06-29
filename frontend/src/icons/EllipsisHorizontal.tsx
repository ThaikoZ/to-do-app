import classnames from "classnames";
import { Props } from "./index.ts";

const EllipsisHorizontal = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      className={classnames(
        className,
        "w-4 stroke-current fill-none stroke-primary-200 group-hover:stroke-white"
      )}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
};

export default EllipsisHorizontal;

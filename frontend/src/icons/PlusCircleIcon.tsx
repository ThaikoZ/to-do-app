import classnames from "classnames";
import { Props } from "./index.ts";

const PlusCircleIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      className={classnames(
        className,
        "w-4 stroke-current fill-none stroke-primary-200 group-hover:stroke-white"
      )}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};

export default PlusCircleIcon;

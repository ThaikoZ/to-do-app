import classnames from "classnames";
import { Props } from "./index.ts";

const CloseIcon = ({ className }: Props) => {
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
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CloseIcon;

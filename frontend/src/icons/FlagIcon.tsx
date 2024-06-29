import classnames from "classnames";
import { Props } from "./index.ts";

const FlagIcon = ({ className }: Props) => {
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
        d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
      />
    </svg>
  );
};

export default FlagIcon;

import classnames from "classnames";
import { Props } from "./index.ts";

const CheckIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      fill="#6161ff"
      className={classnames(
        className,
        "w-4 stroke-current fill-none stroke-primary-200 group-hover:stroke-white"
      )}
    >
      <path d="M6.00008 10.8001L3.20008 8.0001L2.33341 8.86677L6.00008 12.5334L14.0001 4.53343L13.1334 3.66676L6.00008 10.8001Z" />
    </svg>
  );
};

export default CheckIcon;

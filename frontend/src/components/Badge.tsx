import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

const Badge = ({ className, children }: Props) => {
  return (
    <div
      className={classNames(
        className,
        "w-min px-3 py-0.5 rounded-full border-[1px] border-rose-500 text-rose-500 overflow-hidden font-medium backdrop-blur-sm "
      )}
    >
      {children}
    </div>
  );
};

export default Badge;

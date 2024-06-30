import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  className?: string;
  h?: 1 | 2 | 3;
  children: ReactNode;
}

const headerMap = {
  1: "text-[2rem]",
  2: "text-[1.45rem]",
  3: "text-[1.15rem]",
};

const Header = ({ className, h, children }: Props) => {
  return (
    <h1
      className={classNames(
        className,
        headerMap[h || 2],
        "font-medium pb-4 text-primary-900"
      )}
    >
      {children}
    </h1>
  );
};

export default Header;

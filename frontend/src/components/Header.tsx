import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  className?: string;
  children: ReactNode;
}

const Header = ({ className, children }: Props) => {
  return (
    <h1
      className={classNames(
        className,
        "text-[1.45rem] font-medium pb-4 text-primary-900"
      )}
    >
      {children}
    </h1>
  );
};

export default Header;

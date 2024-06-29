import classnames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  classNames?: string;
  onClick?: () => void;
}

const Button = ({ children, classNames, onClick }: Props) => {
  return (
    <div
      className={classnames(
        classNames,
        "flex gap-2 px-3 py-2.5  bg-primary-500 h-fit w-max rounded-xl text-white cursor-pointer font-regular hover:bg-primary-600 active:bg-primary-500 "
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;

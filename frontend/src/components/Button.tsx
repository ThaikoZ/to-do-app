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
        "py-2.5 px-5 bg-zinc-900 rounded-lg text-white cursor-pointer hover:bg-zinc-800 active:bg-zinc-900"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;

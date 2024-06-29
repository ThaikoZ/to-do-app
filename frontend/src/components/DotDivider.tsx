import classNames from "classnames";

const DotDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={classNames(
        className,
        "w-1 h-1 rounded-full bg-primary-150 group-hover:bg-white"
      )}
    />
  );
};

export default DotDivider;

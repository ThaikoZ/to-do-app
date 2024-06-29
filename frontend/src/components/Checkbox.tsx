import { useState } from "react";
import classnames from "classnames";

interface Props {
  className?: string;
}

const Checkbox = ({ className }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeHandle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <input
        type="checkbox"
        onChange={onChangeHandle}
        checked={isChecked}
        className={classnames(className, "custom-checkbox  transition colors")}
      />
    </>
  );
};

export default Checkbox;

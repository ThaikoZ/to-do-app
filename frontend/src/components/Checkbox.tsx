import classnames from "classnames";
import { useTaskContext } from "../context/ListItemContext";

interface Props {
  className?: string;
  index: number;
}

const Checkbox = ({ className, index }: Props) => {
  const { tasks, switchStatus } = useTaskContext();

  return (
    <input
      type="checkbox"
      onChange={() => switchStatus(index)}
      checked={tasks[index].status == "DONE"}
      className={classnames(className, "custom-checkbox  transition colors")}
    />
  );
};

export default Checkbox;

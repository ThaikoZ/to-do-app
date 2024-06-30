import classnames from "classnames";
import ListItem from "./ListItem";
import { useTaskContext } from "../../context/ListItemContext";

interface Props {
  className?: string;
}

const TaskList = ({ className }: Props) => {
  const { tasks } = useTaskContext();

  return (
    <ol className={classnames(className, "flex flex-col gap-5")}>
      {tasks.length ? (
        tasks.map((_, index) => <ListItem key={index} index={index} />)
      ) : (
        <div className="flex justify-center pt-5">No more things to do</div>
      )}
    </ol>
  );
};

export default TaskList;

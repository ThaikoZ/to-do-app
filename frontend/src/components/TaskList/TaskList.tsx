import ListItem, { Task } from "./ListItem";
import classnames from "classnames";

interface Props {
  className?: string;
  tasksData: Task[];
}

const TaskList = ({ className, tasksData }: Props) => {
  return (
    <ol className={classnames(className, "flex flex-col gap-5")}>
      {tasksData.map((task, index) => (
        <ListItem
          key={index}
          title={task.title}
          links={task.links}
          comments={task.comments}
          date={task.date}
          flagged={task.flagged}
        />
      ))}
    </ol>
  );
};

export default TaskList;

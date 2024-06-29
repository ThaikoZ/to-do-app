import classnames from "classnames";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import { Task } from "../../utils/task";

const tasksData = [
  {
    id: 1,
    title: "Code Review",
    links: 4,
    comments: 12,
    date: "22 Jan 2023",
    isFlagged: false,
  },
  {
    id: 2,
    title: "Meetings with Ragazo Company",
    links: 4,
    comments: 12,
    date: "22 Apr 2023",
    isFlagged: true,
  },
  {
    id: 3,
    title: "Documenting on Github and trying to ",
    links: 0,
    comments: 0,
    date: "",
    isFlagged: false,
  },
];

interface Props {
  className?: string;
}

const TaskList = ({ className }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // axios connect
    setTasks(tasksData);
  }, []);

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const switchFlag = (index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        isFlagged: !updatedTasks[index].isFlagged,
      };
      return updatedTasks;
    });
  };

  return (
    <ol className={classnames(className, "flex flex-col gap-5")}>
      {tasks.map((task, index) => (
        <ListItem
          key={index}
          task={task}
          index={index}
          onDelete={removeTask}
          onChangeFlag={switchFlag}
        />
      ))}
    </ol>
  );
};

export default TaskList;

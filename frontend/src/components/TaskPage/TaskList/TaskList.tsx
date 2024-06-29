import classnames from "classnames";
import ListItem from "./ListItem";
import { useEffect } from "react";
import { useTaskContext } from "../../../context/ListItemContext";

const tasksData = [
  {
    id: 1,
    status: "TODO",
    title: "Code Review",
    links: 4,
    comments: 12,
    date: "22 Jan 2023",
    isFlagged: false,
  },
  {
    id: 2,
    status: "TODO",
    title: "Meetings with Ragazo Company",
    links: 4,
    comments: 12,
    date: "22 Apr 2023",
    isFlagged: true,
  },
  {
    id: 3,
    status: "DONE",
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
  const { tasks, setTasks } = useTaskContext();

  useEffect(() => {
    // axios connect
    setTasks(tasksData);
  }, []);

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

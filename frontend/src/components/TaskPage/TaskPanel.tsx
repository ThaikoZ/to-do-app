import Button from "../Button";
import NavMenu from "../NavMenu";
import TaskList from "./TaskList/TaskList";
import { TaskProvider } from "../../context/ListItemContext";
import { PlusCircleIcon } from "../../icons";
import Header from "../Header";

const TaskListPanel = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const month = today.toLocaleString("default", { month: "long" });
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    const day = today.getDate();
    const currentDate = `Today, ${day} ${capitalizedMonth}`;

    return currentDate;
  };

  return (
    <div className="px-7 pt-7">
      <div className="flex justify-between">
        <div>
          <Header>{getCurrentDate()}</Header>
          <NavMenu />
        </div>
        <div className="flex items-center">
          <Button>
            <PlusCircleIcon className="w-6 stroke-white" /> New Task
          </Button>
        </div>
      </div>
      <TaskProvider>
        <TaskList className="w-full" />
      </TaskProvider>
    </div>
  );
};

export default TaskListPanel;

import DotDivider from "../components/DotDivider";
import Header from "../components/Header";
import Button from "../components/Button";
import NavMenu from "../components/NavMenu";
import { TaskProvider } from "./../context/ListItemContext";
import { PlusCircleIcon } from "./../icons";
import TaskList from "../components/TaskList/TaskList";

const TaskPage = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const month = today.toLocaleString("default", { month: "long" });
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    const day = today.getDate();
    const currentDate = `Today, ${day} ${capitalizedMonth}`;

    return currentDate;
  };
  return (
    <div className="flex justify-center w-full selection:bg-none ">
      <div className="flex-col w-full min-w-[475px] max-w-[900px] py-10">
        <div className="shadow-sm px-7 border-primary-100">
          <div className="flex items-center gap-3 pb-2 text-primary-800">
            General <DotDivider /> Todo
          </div>
          <Header className="pb-5" h={1}>
            Todo
          </Header>
        </div>
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
      </div>
    </div>
  );
};

export default TaskPage;

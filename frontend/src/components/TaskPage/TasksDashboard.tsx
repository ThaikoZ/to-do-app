import DotDivider from "../DotDivider";
import Header from "../Header";
import Button from "../Button";
import NavMenu from "./NavMenu";
import { PlusCircleIcon } from "../../icons";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import { useTaskContext } from "../../context/ListItemContext";
import { useEffect } from "react";
import classNames from "classnames";

const tasksData = [
  {
    id: 1,
    status: "TODO",
    title: "Code Review",
    description: "Check all the files",
    links: 4,
    comments: 12,
    date: "22 Jan 2023",
    isFlagged: false,
  },
  {
    id: 2,
    status: "TODO",
    title: "Meetings with Ragazo Company",
    description: "Meet with a guys",
    links: 4,
    comments: 12,
    date: "22 Apr 2023",
    isFlagged: true,
  },
  {
    id: 3,
    status: "DONE",
    title: "Documenting on Github and trying to ",
    description: "Push to Github",
    links: 0,
    comments: 0,
    date: "",
    isFlagged: false,
  },
];

const TasksDashboard = () => {
  const { setTasks, selectedTaskId } = useTaskContext();

  useEffect(() => {
    // axios connect
    setTasks(tasksData);
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    const month = today.toLocaleString("default", { month: "long" });
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    const day = today.getDate();
    const currentDate = `Today, ${day} ${capitalizedMonth}`;

    return currentDate;
  };

  return (
    <div className="grid grid-cols-8 w-full ">
      <div
        className={classNames(
          { "lg:col-span-5": selectedTaskId != -1 },
          "row-span-1 col-span-8  flex justify-center w-full selection:bg-none pb-10"
        )}
      >
        <div className="flex-col w-full min-w-[475px] max-w-[900px] pt-10 ">
          <div className="shadow-sm px-7 border-primary-100 ">
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
            <TaskList className="w-full" />
          </div>
        </div>
      </div>
      <TaskDetails />
    </div>
  );
};

export default TasksDashboard;

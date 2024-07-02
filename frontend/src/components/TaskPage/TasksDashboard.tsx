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
import axiosInstance from "../../services/api-client";
import { convertDBTasksToTasks } from "../../utils/task";
import { useUserContext } from "../../context/UserContext";

const TasksDashboard = () => {
  const { tasks, setTasks, selectedTaskId, hidePanel, addTask, setTask } =
    useTaskContext();
  const { logout } = useUserContext();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get("/app/tasks");
        const newTasks = convertDBTasksToTasks(response.data.results);
        setTasks(newTasks);
        console.log(newTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setTasks([]);
      }
    };

    fetchTasks();
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
    <div className="grid grid-cols-8">
      <div
        className={classNames(
          {
            "h-[45vh] overflow-y-auto lg:h-full lg:col-span-5 lg:overflow-visible no-scrollbar":
              selectedTaskId != -1,
          },
          "col-span-8 overflow-x-hidden w-full "
        )}
      >
        <div
          className={classNames(
            "row-span-1 col-span-8  flex justify-center w-full selection:bg-none pb-10"
          )}
        >
          <div className="flex-col w-full min-w-[475px] max-w-[900px] pt-10 ">
            <div className="shadow-sm px-7 border-primary-100 ">
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center gap-3 pb-2 text-primary-800">
                    General <DotDivider /> Todo
                  </div>
                  <Header className="pb-5" h={1}>
                    Todo
                  </Header>
                </div>
                <div
                  className="cursor-pointer px-3 py-2 bg-primary-500 text-white hover:bg-primary-600 size-fit rounded-xl"
                  onClick={logout}
                >
                  Logout
                </div>
              </div>
            </div>
            <div className="px-7 pt-7">
              <div className="flex justify-between">
                <div>
                  <Header>{getCurrentDate()}</Header>
                  <NavMenu />
                </div>
                <div className="flex items-center">
                  <Button onClick={addTask}>
                    <PlusCircleIcon className="w-6 stroke-white" /> New Task
                  </Button>
                </div>
              </div>
              <TaskList className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {!(tasks.length == 0 || selectedTaskId < 0 || !tasks[selectedTaskId]) && (
        <TaskDetails
          task={tasks[selectedTaskId]}
          hide={hidePanel}
          setTask={setTask}
          className="row-span-2 col-span-8 lg:col-span-3 lg:sticky lg:top-0"
        />
      )}
    </div>
  );
};

export default TasksDashboard;

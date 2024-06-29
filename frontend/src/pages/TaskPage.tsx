import DotDivider from "../components/DotDivider";
import Header from "../components/Header";
import TaskListPanel from "../components/TaskPage/TaskPanel";

const TaskPage = () => {
  return (
    <div className="flex justify-center selection:bg-none ">
      <div className="flex-col w-full min-w-[475px] max-w-[900px] py-10">
        <div className="shadow-sm px-7 border-primary-100">
          <div className="flex items-center gap-3 pb-2 text-primary-800">
            General <DotDivider /> Todo
          </div>
          <Header className="pb-5" h={1}>
            Todo
          </Header>
        </div>
        <TaskListPanel />
      </div>
    </div>
  );
};

export default TaskPage;

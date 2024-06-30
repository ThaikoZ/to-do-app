import Header from "../Header";
import { ChatIcon, CloseIcon, LinkIcon } from "../../icons";
import { useTaskContext } from "../../context/ListItemContext";

const TaskDetails = () => {
  const { tasks, selectedTaskId, setSelectedTaskId } = useTaskContext();

  if (tasks.length == 0 || selectedTaskId < 0) {
    setSelectedTaskId(-1);
    return;
  }

  return (
    <div className="row-span-2 col-span-8 lg:col-span-3 w-full p-7 border-t-[1px] lg:border-t-none lg:border-s-[1px] lg:h-[100vh]">
      <div className="flex justify-between  mb-5 items-center">
        <Header className="pb-0" h={2}>
          Task Details
        </Header>

        <div
          className="cursor-pointer hover:bg-primary-100 rounded-lg flex items-center"
          onClick={() => setSelectedTaskId(-1)}
        >
          <CloseIcon className="w-6" />
        </div>
      </div>
      <div className="px-4 py-3 border-[1px] w-full rounded-xl">
        <div className="pb-7">
          <p className="text-primary-200 text-sm pb-2">My Work Task</p>
          <Header className="pb-1.5" h={2}>
            {tasks[selectedTaskId].title}
          </Header>
          <p className="text-primary-900">
            {tasks[selectedTaskId].description}
          </p>
        </div>
        <div className="flex gap-5 text-[1.05rem]">
          <div className="flex flex-col gap-3 text-primary-150  ">
            <p>Timeline</p>
            <p>Time</p>
            <p>Assignee</p>
            <p>Type</p>
          </div>
          <div className="flex flex-col gap-3 text-primary-900 font-medium">
            <p>{tasks[selectedTaskId].date || "-- --- ----"}</p>
            <p>09:30</p>
            <p>Admin</p>
            <p>Daily Task</p>
          </div>
        </div>
        <div className="flex gap-3 items-center pt-8">
          <LinkIcon className="w-5 stroke-primary-900" />
          <h2 className="text-[1.15rem] font-medium text-primary-900">
            Attachment
          </h2>
        </div>
        <div className="flex gap-3 items-center pt-8">
          <ChatIcon className="w-5 stroke-primary-900" />
          <h2 className="text-[1.15rem] font-medium text-primary-900">
            Comments
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;

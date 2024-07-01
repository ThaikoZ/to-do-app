import Header from "../Header";
import { ChatIcon, LinkIcon } from "../../icons";
import classNames from "classnames";
import { useState } from "react";
import { Task } from "../../utils/task";

interface Props {
  className?: string;
  task: Task;
  hide: () => void;
  setTask: (task: Task) => void;
}

const TaskDetails = ({ className, task, hide, setTask }: Props) => {
  const [inputs, setInputs] = useState(task);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTask(inputs);
    hide();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(
        className,
        "bg-white  p-7 border-t-[1px] lg:border-t-none lg:border-s-[1px] lg:h-[100vh]"
      )}
    >
      <div className="flex justify-between  mb-5 items-center">
        <Header className="pb-0" h={2}>
          Task Details
        </Header>

        <button
          type="submit"
          className="cursor-pointer hover:bg-primary-100 rounded-lg flex items-center p-2 font-medium text-primary-900"
        >
          Save
        </button>
      </div>
      <div className="px-4 py-3 border-[1px] w-full rounded-xl">
        <div className="pb-7">
          <p className="text-primary-200 text-sm pb-2">My Work Task</p>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            className="bg-none outline-none border-none font-medium text-[1.45rem] text-primary-900 w-full placeholder:text-primary-900"
            placeholder={"Title"}
            value={inputs.title}
          />
          <input
            onChange={handleChange}
            type="text"
            name="description"
            className="bg-none outline-none border-none  text-primary-900 w-full placeholder:text-primary-900"
            placeholder={"Description"}
            value={inputs.description}
          />
        </div>
        <div className="flex gap-5 text-[1.05rem]">
          <div className="flex flex-col gap-3 text-primary-150  ">
            <p>Timeline</p>
            <p>Time</p>
            <p>Assignee</p>
            <p>Type</p>
          </div>
          <div className="flex flex-col gap-3 text-primary-900 font-medium">
            <p>{task.date || "-- --- ----"}</p>
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
    </form>
  );
};

export default TaskDetails;

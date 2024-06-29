import classNames from "classnames";
import Checkbox from "../../components/Checkbox";
import { LinkIcon, ChatIcon, CalendarIcon, FlagIcon } from "../../icons";
import { Task } from "../../utils/task";
import DotDivider from "../DotDivider";
import DropdownItemMenu from "./DropdownItemMenu";

interface Props {
  index: number;
  task: Task;
  onChangeFlag: (index: number) => void;
  onDelete: (index: number) => void;
}

const ListItem = ({ task, index, onChangeFlag, onDelete }: Props) => {
  const convertDate = (date: string) => {
    // TODO: ConvertDate func to => DD MMM YYYY format exmple: 22 Jan 2023
    return date;
  };

  return (
    <li className="group flex border-sm rounded-xl p-3 pb-4 text-white gap-3 outline outline-2 outline-primary-100 cursor-pointer hover:bg-primary-500  hover:border-primary-600 transition-colors overflow-hidden">
      <div className="flex items-start ">
        <Checkbox className={`mt-[0.2rem] group-hover:bg-primary-500 `} />
      </div>
      <div className="flex flex-col w-full">
        <h3 className="font-medium text-primary-900 text-lg group-hover:text-white">
          {task.title}
        </h3>
        <div className="flex items-center gap-2 text-primary-200 group-hover:text-white">
          <div className="flex gap-[2px]">
            <LinkIcon />
            <p>{task.links}</p>
          </div>
          <DotDivider />
          <div className=" flex gap-1">
            <ChatIcon />
            <p>{task.comments}</p>
          </div>
          <DotDivider />
          <div className=" flex gap-1">
            <CalendarIcon />
            <p>{convertDate(task.date || "-- --- ----")}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-start pe-0.5 pt-0.5">
        <div onClick={() => onChangeFlag(index)}>
          <FlagIcon
            className={classNames(
              { "fill-rose-500 group-hover:fill-white": task.isFlagged },
              " stroke-rose-500 w-5"
            )}
          />
        </div>
        {/* TODO: Menu Show, SetFlag, Edit, Delete,, Edit etc */}
        <div className="flex items-center text-black group-hover:text-white">
          <DropdownItemMenu onDeleteHandle={onDelete} index={index} />
        </div>
      </div>
    </li>
  );
};

export default ListItem;

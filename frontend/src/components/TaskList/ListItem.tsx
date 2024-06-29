import Checkbox from "../../components/Checkbox";
import {
  LinkIcon,
  ChatIcon,
  CalendarIcon,
  FlagIcon,
  EllipsisHorizontal,
} from "../../icons";
import Badge from "../Badge";

export interface Task {
  title: string;
  links?: number;
  comments?: number;
  date?: string;
  flagged?: boolean;
}

const ListItem = ({ title, links, comments, date, flagged }: Task) => {
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
          {title}
        </h3>
        <div className="flex items-center gap-2 text-primary-200 group-hover:text-white">
          <div className="flex gap-[2px]">
            <LinkIcon />
            <p>{links}</p>
          </div>
          <div className="w-1 h-1 rounded-full bg-primary-200 group-hover:bg-white" />
          <div className=" flex gap-1">
            <ChatIcon />
            <p>{comments}</p>
          </div>
          <div className="w-1 h-1 rounded-full bg-primary-200 group-hover:bg-white" />
          <div className=" flex gap-1">
            <CalendarIcon />
            <p>{convertDate(date || "")}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-start pe-0.5 pt-0.5">
        {/* TODO: Set flagg for item */}
        {flagged ? (
          <FlagIcon className="fill-rose-500 stroke-rose-500 w-5 group-hover:fill-white" />
        ) : (
          <FlagIcon className=" stroke-rose-500 w-5" />
        )}
        {/* TODO: Menu Show, SetFlag, Edit, Delete,, Edit etc */}
        <div className="flex items-center text-black group-hover:text-white">
          <EllipsisHorizontal className="stroke-primary-200 w-5" />
        </div>
      </div>
    </li>
  );
};

export default ListItem;

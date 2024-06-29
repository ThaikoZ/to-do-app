import classNames from "classnames";
import Checkbox from "../../components/Checkbox";
import { LinkIcon, ChatIcon, CalendarIcon, FlagIcon } from "../../icons";
import DotDivider from "../DotDivider";
import DropdownItemMenu from "./DropdownItemMenu";
import { useTaskContext } from "../../context/ListItemContext";

interface Props {
  index: number;
}

const ListItem = ({ index }: Props) => {
  const { tasks, switchFlag } = useTaskContext();

  const convertDate = (date: string) => {
    // TODO: ConvertDate func to => DD MMM YYYY format exmple: 22 Jan 2023
    return date;
  };

  return (
    <li className="group flex border-sm rounded-xl p-3 pb-4 text-white gap-3 outline outline-2 outline-primary-100 cursor-pointer hover:bg-primary-500  hover:border-primary-600 transition-colors overflow-hidden">
      <div className="flex items-start ">
        <Checkbox
          index={index}
          className={`mt-[0.2rem] group-hover:bg-primary-500 `}
        />
      </div>
      <div className="flex flex-col w-full">
        <h3 className="font-medium text-primary-900 text-lg group-hover:text-white">
          {tasks[index].title}
        </h3>
        <div className="flex items-center gap-2 text-primary-200 group-hover:text-white">
          <div className="flex gap-[2px]">
            <LinkIcon />
            <p>{tasks[index].links}</p>
          </div>
          <DotDivider />
          <div className=" flex gap-1">
            <ChatIcon />
            <p>{tasks[index].comments}</p>
          </div>
          <DotDivider />
          <div className=" flex gap-1">
            <CalendarIcon />
            <p>{convertDate(tasks[index].date || "-- --- ----")}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-start pe-0.5 pt-0.5">
        <div onClick={() => switchFlag(index)}>
          <FlagIcon
            className={classNames(
              {
                "fill-rose-500 group-hover:fill-white": tasks[index].isFlagged,
              },
              " stroke-rose-500 w-5"
            )}
          />
        </div>
        {/* TODO: Menu Show, SetFlag, Edit, Delete,, Edit etc */}
        <div className="flex items-center text-black group-hover:text-white">
          <DropdownItemMenu index={index} />
        </div>
      </div>
    </li>
  );
};

export default ListItem;

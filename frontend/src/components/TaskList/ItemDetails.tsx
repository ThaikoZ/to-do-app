import { LinkIcon, ChatIcon, CalendarIcon } from "../../icons";
import DotDivider from "../DotDivider";
import { useTaskContext } from "../../context/ListItemContext";

const ItemDetails = ({ index }: { index: number }) => {
  const { tasks } = useTaskContext();

  const convertDate = (date: string) => {
    // TODO: ConvertDate func to => DD MMM YYYY format exmple: 22 Jan 2023
    return date;
  };

  return (
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
  );
};

export default ItemDetails;

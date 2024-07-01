import classNames from "classnames";
import Checkbox from "./Checkbox";
import { FlagIcon } from "../../icons";
import DropdownItemMenu from "./DropdownItemMenu";
import { useTaskContext } from "../../context/ListItemContext";
import ItemDetails from "./ItemDetails";
import TrashIcon from "../../icons/TrashIcon";

interface Props {
  index: number;
}

const ListItem = ({ index }: Props) => {
  const { tasks, switchFlag, removeTask, setSelectedTaskId } = useTaskContext();

  const handleItemClick = () => {
    setSelectedTaskId(index);
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      {tasks[index].status === "TODO" ? (
        <li
          className={
            "group flex border-sm rounded-xl p-3 text-white gap-3 outline outline-2 outline-primary-100 cursor-pointer hover:bg-primary-500 hover:border-primary-600 transition-colors overflow-hidden z-0"
          }
          onClick={handleItemClick}
        >
          <div className="flex items-start" onClick={stopPropagation}>
            <Checkbox
              index={index}
              className="mt-[0.2rem] group-hover:bg-primary-500"
            />
          </div>
          <div className="flex flex-col w-full" onClick={handleItemClick}>
            <h3 className="font-medium text-primary-900 text-lg group-hover:text-white">
              {tasks[index].title}
            </h3>
            <p className="text-primary-200 pb-1 group-hover:text-white">
              {tasks[index].description}
            </p>
            <ItemDetails index={index} />
          </div>

          <div
            className="flex gap-3 items-start pe-0.5 pt-0.5"
            onClick={stopPropagation}
          >
            <div onClick={() => switchFlag(index)}>
              <FlagIcon
                className={classNames(
                  {
                    "fill-rose-500 group-hover:fill-white":
                      tasks[index].isFlagged,
                  },
                  "stroke-rose-500 w-5"
                )}
              />
            </div>
            <div className="flex items-center text-black group-hover:text-white">
              <DropdownItemMenu index={index} />
            </div>
          </div>
        </li>
      ) : (
        <li className="group flex border-sm rounded-xl p-3 bg-primary-100 text-white gap-3 outline outline-2 outline-primary-100 transition-colors overflow-hidden">
          <div className="flex items-start" onClick={stopPropagation}>
            <Checkbox
              index={index}
              className="mt-[0.2rem] group-hover:bg-primary-500"
            />
          </div>
          <div className="flex flex-col w-full">
            <h3 className="font-medium text-lg text-primary-150">
              <del>{tasks[index].title}</del>
            </h3>
          </div>
          <div
            className="flex items-center pe-1"
            onClick={(event) => {
              stopPropagation(event);
              removeTask(index);
            }}
          >
            <TrashIcon className="stroke-rose-500 hover:stroke-rose-500 w-5 cursor-pointer hover:fill-rose-500 hover:stroke-rose-500" />
          </div>
        </li>
      )}
    </>
  );
};

export default ListItem;

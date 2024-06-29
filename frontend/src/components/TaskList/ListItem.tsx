import classNames from "classnames";
import Checkbox from "./Checkbox";
import { FlagIcon } from "../../icons";
import DropdownItemMenu from "./DropdownItemMenu";
import { useTaskContext } from "../../context/ListItemContext";
import ItemDetails from "./ItemDetails";

interface Props {
  index: number;
}

const ListItem = ({ index }: Props) => {
  const { tasks, switchFlag } = useTaskContext();

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
        <ItemDetails index={index} />
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
        <div className="flex items-center text-black group-hover:text-white">
          <DropdownItemMenu index={index} />
        </div>
      </div>
    </li>
  );
};

export default ListItem;

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { EllipsisHorizontalIcon } from "../../icons";
import classNames from "classnames";

interface Props {
  onDeleteHandle: (index: number) => void;
  index: number;
}

const dropdownItemClass =
  "hover:bg-primary-100 w-40 px-3 h-10 flex items-center cursor-pointer active:bg-white outline-none font-regular";

const DropdownItemMenu = ({ onDeleteHandle, index }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="outline-none hover:bg-primary-600 rounded-md w-6 h-6 flex justify-center items-center">
          <EllipsisHorizontalIcon className="w-5" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white py-2 border-[1px] rounded-xl"
          sideOffset={5}
        >
          <DropdownMenu.Label className="px-3 font-regular text-sm text-primary-200 pb-1">
            Options
          </DropdownMenu.Label>
          <DropdownMenu.Item className={classNames(dropdownItemClass, "")}>
            Mark as done
          </DropdownMenu.Item>
          <DropdownMenu.Item className={classNames(dropdownItemClass, "")}>
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={classNames(dropdownItemClass, "text-rose-500")}
            onClick={() => onDeleteHandle(index)}
          >
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownItemMenu;

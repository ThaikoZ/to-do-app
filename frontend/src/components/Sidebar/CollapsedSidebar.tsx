import { MenuIcon } from "../../icons";
import classNames from "classnames";
import { NavItem } from "./Sidebar";

interface Props {
  navItems: NavItem[];
  switchOpenHandle: () => void;
  hidden?: boolean;
}

const CollapsedSidebar = ({
  navItems,
  switchOpenHandle,
  hidden = false,
}: Props) => {
  return (
    <div
      className={classNames(
        { "md:hidden": hidden },
        "flex flex-col min-w-[80px] max-w-[80px] bg-primary-100 gap-5 py-7 items-center"
      )}
    >
      <div className="flex justify-center w-fit bg-white h-12 px-3 rounded-xl shadow-[0_1px_20px_0px_rgba(0,0,0,0.02)]">
        <div
          className="flex items-center w-6 my-3 cursor-pointer hover:bg-primary-100 rounded-md active:bg-white"
          onClick={switchOpenHandle}
        >
          <MenuIcon className="w-full" />
        </div>
      </div>
      <div className="border-b-2 my-3 border-primary-125 w-3/5" />
      <ul className="flex flex-col gap-3">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={classNames(
              {
                "font-medium text-primary-900 outline outline-1 outline-primary-125 bg-white":
                  index == 0,
              },
              {
                "hover:bg-primary-500 hover:text-white active:bg-primary-600":
                  index != 0,
              },
              "group flex items-center justify-center px-3 w-full h-12 rounded-xl cursor-pointer transition-colors"
            )}
          >
            <item.icon
              className={classNames(
                {
                  "stroke-primary-500 hover:stroke-primary-500": index == 0,
                },
                {
                  "group-hover:stroke-white": index != 0,
                },
                "w-6 h-6"
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollapsedSidebar;

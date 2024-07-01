import { MenuIcon } from "../../icons";
import DialogBox from "./DialogBox";
import classNames from "classnames";
import { NavItem } from "./Sidebar";
import { useUserContext } from "../../context/UserContext";

interface Props {
  navItems: NavItem[];
  switchOpenHandle: () => void;
}

const OpenedSidebar = ({ navItems, switchOpenHandle }: Props) => {
  const { user } = useUserContext();

  return (
    <div className="hidden md:flex flex-col min-w-[275px] max-w-[275px] bg-primary-100 justify-between p-7 ">
      <div>
        <div className="flex justify-between bg-white h-12 px-2 rounded-xl shadow-[0_1px_20px_0px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-center gap-2 font-medium">
            <div className="flex items-center justify-center text-white  rounded-full h-8 w-8 bg-rose-500">
              {`${user?.first_name[0] || user?.username[0]}`.toUpperCase()}
            </div>
            <div className="text-primary-900">
              {user?.first_name || user?.username}'s Space
            </div>
          </div>
          <div
            className="flex items-center w-6 my-3 cursor-pointer hover:bg-primary-100 rounded-md active:bg-white"
            onClick={switchOpenHandle}
          >
            <MenuIcon className="w-full" />
          </div>
        </div>
        <div>
          <p className="pt-7 text-sm text-primary-150 pb-5">General</p>
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
                  "group flex items-center px-3 w-full h-12 rounded-xl cursor-pointer transition-colors"
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
                    "w-6 h-6 mr-3"
                  )}
                />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <DialogBox />
    </div>
  );
};

export default OpenedSidebar;

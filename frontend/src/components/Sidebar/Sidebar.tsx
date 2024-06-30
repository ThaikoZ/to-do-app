import { useState } from "react";
import { CalendarIcon, InboxIcon, StackIcon, TrashIcon } from "../../icons";
import OpenedSidebar from "./OpenedSidebar";
import CollapsedSidebar from "./CollapsedSidebar";

export interface NavItem {
  title: string;
  href: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const navItems = [
  { title: "Todo", href: "", icon: StackIcon },
  { title: "Inbox", href: "", icon: InboxIcon },
  { title: "Calendar", href: "", icon: CalendarIcon },
  { title: "Trash", href: "", icon: TrashIcon },
];

const Sidebar = () => {
  const [isOpen, setOpen] = useState<boolean>(true);

  const switchOpenHandle = () => {
    setOpen(!isOpen);
  };

  //

  return (
    <>
      {isOpen ? (
        <>
          <OpenedSidebar
            navItems={navItems}
            switchOpenHandle={switchOpenHandle}
          />
          <CollapsedSidebar
            navItems={navItems}
            switchOpenHandle={switchOpenHandle}
            hidden
          />
        </>
      ) : (
        <CollapsedSidebar
          navItems={navItems}
          switchOpenHandle={switchOpenHandle}
        />
      )}
    </>
  );
};

export default Sidebar;

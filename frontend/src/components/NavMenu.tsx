import classnames from "classnames";

const navMenu = ["List", "Board", "Timeline", "Calendar"];

const NavMenu = () => {
  return (
    <ul className="flex gap-6 pb-5 text-lg font-medium text-primary-200">
      {navMenu.map((title, index) => (
        <li
          className={classnames(
            { "text-primary-600": index == 0 },
            "cursor-pointer hover:text-primary-600 transition-colors"
          )}
        >
          {title}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;

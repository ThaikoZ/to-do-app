import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import TaskList from "./components/TaskList/TaskList";

const tasksData = [
  {
    title: "Code Review",
    links: 4,
    comments: 12,
    date: "22 Jan 2023",
    flagged: false,
  },
  {
    title: "Meetings with Ragazo Company",
    links: 4,
    comments: 12,
    date: "22 Jan 2023",
    flagged: true,
  },
  {
    title: "Documenting on Github",
    links: 3,
    comments: 12,
    date: "22 Jan 2023",
    flagged: false,
  },
];

function App() {
  return (
    <div className="flex justify-center selection:bg-none">
      <div className="bg-gray-200">d</div>
      <div className="flex-col p-7 pt-40 w-4/5">
        <div>
          <Header>Today, 22 April</Header>
          <NavMenu />
        </div>
        <TaskList className="w-full" tasksData={tasksData} />
      </div>
      <div className="bg-gray-200">d</div>
    </div>
  );
}

export default App;

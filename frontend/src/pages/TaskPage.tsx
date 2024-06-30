import TasksDashboard from "../components/TaskPage/TasksDashboard";
import { TaskProvider } from "../context/ListItemContext";

const TaskPage = () => {
  return (
    <TaskProvider>
      <TasksDashboard />
    </TaskProvider>
  );
};

export default TaskPage;

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Task } from "../utils/task";

// Define context type
interface TaskContextType {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  removeTask: (index: number) => void;
  switchFlag: (index: number) => void;
  switchStatus: (index: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const switchStatus = (index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        status: updatedTasks[index].status == "DONE" ? "TODO" : "DONE",
      };
      return updatedTasks;
    });
  };

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const switchFlag = (index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        isFlagged: !updatedTasks[index].isFlagged,
      };
      return updatedTasks;
    });
  };

  // TODO: Set Date

  const contextValue: TaskContextType = {
    tasks,
    setTasks,
    removeTask,
    switchFlag,
    switchStatus,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

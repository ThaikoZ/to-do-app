import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Task } from "../utils/task";

// Define context type
interface TaskContextType {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  removeTask: (index: number) => void;
  switchFlag: (index: number) => void;
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

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // TODO: SetFlagg
  const switchFlag = (index: number) => {
    let newTasks = tasks;
    newTasks[index].isFlagged = !newTasks[index].isFlagged;
    setTasks(newTasks);
  };

  // TODO: Set Date

  const contextValue: TaskContextType = {
    tasks,
    setTasks,
    addTask,
    removeTask,
    switchFlag,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

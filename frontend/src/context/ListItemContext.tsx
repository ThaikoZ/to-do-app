import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Task } from "../utils/task";
import axiosInstance from "../services/api-client";

// Define context type
interface TaskContextType {
  tasks: Task[];
  selectedTaskId: number;
  setSelectedTaskId: (id: number) => void;
  setTasks: (tasks: Task[]) => void;
  setTask: (tasks: Task) => void;
  addTask: () => void;
  removeTask: (index: number) => void;
  switchFlag: (index: number) => void;
  switchStatus: (index: number) => void;
  hidePanel: () => void;
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
  const [selectedTaskId, setSelectedTaskId] = useState<number>(-1);

  const addTask = () => {
    const newTask: Task = {
      id: -1,
      status: "TODO",
      title: "",
      description: "",
      links: 0,
      comments: 0,
      date: "",
      isFlagged: false,
    };

    setTasks([newTask, ...tasks]);
    setSelectedTaskId(0);
  };

  const setTask = (task: Task) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[selectedTaskId] = task;
      return updatedTasks;
    });
  };

  const switchStatus = (index: number) => {
    const status = tasks[index].status == "DONE" ? "TODO" : "DONE";
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        status: status,
      };
      return updatedTasks;
    });

    const payload = { status: status };

    axiosInstance
      .patch(`/app/tasks/${tasks[index].id}/`, payload)
      .catch((err) => console.error(err));
  };

  const removeTask = (index: number) => {
    if (index == selectedTaskId) setSelectedTaskId(-1);
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);

    axiosInstance
      .delete(`/app/tasks/${tasks[index].id}/`)
      .catch((err) => console.error(err));
  };

  const switchFlag = (index: number) => {
    const isFlagged = !tasks[index].isFlagged;
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        isFlagged: isFlagged,
      };
      return updatedTasks;
    });

    const payload = { is_flagged: isFlagged };

    axiosInstance
      .patch(`/app/tasks/${tasks[index].id}/`, payload)
      .catch((err) => console.error(err));
  };

  const hidePanel = () => {
    setSelectedTaskId(-1);
  };

  // TODO: Set Date

  const contextValue: TaskContextType = {
    tasks,
    setTasks,
    setTask,
    addTask,
    removeTask,
    switchFlag,
    switchStatus,
    selectedTaskId,
    setSelectedTaskId,
    hidePanel,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

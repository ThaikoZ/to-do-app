export interface Task {
  id: number;
  status: string | "TODO" | "DONE";
  title: string;
  description: string;
  links?: number;
  comments?: number;
  date?: string;
  isFlagged?: boolean;
}

export interface DB_Task {
  id: number;
  status: string;
  title: string;
  description: string;
  is_flagged: boolean;
  deadline_date: Date | null;
}

export const convertDBTasksToTasks = (dbTasks: DB_Task[]): Task[] => {
  return dbTasks.map((dbTask) => ({
    id: dbTask.id,
    status:
      dbTask.status === "TODO" || dbTask.status === "DONE"
        ? dbTask.status
        : "TODO",
    title: dbTask.title,
    description: dbTask.description,
    links: undefined,
    comments: undefined,
    date: undefined,
    isFlagged: dbTask.is_flagged,
  }));
};

export const convertTaskToDBTask = (task: Task): DB_Task => {
  return {
    id: task.id,
    status: task.status,
    title: task.title,
    description: task.description,
    is_flagged: task.isFlagged ?? false,
    deadline_date: null,
  };
};

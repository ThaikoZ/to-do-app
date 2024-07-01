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
        : "TODO", // Ensure status is either 'TODO' or 'DONE'
    title: dbTask.title,
    description: dbTask.description,
    links: undefined, // You can set default values or leave them undefined if they are optional
    comments: undefined,
    date: undefined,
    isFlagged: dbTask.is_flagged, // Rename is_flagged to isFlagged
  }));
};

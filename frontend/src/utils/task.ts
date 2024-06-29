export interface Task {
  id: number;
  status: string | "TODO" | "DONE";
  title: string;
  links?: number;
  comments?: number;
  date?: string;
  isFlagged?: boolean;
}

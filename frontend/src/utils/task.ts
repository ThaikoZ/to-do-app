export interface Task {
  id: number;
  title: string;
  links?: number;
  comments?: number;
  date?: string;
  isFlagged?: boolean;
}

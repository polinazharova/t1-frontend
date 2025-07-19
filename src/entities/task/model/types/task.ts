export type Priority = "Low" | "Medium" | "High";
export type Status = "To Do" | "In Progress" | "Done";
export type Category =
  | "Bug"
  | "Feature"
  | "Documentation"
  | "Refactor"
  | "Test";

export interface Tags {
  category: Category;
  status: Status;
  priority: Priority;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  tags: Tags;
  createdAt: Date;
  updatedAt: Date;
}

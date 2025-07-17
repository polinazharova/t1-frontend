type Priority = 'Low' | 'Medium' | 'High';
type Status = 'To Do' | 'In Progress' | 'Done';
type Category = "Bug" | "Feature" | "Documentation" | "Refactor" | "Test";

export interface Tags {
    category: Category;
    status: Status;
    priority: Priority;
}

export interface Task {
    id: number;
    title: string;
    description?: string;
    tags: Tags;
    createdAt: Date;
    updatedAt: Date;
}
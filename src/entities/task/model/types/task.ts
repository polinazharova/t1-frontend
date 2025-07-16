export interface Tags {
    category: string;
    status: string;
    priority: string;
}

export interface Task {
    id: number;
    title: string;
    description?: string;
    tags: Tags;
}
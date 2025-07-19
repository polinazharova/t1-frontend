import { Task } from "../types/task.ts";

export const mockTasks: Task[] = [
    {
        id: 1,
        title: "Implement user authentication",
        description: "Add JWT authentication to backend",
        tags: {
            category: "Feature",
            status: "In Progress",
            priority: "High"
        },
        createdAt: new Date("2023-10-15T09:30:00"),
        updatedAt: new Date("2023-10-18T14:45:00")
    },
    {
        id: 2,
        title: "Update API documentation",
        description: "Add new endpoints to Swagger",
        tags: {
            category: "Documentation",
            status: "To Do",
            priority: "Medium"
        },
        createdAt: new Date("2023-10-16T11:20:00"),
        updatedAt: new Date("2023-10-16T11:20:00")
    },
    {
        id: 3,
        title: "Fix cart total calculation",
        description: "Total doesn't update when removing items",
        tags: {
            category: "Bug",
            status: "In Progress",
            priority: "High"
        },
        createdAt: new Date("2023-10-17T13:15:00"),
        updatedAt: new Date("2023-10-19T10:30:00")
    },
    {
        id: 4,
        title: "Add filters to product catalog",
        tags: {
            category: "Feature",
            status: "To Do",
            priority: "Medium"
        },
        createdAt: new Date("2023-10-18T08:00:00"),
        updatedAt: new Date("2023-10-18T08:00:00")
    },
    {
        id: 5,
        title: "Optimize database queries",
        description: "Solve N+1 problem in orders loading",
        tags: {
            category: "Refactor",
            status: "In Progress",
            priority: "High"
        },
        createdAt: new Date("2023-10-12T10:45:00"),
        updatedAt: new Date("2023-10-17T16:20:00")
    },
    {
        id: 6,
        title: "Update CI/CD pipeline",
        tags: {
            category: "Feature",
            status: "To Do",
            priority: "Low"
        },
        createdAt: new Date("2023-10-19T09:10:00"),
        updatedAt: new Date("2023-10-19T09:10:00")
    },
    {
        id: 7,
        title: "Refactor ProductCard component",
        description: "Extract logic to custom hooks",
        tags: {
            category: "Refactor",
            status: "Done",
            priority: "Low"
        },
        createdAt: new Date("2023-10-10T14:30:00"),
        updatedAt: new Date("2023-10-15T11:45:00")
    },
    {
        id: 8,
        title: "Add API test coverage",
        description: "Write integration tests for all endpoints",
        tags: {
            category: "Test",
            status: "In Progress",
            priority: "Medium"
        },
        createdAt: new Date("2023-10-14T16:20:00"),
        updatedAt: new Date("2023-10-18T13:10:00")
    },
    {
        id: 9,
        title: "Integrate Stripe payment system",
        tags: {
            category: "Feature",
            status: "To Do",
            priority: "High"
        },
        createdAt: new Date("2023-10-17T15:00:00"),
        updatedAt: new Date("2023-10-19T09:30:00")
    },
    {
        id: 10,
        title: "Fix mobile layout issues",
        description: "Buttons overflow on small screens",
        tags: {
            category: "Bug",
            status: "To Do",
            priority: "Medium"
        },
        createdAt: new Date("2023-10-19T10:15:00"),
        updatedAt: new Date("2023-10-19T10:15:00")
    },
    {
        id: 11,
        title: "Write unit tests for utils",
        tags: {
            category: "Test",
            status: "To Do",
            priority: "Low"
        },
        createdAt: new Date("2023-10-18T14:00:00"),
        updatedAt: new Date("2023-10-18T14:00:00")
    },
    {
        id: 12,
        title: "Document new error codes",
        tags: {
            category: "Documentation",
            status: "Done",
            priority: "Low"
        },
        createdAt: new Date("2023-10-11T13:45:00"),
        updatedAt: new Date("2023-10-16T12:30:00")
    }
];

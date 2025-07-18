import { Task } from "../types/task.ts";

export const mockTasks: Task[] = [
    {
        "id": 1,
        "title": "Implement user authentication",
        "description": "Add JWT authentication to backend",
        "tags": {
            "category": "Feature",
            "status": "In Progress",
            "priority": "High"
        },
        "createdAt": "15.10.2023 09:30",
        "updatedAt": "18.10.2023 14:45"
    },
    {
        "id": 2,
        "title": "Update API documentation",
        "description": "Add new endpoints to Swagger",
        "tags": {
            "category": "Documentation",
            "status": "To Do",
            "priority": "Medium"
        },
        "createdAt": "16.10.2023 11:20",
        "updatedAt": "16.10.2023 11:20"
    },
    {
        "id": 3,
        "title": "Fix cart total calculation",
        "description": "Total doesn't update when removing items",
        "tags": {
            "category": "Bug",
            "status": "In Progress",
            "priority": "High"
        },
        "createdAt": "17.10.2023 13:15",
        "updatedAt": "19.10.2023 10:30"
    },
    {
        "id": 4,
        "title": "Add filters to product catalog",
        "tags": {
            "category": "Feature",
            "status": "To Do",
            "priority": "Medium"
        },
        "createdAt": "18.10.2023 08:00",
        "updatedAt": "18.10.2023 08:00"
    },
    {
        "id": 5,
        "title": "Optimize database queries",
        "description": "Solve N+1 problem in orders loading",
        "tags": {
            "category": "Refactor",
            "status": "In Progress",
            "priority": "High"
        },
        "createdAt": "12.10.2023 10:45",
        "updatedAt": "17.10.2023 16:20"
    },
    {
        "id": 6,
        "title": "Update CI/CD pipeline",
        "tags": {
            "category": "Feature",
            "status": "To Do",
            "priority": "Low"
        },
        "createdAt": "19.10.2023 09:10",
        "updatedAt": "19.10.2023 09:10"
    },
    {
        "id": 7,
        "title": "Refactor ProductCard component",
        "description": "Extract logic to custom hooks",
        "tags": {
            "category": "Refactor",
            "status": "Done",
            "priority": "Low"
        },
        "createdAt": "10.10.2023 14:30",
        "updatedAt": "15.10.2023 11:45"
    },
    {
        "id": 8,
        "title": "Add API test coverage",
        "description": "Write integration tests for all endpoints",
        "tags": {
            "category": "Test",
            "status": "In Progress",
            "priority": "Medium"
        },
        "createdAt": "14.10.2023 16:20",
        "updatedAt": "18.10.2023 13:10"
    },
    {
        "id": 9,
        "title": "Integrate Stripe payment system",
        "tags": {
            "category": "Feature",
            "status": "To Do",
            "priority": "High"
        },
        "createdAt": "17.10.2023 15:00",
        "updatedAt": "19.10.2023 09:30"
    },
    {
        "id": 10,
        "title": "Fix mobile layout issues",
        "description": "Buttons overflow on small screens",
        "tags": {
            "category": "Bug",
            "status": "To Do",
            "priority": "Medium"
        },
        "createdAt": "19.10.2023 10:15",
        "updatedAt": "19.10.2023 10:15"
    },
    {
        "id": 11,
        "title": "Write unit tests for utils",
        "tags": {
            "category": "Test",
            "status": "To Do",
            "priority": "Low"
        },
        "createdAt": "18.10.2023 14:00",
        "updatedAt": "18.10.2023 14:00"
    },
    {
        "id": 12,
        "title": "Document new error codes",
        "tags": {
            "category": "Documentation",
            "status": "Done",
            "priority": "Low"
        },
        "createdAt": "11.10.2023 13:45",
        "updatedAt": "16.10.2023 12:30"
    }
];
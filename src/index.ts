// This file initializes the task management system and includes example usage of the task management features.

import {
	Task,
	type DevelopmentTask,
	type DesignTask,
	type DocumentationTask,
	TaskType,
} from "./models/task";
import { TaskService } from "./services/taskService";

const taskService = new TaskService();

// Example usage
const devTask: DevelopmentTask = {
	id: "1",
	title: "Implement authentication",
	type: TaskType.Development,
	repositoryLink: "https://github.com/example/repo",
	assignedTo: "Alice",
	priority: "High",
	status: "ToDo",
	deadline: new Date("2023-10-30"),
};

const designTask: DesignTask = {
	id: "2",
	title: "Create landing page design",
	type: TaskType.Design,
	assetUrl: "https://example.com/designs/landing-page",
	assignedTo: "Bob",
	priority: "Medium",
	status: "InProgress",
	deadline: new Date("2023-11-05"),
};

const docTask: DocumentationTask = {
	id: "3",
	title: "Write API documentation",
	type: TaskType.Documentation,
	documentReference: "https://example.com/docs/api",
	assignedTo: "Charlie",
	priority: "Low",
	status: "UnderReview",
	deadline: new Date("2023-10-25"),
};

// Adding tasks
taskService.createTask(devTask);
taskService.createTask(designTask);
taskService.createTask(docTask);

// Displaying all tasks
console.log(taskService.getAllTasks());

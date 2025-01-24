export type TaskPriority = "High" | "Medium" | "Low";

export type TaskStatus = "ToDo" | "InProgress" | "UnderReview" | "Done";

export enum TaskType {
	Development = "Development",
	Design = "Design",
	Documentation = "Documentation",
}

export interface BaseTask {
	readonly id: string;
	title: string;
	priority: TaskPriority;
	status: TaskStatus;
	deadline?: Date;
	assignedTo?: string;
}

export interface DevelopmentTask extends BaseTask {
	readonly type: TaskType.Development;
	repositoryLink: string;
}

export interface DesignTask extends BaseTask {
	readonly type: TaskType.Design;
	assetUrl: string;
}

export interface DocumentationTask extends BaseTask {
	readonly type: TaskType.Documentation;
	documentReference: string;
}

export type Task = DevelopmentTask | DesignTask | DocumentationTask;

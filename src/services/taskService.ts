import {
	DevelopmentTask,
	DesignTask,
	type Task,
	type TaskStatus,
	type TaskPriority,
} from "../models/task";

export class TaskService {
	private tasks: Task[] = [];

	createTask<T extends Task>(task: T): T {
		this.tasks.push(task);
		return task;
	}

	assignTask(taskId: string, assignee: string): void {
		const task = this.findTaskById(taskId);
		if (task) {
			task.assignedTo = assignee;
		} else {
			throw new Error("Task not found");
		}
	}

	setTaskPriority(taskId: string, priority: TaskPriority): void {
		const task = this.findTaskById(taskId);
		if (task) {
			task.priority = priority;
		} else {
			throw new Error("Task not found");
		}
	}

	updateTaskStatus(taskId: string, status: TaskStatus): void {
		const task = this.findTaskById(taskId);
		if (task) {
			task.status = status;
		} else {
			throw new Error("Task not found");
		}
	}

	setTaskDeadline(taskId: string, deadline: Date): void {
		const task = this.findTaskById(taskId);
		if (task) {
			task.deadline = deadline;
		} else {
			throw new Error("Task not found");
		}
	}

	findTaskById(taskId: string): Task | undefined {
		return this.tasks.find((task) => task.id === taskId);
	}

	filterTasksByStatus(status: TaskStatus): Task[] {
		return this.tasks.filter((task) => task.status === status);
	}

	filterTasksByPriority(priority: TaskPriority): Task[] {
		return this.tasks.filter((task) => task.priority === priority);
	}

	sortTasksByDeadline(): Task[] {
		return this.tasks.sort((a, b) => {
			const deadlineA = a.deadline ?? new Date(0);
			const deadlineB = b.deadline ?? new Date(0);
			return deadlineA > deadlineB ? 1 : -1;
		});
	}

	getAllTasks(): Task[] {
		return this.tasks;
	}

	getOverdueTasks(): Task[] {
		const currentDate = new Date();
		return this.tasks.filter(
			(task) => task.deadline && task.deadline < currentDate,
		);
	}
}

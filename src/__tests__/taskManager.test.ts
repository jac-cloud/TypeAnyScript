import { TaskType } from "../models/task";
import { TaskService } from "../services/taskService";

describe("TaskService", () => {
	let taskService: TaskService;

	beforeEach(() => {
		taskService = new TaskService();
	});

	it("should create different types of tasks", () => {
		const devTask = taskService.createTask({
			id: "1",
			status: "ToDo",
			type: TaskType.Development,
			title: "Implement Authentication",
			repositoryLink: "github.com/project/auth",
			priority: "High",
		});

		const designTask = taskService.createTask({
			id: "2",
			status: "InProgress",
			type: TaskType.Design,
			title: "Create Login Page Mockup",
			assetUrl: "figma.com/file/login-design",
			priority: "Medium",
		});

		expect(devTask).toBeDefined();
		expect(designTask).toBeDefined();
	});

	it("should assign tasks", () => {
		const devTask = taskService.createTask({
			id: "1",
			status: "ToDo",
			type: TaskType.Development,
			title: "Implement Authentication",
			repositoryLink: "github.com/project/auth",
			priority: "High",
		});

		taskService.assignTask(devTask.id, "john.doe");
		const assignedTask = taskService.findTaskById(devTask.id);

		expect(assignedTask?.assignedTo).toBe("john.doe");
	});

	it("should update task status", () => {
		const devTask = taskService.createTask({
			id: "1",
			status: "ToDo",
			type: TaskType.Development,
			title: "Implement Authentication",
			repositoryLink: "github.com/project/auth",
			priority: "High",
		});

		taskService.updateTaskStatus(devTask.id, "InProgress");
		const updatedTask = taskService.findTaskById(devTask.id);

		expect(updatedTask?.status).toBe("InProgress");
	});

	it("should filter tasks by priority", () => {
		taskService.createTask({
			id: "1",
			status: "ToDo",
			type: TaskType.Development,
			title: "Implement Authentication",
			repositoryLink: "github.com/project/auth",
			priority: "High",
		});

		taskService.createTask({
			id: "2",
			status: "InProgress",
			type: TaskType.Design,
			title: "Create Login Page Mockup",
			assetUrl: "figma.com/file/login-design",
			priority: "Medium",
		});

		const HighPriorityTasks = taskService.filterTasksByPriority("High");

		expect(HighPriorityTasks.length).toBe(1);
		expect(HighPriorityTasks[0].priority).toBe("High");
	});

	it("should get overdue tasks", () => {
		const overdueTask = taskService.createTask({
			id: "1",
			status: "ToDo",
			type: TaskType.Development,
			title: "Implement Authentication",
			repositoryLink: "github.com/project/auth",
			priority: "High",
			deadline: new Date("2023-01-01"),
		});

		const overdueTasks = taskService.getOverdueTasks();

		expect(overdueTasks.length).toBe(1);
		expect(overdueTasks[0].id).toBe(overdueTask.id);
	});
});

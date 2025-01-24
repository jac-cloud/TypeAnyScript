import type { DesignTask, DevelopmentTask, DocumentationTask } from "../models/task";

export function isDevelopmentTask(task: unknown): task is DevelopmentTask {
    return (task as DevelopmentTask).type === 'Development';
}

export function isDesignTask(task: unknown): task is DesignTask {
    return (task as DesignTask).type === 'Design';
}

export function isDocumentationTask(task: unknown): task is DocumentationTask {
    return (task as DocumentationTask).type === 'Documentation';
}

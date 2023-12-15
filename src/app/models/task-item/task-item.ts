export interface TaskItem {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    deadLine: Date;
    completionPercentage: number;
    employeeId: number;
}
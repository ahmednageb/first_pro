export interface ITodos {
    id?: string;
    title: string;
    body: string | null;
    completed: boolean;
    createdAt?: Date;
}
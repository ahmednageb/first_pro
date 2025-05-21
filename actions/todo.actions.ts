'use server'

import { ITodos } from "@/interface";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";


const prisma = new PrismaClient();


export const getTodoListAction = async ({userId}:{userId:string|null}) => {
    return await prisma.todo.findMany({
        where:{
            userId:userId as string
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    //**Error HANdling */
};
export const createTodoAction = async ({ title, body, completed,userId }: { title: string, body?: string | undefined, completed: boolean,userId: string|null }) => {
    await prisma.todo.create({
        data: {
            title, body, completed, userId:userId as string 
        }
    });
    revalidatePath("/");

};
export const updateTodoAction = async ({ id, title, body, completed }: ITodos) => {
    await prisma.todo.update({
        where: { id },
        data: {
            title, body, completed
        }

    });
    revalidatePath("/");
};
export const deleteTodoAction = async ({ id }: { id: string }) => {
    await prisma.todo.delete({
        where: { id }
    });

    revalidatePath("/");
};
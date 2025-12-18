'use server'

import { prisma } from "@/app/lib/prisma"
import { revalidatePath } from "next/cache";

export async function ToggleTaskStatus(taskId: number, completed: boolean) {
    try {
        await prisma.task.update({
            where: { id: taskId },
            data: { completed: !completed }
        })

        revalidatePath('/')
    } catch (error) {
        console.error("Erreur lors de la mise à jour:", error)
        throw new Error("Impossible de mettre à jour la tâche")
    }
}
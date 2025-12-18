import { TaskCard } from '@/app/taskCard'
import { getServerSession } from "next-auth";
import { prisma } from '@/app/lib/prisma'

export default async function Page() {
    const session = await getServerSession();

    if (!session) {
        return <p>Veuillez vous connecter pour voir vos tâches.</p>
    }

    const tasks = await prisma.task.findMany({
        where: {userId: session.user.id},
        orderBy: {createdAt: 'desc'}
    })

    return (
        <div>
            {tasks.length === 0 ? (
                <p className="text-gray-500">Commencer par ajouter une tâche</p>
            ) : (
                tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        taskId={task.id}
                        taskName={task.content}
                        initialCompleted={task.completed}
                    />
                ))
            )}
        </div>
    )
}
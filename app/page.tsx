import { prisma } from "@/app/lib/prisma"
import {NavBar} from "@/app/header/navbar";

export default async function Home() {
    const posts = await prisma.post.findMany()
    const countPost = 0

    return (
        <div>
            <NavBar/>
            <div className="flex items-center justify-center mt-150">
                <img src="/add.svg" alt="Logo ajouter une tâche" className="h-7 w-7 cursor-pointer border-none rounded-lg
                     hover:border-gray-700/50 hover:bg-gray-400/50 transition-all duration-200 ease-out"/>
            </div>
        </div>
    )
}
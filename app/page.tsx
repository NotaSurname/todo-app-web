import { prisma } from "@/app/lib/prisma"
import {NavBar} from "@/app/header/navbar";
import {LogOutButton} from "@/app/components/logOutButton";

export default async function Home() {
    const posts = await prisma.post.findMany()
    const countPost = 0

    return (
        <div>
            <NavBar/>
        </div>
    )
}
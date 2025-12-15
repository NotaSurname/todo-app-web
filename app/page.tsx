import { prisma } from "@/app/lib/prisma"
import {NavBar} from "@/app/header/navbar";
import {Button} from "@/app/components/button";

export default async function Home() {
    const posts = await prisma.post.findMany()
    const countPost = 0

    return (
        <div>
            <NavBar/>
            <Button text={"Se connecter"} size={"w-1/2"}/>
        </div>
    )
}
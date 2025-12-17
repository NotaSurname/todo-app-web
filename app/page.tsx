import { prisma } from "@/app/lib/prisma"
import {NavBar} from "@/app/header/navbar";
import {Content} from "@/app/addTask"
import {TaskCard} from "@/app/taskCard"

export default function Home() {

    return (
        <div>
            <NavBar/>
            <Content size={"mt-15"}/>
            <TaskCard taskName={"Faire mes devoirs"}/>
            <TaskCard taskName={"Faire mes devoirs"}/>
        </div>
    )
}
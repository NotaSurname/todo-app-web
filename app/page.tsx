import { prisma } from "@/app/lib/prisma"
import {NavBar} from "@/app/header/navbar";
import {Content} from "@/app/addTask"
import {TaskCard} from "@/app/taskCard"
import Page from "@/app/dashboard/page";

export default function Home() {

    return (
        <div>
            <NavBar/>
            <Content size={"mt-15"}/>
            <Page/>
        </div>
    )
}
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, password, confirmPassword } = body;
        console.log(body);

        if (!firstName || !lastName || !email || !password) {
            return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ error: "Email déjà utilisé" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { firstName, lastName, email, password: hashedPassword }
        });

        return NextResponse.json({ message: "Utilisateur créé", userId: user.id }, { status: 201 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
import { NextResponse } from "next/server";
import {getAllUsers, addUser } from "@/services/userService"

export async function GET() {
    const users = await getAllUsers();
    return NextResponse.json(users || []);
}

export async function POST(request) {
    const newUser = await request.json();
    const success = await addUser(newUser);

    if (!success) {
        return NextResponse.json({ success: false, message: "Username or email already exists." }, { status: 400 });
    }

    return NextResponse.json({ success: true, user: newUser });
}

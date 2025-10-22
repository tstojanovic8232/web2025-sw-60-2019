import { NextResponse } from "next/server";
import { getUserById, updateUser, deleteUser } from "@/services/userService";

export async function GET(req, { params }) {
    const { idOrUsername } = await params;

    const user =
        (await getUserById(idOrUsername)) ||
        (await getUserByUsername(idOrUsername));

    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(user), { status: 200 });
}


export async function PUT(req, { params }) {
    const { id } =  await params;
    const updatedData = await req.json();
    const success = await updateUser(id, updatedData);
    if (!success) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
}

export async function DELETE(req, { params }) {
    const { id } = await params;
    const success = await deleteUser(id);
    if (!success) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
}

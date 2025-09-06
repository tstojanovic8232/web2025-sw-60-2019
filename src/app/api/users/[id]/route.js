import { NextResponse } from "next/server";
import { getUserById, updateUser, deleteUser } from "@/services/userService";

export async function GET(req, { params }) {
    const { id } = params;

    const user = await getUserById(id);

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
}

export async function PUT(req, { params }) {
    const { id } = params;
    const updatedData = await req.json();
    const success = await updateUser(id, updatedData);
    if (!success) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
}

export async function DELETE(req, { params }) {
    const { id } = params;
    const success = await deleteUser(id);
    if (!success) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
}

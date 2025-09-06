import { NextResponse } from "next/server";
import { getUserByUsername } from "@/services/userService";

export async function GET(req, { params }) {
    const { username } = params;

    const user = await getUserByUsername(username);

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
}

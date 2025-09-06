import { readJson } from "@/lib/fileUtils";
import { User } from "@/models/user";

// User data wrapper

const FILENAME = "users.json";

async function loadUsers() {
    const data = (await readJson(FILENAME)) || [];
    return data.map(u => new User(u));
}

async function saveUsers(users) {
    await writeJson(FILENAME, users.map(u => u.toJSON()));
}

// Service functions

export async function getAllUsers() {
    return await loadUsers();
}

export async function getUserById(id) {
    const users = await loadUsers();
    return users.find(u => u.id === id) || null;
}

export async function getUserByUsername(username) {
    const users = await loadUsers();
    return users.find(u => u.username === username) || null;
}

export async function getUserByEmail(email) {
    const users = await loadUsers();
    return users.find(u => u.email === email) || null;
}

export async function addUser(newUser) {
    const users = await loadUsers();
    if (users.some(u => u.username === newUser.username || u.email === newUser.email)) {
        return false;
    }
    users.push(newUser);
    await saveUsers(users);
}

export async function updateUser(id, updatedData) {
    const users = await loadUsers();
    const user = users.find(u => u.id === id);
    if (!user) {
        return false;
    }
    user.update(updatedData);
    await saveUsers(users);
}

export async function deleteUser(id) {
    const users = await loadUsers();
    const user = users.find(u => u.id === id);
    if (!user) {
        return false;
    }
    user.softDelete();
    await saveUsers(users);
}  

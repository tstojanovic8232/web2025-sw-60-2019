import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "src", "data");

export async function readJson(filename) {
    const filePath = path.join(dataDir, filename);
    try {
        const data = await fs.readFile(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading JSON:", err);
        return null;
    }
}

export async function writeJson(filename, data) {
    const filePath = path.join(dataDir, filename);
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
        return true;
    } catch (err) {
        console.error("Error writing JSON:", err);
        return false;
    }
}

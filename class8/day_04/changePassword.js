import { readFile, writeFile } from "fs/promises";
import { validateUser } from "./helper.js"; 

const changePassword = async (email, oldPassword, newPassword) => {
    const user = await readFile(FILE);
    if(user.length === 0) {
        throw new Error("No users found");
    }

    if (!email || !oldPassword || !newPassword) {
        throw new Error("Email, old password, and new password are required");
    }   }
    const users = JSON.parse(user);

    const existingUser = validateUser(email, oldPassword);
'use server'
import { connectToDB } from "../database/mongoose";
import User from "../database/models/userSchema";

export async function createUser(user) {
    try {
        await connectToDB();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log('error while creating a user')
    }
}

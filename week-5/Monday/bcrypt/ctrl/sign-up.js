import bcrypt from "bcrypt";
import connect from "../mongoDB.js";

// Handle user signup
export async function signUp(req, res) {
    const { username, password } = req.body;

    // Check if user already exists
    const user = await getUser(username);
    if (user) {
        return res.status(409).json({ message: "The user already exists." });
    }

    // Hash password and create user
    const hashedPwd = await bcrypt.hash(password, 10);
    const success = await createUser(username, hashedPwd);

    if (!success) {
        return res.status(500).json({ message: "Failed to create user." });
    }

    // Successfully created the user
    res.status(201).json({ message: "User created successfully." });
}

// Retrieve user by username
async function getUser(username) {
    try {
        const db = await connect();
        const user = await db.collection("user").findOne({ username });
        return user;
    } catch (err) {
        console.error("Error retrieving username:", err);
        return null;
    }
}

// Create a new user with hashed password
async function createUser(username, hashedPassword) {
    try {
        const db = await connect();
        await db.collection("user").insertOne({
            username,
            hashedPassword
        });
        console.log("User successfully created");
        return true;
    } catch (error) {
        console.error("Invalid data or failed to write:", error);
        return false;
    }
}

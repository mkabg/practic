import { compare } from "bcrypt";
import getUser from "./sign-up.js"

export async function verifyes(req, res) {
    const {username, password} = req.body;
    const {user, hash} = await getUser(username);
    if (!user) {
        res.status(400).json({message: "user dont exist"})
        return null
    }
    if (!compare(password, hash)) {
        res.status(409).json({message: "the password is wrong"})
        return null
    }
    return res.status(200).json({message: "Verified"})
}

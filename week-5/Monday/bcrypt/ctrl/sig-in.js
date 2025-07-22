import { getUser } from "./sign-up";
import { verifyes } from "./verifyes";

export async function sigIn(req, res) {
    const verifyed = verifyes(req, res);
    if (!verifyed) {
        console.log("user dont exist or password not match");
        return
    }
    createToken()
    
}
import signup from "./sign-r.js";
import verifyes from "./verifyes-r.js";
import decode_message from "./decode_message-r.js";

export async function configRoutes(app) {
    app.use("/signup", signup);
    app.use("/verifyes", verifyes);
    app.use("/decode-message", decode_message);
    
}
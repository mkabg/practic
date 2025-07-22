import signup from "./sign-up.js";
import log_in from "./log-in.js";
import verifyes from "./verifyes-r.js";
import decode_message from "./decode-message-r.js";

export async function configRoutes(app) {
    app.use("/signup", signup);
    app.use("/log-in", log_in);
    app.use("/verifyes", verifyes);
    app.use("/decode-message", decode_message);
    
}
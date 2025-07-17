import loginRoute from "./login-r.js";
import prodactsRoute from "./prodacts-r.js"

export default function configRoutes(app) {
    app.use("/login", loginRoute);
    app.use("/prodacrs", prodactsRoute);
    app.use ((req, res) => {
        res.status(404).json({msg: "Route not found."})
    })
}
import riddleRoutes from "./riddle-routes.js";

export default function configRoutes(app) {
    app.use("/api/riddles", riddleRoutes)
}
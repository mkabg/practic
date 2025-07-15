import express from "express";

const server = express();
const users = [{
    "username": "mordechai",
    "id": 5
}]

server.get("/", (req, res) => {
    res.send("welcome");
})

server.get("/users/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.json(users.find((user) => user.id === id));
})

server.post("/create", (req, res) => {
    res.send("you dont heve permision");
})


server.listen(7000, () => {
    console.log("server is running on: http://localhost:7000");
})
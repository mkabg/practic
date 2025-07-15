import { UserActivity } from "./db.js";


const names = ["Charlie", "Dana", "Eva", "Frank"]
const activities = ["Comment", "Like", "Share", "Lougout"]

async function createUser(user) {
    UserActivity.create(user)
}

function getRandUser() {
    return {
        name: names[Math.floor(Math.random() * names.length)],
        activity: activities[Math.floor(Math.random() * activities.length)]
    };
}

const intervalId = setInterval(function() {
    createUser(getRandUser())
}, 10000)


import { UserActivity } from "./db.js";


UserActivity.findAll().then(results => console.table(results));

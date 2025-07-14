import pool from "../db.js";

export async function where1(req, res) {
   const [rows] = await pool.query("SELECT `firstName`, `lastName` FROM `employees` WHERE reportsTo = 1143;")
   res.json(rows);
}


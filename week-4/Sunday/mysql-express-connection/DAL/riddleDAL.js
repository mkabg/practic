// import pool from "../db.js";

// export async function getAllRiddles() {
//     const [rows] = await pool.query("SELECT * FROM riddles");
//     return rows;
// }

// export async function getRiddleById(id) {
//     const [rows] = await pool.query("SELECT * FROME riddles WHERE id = ?", [id]);
//     return rows;
// }

// export async function addRiddle(title, question, correctAnswer) {
//     const [result] = await pool.query(
//         "INSERT INTO riddles (title, question, correctAnswer) VALUES (?, ?, ?)", [title, question, correctAnswer]
//     );
//     return result.insertId;
// }
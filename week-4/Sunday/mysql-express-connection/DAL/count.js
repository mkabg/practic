import pool from "../db.js";

export async function count1(req, res) {
    const [rows] = await pool.query("SELECT count(*) FROM `customers` WHERE country = 'france' ")
    res.json(rows);
}

export async function count2(req, res) {
    const [rows] = await pool.query("SELECT COUNT(*) FROM `products` WHERE productLine = 'classic cars';")
    res.json(rows);
}

export async function count3(req, res) {
    const [rows] = await pool.query("SELECT COUNT(*) FROM orders")
    res.json(rows)
}

export async function count4(req, res) {
    const [rows] = await pool.query("SELECT COUNTER(*) FROM customers WHERE country = usa")
    res.json(rows)
}

export async function count5(req, res) {
    const [rows] = await pool.query("SELECT COUNT(*) FROM orders WHERE country = france")
    res.json(rows)
}


const sqlite3 = require("sqlite3").verbose();
const path = require("path");


const db = new sqlite3.Database(path.join(process.cwd(), "database.sqlite"));


db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT
        )`
    );


    db.run(`INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)`, ["admin", "password"]);
});

module.exports = db;

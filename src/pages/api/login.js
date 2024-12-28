import db from "lib/db";



export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: "Date incomplete." });
    }

    db.get(
      `SELECT * FROM users WHERE username = ? AND password = ?`,
      [username, password],
      (err, user) => {
        if (err) {
          return res.status(500).json({ success: false, message: "Eroare internă." });
        }

        if (user) {
          res.json({ success: true, message: "Autentificare reușită!" });
        } else {
          res.status(401).json({ success: false, message: "Nume de utilizator sau parolă incorectă." });
        }
      }
    );
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ success: false, message: `Metoda ${req.method} nu este permisă.` });
  }
}


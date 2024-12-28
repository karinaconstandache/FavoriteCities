import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                alert(data.message);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Eroare la autentificare:", error);
        }
    };

    return (
        <div>
            <h1>Autentificare</h1>
            <input
                type="text"
                placeholder="Nume utilizator"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <input
                type="password"
                placeholder="Parolă"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <button onClick={handleLogin}>Autentifică-te</button>
        </div>
    );
}

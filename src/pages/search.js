import { useState } from "react";

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}`);
            const data = await response.json();
            setResults(data.results || []);
        } catch (error) {
            console.error("Eroare la căutare:", error);
        }
    };

    return (
        <div>
            <h1>Pagina de Căutare</h1>
            <input
                type="text"
                placeholder="Caută un oraș..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <button onClick={handleSearch}>Caută</button>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                        <a href={`/city?name=${result.name}&lat=${result.latitude}&lon=${result.longitude}`}>
                            {result.name}, {result.country}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}


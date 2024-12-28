import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CityPage() {
    const router = useRouter();
    const { name, lat, lon } = router.query;
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (lat && lon) {
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
                .then((response) => response.json())
                .then((data) => setWeather(data.current_weather))
                .catch((error) => console.error("Eroare la obținerea vremii:", error));
        }
    }, [lat, lon]);

    return (
        <div>
            <h1>Detalii despre Oraș: {name}</h1>
            <p>Latitudine: {lat}</p>
            <p>Longitudine: {lon}</p>
            {weather && (
                <div>
                    <h2>Vremea actuală</h2>
                    <p>Temperatură: {weather.temperature}°C</p>
                    <p>Vânt: {weather.windspeed} km/h</p>
                </div>
            )}
        </div>
    );
}


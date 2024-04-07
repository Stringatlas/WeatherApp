
const openWeather = import.meta.env.VITE_OPEN_WEATHER_KEY;

export async function getJSONFromURL(url: string) {
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
    });
    const jsonData = await response.json();
    return jsonData;
}

export async function getLatLong(zipcode: string) {
    const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${openWeather}`;
    const jsonData = await getJSONFromURL(url);

    console.log(jsonData);
    return jsonData;
}

async function getWeatherInformation(city) {
    const apiKey = 'da68076da8284c1c8c6231402251112';

    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

async function searchCity(){
    const city = document.getElementById("cityInput").value;

     if (!city) {
        alert("Skriv in en stad först!");
        return;
    }

    const data = await getWeatherInformation(city);

    if(!data) return;
   

document.getElementById("cityInformation").innerHTML = `
    <h2>${data.location.name}, ${data.location.country}</h2>
    <img src="https:${data.current.condition.icon}" alt="weather-Icon">
    <p>${data.current.temp_c}°C</p>
    <p>${data.current.condition.text}</p>
    <p>${data.location.localtime}</p>
`;

}

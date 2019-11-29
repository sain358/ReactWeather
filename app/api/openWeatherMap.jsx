import axios from "axios"

const OPEN_WEATHER_MAP_URL = "https://api.openweathermap.org/data/2.5/find";

export default function getTemperatureByLocation (location) {
    var encodedLocation = encodeURI(location);
    var units = "metric";
    var apiKey = "cbedbbacd196bf7aa864b3e3cd14f10a";
    var requestURL = `${OPEN_WEATHER_MAP_URL}?q=${encodedLocation}&units=${units}&appid=${apiKey}`;

    return axios.get(requestURL).then(
        (result) => {
            console.log(result);
            if (result.data.list && result.data.list.length > 0) {
                return result.data.list[0].main.temp;
            } else {
                throw new Error("Error: Invalid location")
            }
        },
        (error) => {
            console.log(error);
            throw new Error(error)
        }
    )
}

<script lang="ts">
    import { onMount } from "svelte";

    enum Status {
        SUCCESS,
        MANUAL_INPUT,
        WEATHER_API_ERROR,
        LOADING,
    }

    let status = Status.LOADING;

    async function fetchFromCity(query: string): Promise<Object> {
        let url = `https://api.weatherapi.com/v1/current.json?key=683402e6138b4628989215433240604&q=${query}&aqi=yes`;
        const jsonData = await getJSONFromURL(url);
        return jsonData;
    }

    async function getZipcodeByIP(ip: string = ""): Promise<string> {
        let url = `https://geolocation-db.com/json/0daad5e0-82e7-11ee-92e0-f5d620c7dcb4${ip ? `/${ip}` : ""}`;
        const jsonData = await getJSONFromURL(url);

        console.log("geolocation", jsonData);
        return jsonData.postal;
    }

    async function getJSONFromURL(url: string) {
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
        });
        const jsonData = await response.json();
        return jsonData;
    }

    let weatherData: any = null;

    onMount(async () => {
        let zipcode = await getZipcodeByIP("185.61.158.127");
        weatherData = await fetchFromCity(zipcode);
        console.log(weatherData);
    });
</script>

<main>
    {#if weatherData != null}
        <div>Weather</div>
    {:else}
        <div class="loader"></div>
    {/if}
</main>

<style>
    .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #2895b6;
        width: 80px;
        height: 80px;
        -webkit-animation: spin 1s linear infinite; /* Safari */
        animation: spin 1s linear infinite;
    }

    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

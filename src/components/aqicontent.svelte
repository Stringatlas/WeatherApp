<script lang="ts">
    export let weatherData: any;
    export let aqi: number | undefined;

    $: descriptor = getDescriptor(aqi);

    function getDescriptor(aqi: number | undefined) {
        if (aqi == undefined) return "";
        if (aqi < 50) return "Good";
        if (aqi < 100) return "Moderate";
        if (aqi < 150) return "Unhealthy for Sensitive Groups";
        if (aqi < 200) return "Unhealthy";
        if (aqi > 200) return "Hazardous";
        return "";
    }
</script>

<h2>
    AQI: {aqi}
    {descriptor ? "(" + descriptor + ")" : ""} in
    {weatherData.location.name}
</h2>

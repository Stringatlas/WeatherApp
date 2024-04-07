<script lang="ts">
    export let weatherData: any;
</script>

<div id="top-row">
    <img src={weatherData.current.condition.icon} alt="Icon" />
    <h2 class="long-text">
        Current Weather in {weatherData.location.name}
    </h2>

    <h2 class="short-text">
        {weatherData.location.name}
    </h2>

    <h2>{weatherData.current.temp_f}°F</h2>
</div>

<style>
    #top-row {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-gap: 1rem;
    }

    #top-row img {
        margin-top: 0.5rem;
    }

    .long-text {
        display: none;
    }

    .short-text {
        display: inline;
    }

    @media screen and (min-width: 1200) {
        .long-text {
            display: inline;
        }

        .short-text {
            display: none;
        }
    }
</style>

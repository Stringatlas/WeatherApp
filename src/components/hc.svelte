<script lang="ts">
    import Highcharts from "highcharts";
    import { noiseGenerator } from "../lib/util";

    export let city = "abc";
    export let metric = "def";

    let chart: any;
    let names: any[] = Array.from({ length: 100 }, (_, i) => i * 0.01);
    let data: any[] = noiseGenerator(city, metric, 100);

    import { onMount } from "svelte";

    onMount(() => {
        let points = [];
        for (let i = 0; i < names.length; i++) {
            points.push({
                x: names[i],
                y: data[i],
            });
        }

        const options = {
            chart: {
                type: "scatter",
            },
            xAxis: {
                type: "category",
                labels: {
                    rotation: -45,
                },
            },
            series: [
                {
                    data: points,
                },
            ],
        };
        // @ts-ignore
        Highcharts.chart(chart, options);
    });
</script>

<div id="chart-parent">
    <div id="myChart" bind:this={chart} />
</div>

<style>
    #chart-parent {
        width: 100%;
    }
</style>

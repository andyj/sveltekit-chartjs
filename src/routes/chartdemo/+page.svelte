<script>
    /** @type {import('./$types').PageData} */
    // @component is a user defined alias in /vite.config.js

    import CreateChart from '@components/CreateChart.svelte';    
    export let data;
</script>

<h1>Chart Example</h1>
<a href="/" class="btn btn-primary">Back to home page</a>
<CreateChart jsonData={data.jsonData} />

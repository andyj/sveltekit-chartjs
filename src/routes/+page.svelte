<script>
  import { page } from '$app/stores';
  console.log($page.route.id);
</script>

<h1>Welcome to SvelteKit ChartJS Example Lib</h1>
<p>Visit <a href="https://github.com/andyj/sveltekit-chartjs">github.com/andyj/sveltekit-chartjs</a> to see this code</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the SvelteJS documentation</p>

<p>Dependencies to that are used are, <code>chartjs</code>, <code>luxon</code>, and <code>chartjs-adapter-luxon</code></p>
<pre>
  $ npm install chartjs luxon chartjs-adapter-luxon --save
</pre>
<a href="/chartdemo" class="btn btn-primary">Click here to see the example</a>
<script>
  import '../app.css'
  import Nav from '../components/Nav.svelte';
</script>
<div class="flex flex-col h-screen justify-between">
	<header class="w-screen bg-gradient-to-r from-green-500 via-green-200 to-green-500 p-5">
		<Nav />
	</header>

	<main class="my-8 mb-auto">
		<slot />
	</main>

	<footer class="w-screen bg-gradient-to-r from-green-500 via-green-200 to-green-500 p-5 text-sm">
		My eCommerce Store, 2022. Copyright <a class="underline" href="https://tpiros.dev">tpiros.dev</a
		>.
	</footer>
</div>
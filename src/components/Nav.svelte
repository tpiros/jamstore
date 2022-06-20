<script>
  let menuItems = [{ text: 'Home', path: '/' },
		{ text: 'Shoppable Video', path: '/video' },
		{ text: 'About', path: '/about' }]
</script>

<nav class="mt-4">
	<div class="sm:flex-row">
		{#each menuItems as menuItem}
			<a class="mt-3 font-bold hover:underline sm:mx-3 sm:mt-0" href={menuItem.path}
				>{menuItem.text}</a
			>
		{/each}
	</div>
</nav>

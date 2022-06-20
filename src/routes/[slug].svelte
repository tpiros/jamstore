<script>
  export let product;
  import Image from '../components/Image.svelte';
</script>

<div class="w-1/2 rounded shadow-lg border-2 mx-auto">
	<Image publicId={product.fields.cloudinary[0].public_id} width="950" height="530" />
	<div class="px-6 py-4">
		<h1 class="font-bold text-2xl">Product: {product.fields.name}</h1>
		<p class="text-gray-700 text-base">
			Description: {product.fields.description
				? product.fields.description
				: 'Description Not Available'}
		</p>
	</div>
	<div class="px-6 pt-4 pb-2">
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
			>£{product.fields.price}</span
		>
	</div>
</div>
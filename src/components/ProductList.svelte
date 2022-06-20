<script>
  import Image from "./Image.svelte";
  export let products;
</script>
{#each products as product}
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <Image publicId={product.fields.cloudinary[0].public_id} />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">
      <a class="hover:underline" href={product.fields.slug}>{product.fields.name}</a>
    </div>
    <p class="text-gray-700 text-base">
      {product.fields.description ? product.fields.description : 'No description availablet yet.'}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span
      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >£{product.fields.price}</span
    >
  </div>
</div>
{/each}
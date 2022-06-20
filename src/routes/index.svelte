<script>
import ProductList from "../components/ProductList.svelte";

  export let products;
  export let total;
</script>
<div class="container mx-auto px-6">
	<h3 class="text-gray-700 text-3xl font-bold">My Store</h3>
	<span class="mt-3 text-sm text-gray-500">{total} Products</span>
	<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
    <ProductList {products} />
  </div>
</div>
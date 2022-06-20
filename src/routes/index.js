import { getProducts } from '$lib/contentful';
export async function get() {
	const { products, total } = await getProducts();

	if (products.length !== 0) {
		return {
			body: {
				products,
				total
			}
		};
	} else {
		return {
			status: 404
		};
	}
}

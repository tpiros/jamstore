import { getProduct } from '$lib/contentful';

export async function get({ params }) {
	const { product } = await getProduct(params.slug);
	if (product) {
		return {
			body: {
				product
			}
		};
	}

	return {
		status: 404
	};
}

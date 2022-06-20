import contentful from 'contentful';
export const client = contentful.createClient({
	space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_API_TOKEN
});

export async function getProducts() {
	const { items: products, total } = await client.getEntries({
		content_type: 'product'
	});
	return {
		products,
		total
	};
}

export async function getProduct(slug) {
	const { items: products } = await client.getEntries({
		content_type: 'product',
		'fields.slug': slug
	});

	return {
		product: products[0]
	};
}

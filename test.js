const images = document.querySelectorAll('.images');

images.forEach((image, index) => {
	image.addEventListener('click', () => {
		const overlay = document.getElementById('productOverlay');
		const overlayImage = document.getElementById('productImage');
		const productName = document.getElementById('productName');

		// Sample data. Ideally, you'd fetch this from a server or have it predefined
		const products = [
			{ name: 'Product 1', image: '//picsum.photos/id/12/500' },
			{ name: 'Product 2', image: '//picsum.photos/id/80/500' },
			// ... add more products data here
		];

		// Update overlay content based on clicked image
		productName.textContent = products[index].name;
		overlayImage.src = products[index].image;
		overlay.style.display = 'block';
	});
});

function closeOverlay() {
	const overlay = document.getElementById('productOverlay');
	overlay.style.display = 'none';
}

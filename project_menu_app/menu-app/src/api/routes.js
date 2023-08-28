import { rest } from 'msw';
// For more information on creating simulated HTTP API endpoints, please visit https://mswjs.io/docs/
export const routes = [
	rest.get('/dishes', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					id: 1,
					title: 'buttermilk pancakes',
					category: 'breakfast',
					price: 15.99,
					img: 'images/item-1.jpeg',
					desc: `Fluffy pancakes made with fresh buttermilk, served with maple syrup and butter.`,
				},
				{
					id: 2,
					title: 'dinner double',
					category: 'lunch',
					price: 13.99,
					img: 'images/item-2.jpeg',
					desc: `A hearty lunch option featuring a double serving of our special dish, served with side salad.`,
				},
				{
					id: 3,
					title: 'godzilla milkshake',
					category: 'shakes',
					price: 6.99,
					img: 'images/item-3.jpeg',
					desc: `A monstrous blend of rich flavors, this milkshake is not for the faint-hearted!`,
				},
				{
					id: 4,
					title: 'country delight',
					category: 'breakfast',
					price: 20.99,
					img: 'images/item-4.jpeg',
					desc: `A traditional breakfast delight that brings the tastes of the countryside to your plate.`,
				},
				{
					id: 5,
					title: 'egg attack',
					category: 'lunch',
					price: 22.99,
					img: 'images/item-5.jpeg',
					desc: `Delicious eggs served with toast, grilled tomatoes, and a side of hash browns.`,
				},
				{
					id: 6,
					title: 'oreo dream',
					category: 'shakes',
					price: 18.99,
					img: 'images/item-6.jpeg',
					desc: `A dreamy milkshake loaded with real Oreo cookies and topped with whipped cream.`,
				},
				{
					id: 7,
					title: 'bacon overflow',
					category: 'breakfast',
					price: 8.99,
					img: 'images/item-7.jpeg',
					desc: `Overflowing with the goodness of bacon, this dish is a must-try for breakfast lovers.`,
				},
				{
					id: 8,
					title: 'american classic',
					category: 'lunch',
					price: 12.99,
					img: 'images/item-8.jpeg',
					desc: `The American classic dish, perfect for a lunch treat. Comes with fries and a drink.`,
				},
				{
					id: 9,
					title: 'quarantine buddy',
					category: 'shakes',
					price: 16.99,
					img: 'images/item-9.jpeg',
					desc: `The perfect shake to accompany you during quarantine. Made with love and care.`,
				},
				{
					id: 10,
					title: 'bison steak',
					category: 'dinner',
					price: 22.99,
					img: 'images/item-10.jpeg',
					desc: `Juicy bison steak grilled to perfection. Served with veggies and mashed potatoes.`,
				},
			]),
		);
	}),
];

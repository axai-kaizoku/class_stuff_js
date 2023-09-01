let array = [
	{
		name: 'Alicent highTower',
		designation: 'WEB DEVELOPER',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendiomnis nisi laudantium molestias tempore suscipit illum voluptascommodi ducimus? Sapiente impedit, libero fuga saepe debitis teneturquam expedita laborum eum?',
		image: 'https://randomuser.me/api/portraits/med/women/75.jpg',
	},
	{
		name: 'Jon Snow',
		designation: 'FRONT-END DEVELOPER',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique incidunt blanditiis voluptatibus, laboriosam autem atque suscipit. Voluptate corrupti explicabo doloribus obcaecati, eaque eum nostrum? Quae eius minus eaque doloribus.',
		image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
	},
	{
		name: 'Walter White',
		designation: 'CHEMIST',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel ipsum blanditiis soluta architecto voluptatum sequi culpa, velit consectetur harum magnam iure deleniti. Blanditiis quaerat aspernatur, ut quidem nihil veniam.',
		image: 'https://randomuser.me/api/portraits/med/men/95.jpg',
	},
	{
		name: 'Mia Khalifa',
		designation: 'ECONOMIST',
		review:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam consequatur fuga harum dignissimos dolorem quisquam, dicta placeat fugit dolore, molestias, in accusamus iure commodi illum. Saepe quod expedita voluptatibus veritatis.',
		image: 'https://randomuser.me/api/portraits/med/women/55.jpg',
	},
	{
		name: 'Jhonny Sins',
		designation: 'SWE',
		review:
			'Lorem ipsum dolor sit m, dicta placeat fugit dolore, molestias, in accusamus iure commodi illum. Saepe quod expedita voluptatibus veritatis.amet consectetur, adipisicing elit. Nam consequatur fuga harum dignissimos dolorem quisqua',
		image: 'https://randomuser.me/api/portraits/med/men/15.jpg',
	},
	{
		name: 'Angelina White',
		designation: 'ACTRESS',
		review:
			'Lorem ipsum dolor sit aceat fugit dolore, molestias, in accusamus iure commodi illum. Saepe quod expedita voluptatibus veritatismet consectetur, adipisicing elit. Nam consequatur fuga harum dignissimos dolorem quisquam, dicta pla.',
		image: 'https://randomuser.me/api/portraits/med/women/25.jpg',
	},
	{
		name: 'Anjali Rani',
		designation: 'COOK',
		review:
			'Lorem iem quisquam, dicta placeat fugit dolore, molestias, in accusamus iure commodi illum. Saepe quod expedita vpsum dolor sit ameicing elit. Nam consequatur fuga harum dignissimos doloroluptatibus veritatist consectetur, adipis.',
		image: 'https://randomuser.me/api/portraits/med/women/57.jpg',
	},
	{
		name: 'Payal',
		designation: 'GAMER',
		review:
			'Lorem ipsum dolor sit amsicing elit. Nam consequatur fuga harum dignissimos dolorem quisquam, dictareet consectetur, adipi, molestias, in accusamus iure commodi illum. Saepe quod expedita voluptatibus veritati placeat fugit dolos.',
		image: 'https://randomuser.me/api/portraits/med/women/34.jpg',
	},
	{
		name: 'RAJ BILANI',
		designation: 'ASSISTANT BPO',
		review:
			'Lorem ipsum dgit dolore, molestias, in accusamus olor sit amet consectetur, adipisicing elit. Nam consequatur fuga harum dignissimos dolorem quisquam, dicta placeat fuiure commodi illum. Saepe quod expedita voluptatibus veritatis.',
		image: 'https://randomuser.me/api/portraits/med/men/41.jpg',
	},
	{
		name: 'Trafargar Law',
		designation: 'DOCTOR',
		review:
			'Lorem ipse, molestias, amus iur. Saepe quod expedita voluptatibus veconsectetur, adipisicing elit. Nam coin accusnseum dolor site commodi illum amet olorquatur fuga harum fugit dritatisdignissimos dolorem quisquam, dicta placeat .',
		image: 'https://randomuser.me/api/portraits/med/men/31.jpg',
	},
];

// DOM Selectors
let leftBtn = document.getElementsByClassName('left')[0];
let rightBtn = document.getElementsByClassName('right')[0];
let allCards = document.getElementsByClassName('allCards')[0];
let suprise = document.getElementsByClassName('suprise')[0];

let currentIdx = 0; // Initialize current index to 0

leftBtn.addEventListener('click', () => getLeft(array));
rightBtn.addEventListener('click', () => getRight(array));
suprise.addEventListener('click', () => genRandom(array));

function getRight(arr) {
	currentIdx++; // Increment index
	if (currentIdx >= arr.length) {
		currentIdx = 0; // If index exceeds array length, reset to 0
	}
	genCard(arr[currentIdx]); // Display next item
}

function getLeft(arr) {
	currentIdx--; // Decrement index
	if (currentIdx < 0) {
		currentIdx = arr.length - 1; // If index is negative, set to last item in the array
	}
	genCard(arr[currentIdx]); // Display previous item
}

function genRandom(arr) {
	let randomNum = (Math.random() * 10).toPrecision(1);
	console.log(randomNum);
	if (randomNum > 1 && randomNum < 10) {
		genCard(arr[randomNum]);
	}
}

function genCard(data) {
	let content = `
    <div class="card">
        <img src=${data.image} alt="" />
        <h1 class="name">${data.name}</h1>
        <h2 class="designation">${data.designation}</h2>
        <p class="review">${data.review}</p>
    </div>`;
	allCards.innerHTML = content;
}

genCard(array[currentIdx]); // Display the initial item

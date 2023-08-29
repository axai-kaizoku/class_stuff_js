let container = document.getElementById('container');

fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
	.then((response) => response.json())
	.then((data) => genItem(data.categories));

function genItem(categories) {
	let individualItem = '';
	for (let i = 0; i < categories.length; i++) {
		let desc = categories[i].strCategoryDescription.slice(0, 200);
		console.log(desc);
		let item = `<div class="item">
    <h2 class="title">${categories[i].strCategory}</h2>
    <img
      src="${categories[i].strCategoryThumb}"
      alt="${categories[i].strCategory}" />
    <p class="desc">${desc}...</p>
    </div>`;
		individualItem += item;
	}
	container.innerHTML = individualItem;
}

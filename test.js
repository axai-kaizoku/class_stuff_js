let container = document.getElementById('container');

document.getElementById('submitBtn').addEventListener('click', function () {
	container.innerHTML = '';

	let mealName = document.getElementById('inputBox').value;
	let error = document.getElementById('error');
	error.innerText = '';
	console.log(error);
	let flag = -1;
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
		.then((response) => response.json())
		.then((data) => {
			if (data && data.meals) {
				genMeal(data.meals);
				flag = 1;
				console.log(flag);
			} else {
				flag = 2;
				console.log(flag);
				error.innerText = 'No meals found for the search term';
			}
		})
		.catch((error) => console.log(error));
});

function genMeal(meals) {
	document.getElementById('inputBox').value = '';
	let totalMeals = '';
	meals.forEach((meal) => {
		let individualMeal = `<div class="meal">
<h2 class="title">${meal.strMeal}</h2>
<img
  src="${meal.strMealThumb}"
  class="mealImg" />
<h5 class="category">Category : ${meal.strCategory}</h5>
<h5 class="area">Origin : ${meal.strArea}</h5>
<h5 class="instructions">Instructions : ${meal.strInstructions}</h5>
<div class="inner">
  <h6 class="tags">Tags : ${meal.strTags}</h6>
  <h6 class="link">
    Link :
    <a
      href="${meal.strYoutube}"
      target="_blank"
      style="font-size: 16px"
      ><i
        class="fa fa-youtube-play"
        style="font-size: 14px; color: red"></i
    ></a>
  </h6>
</div>
</div>`;
		totalMeals += individualMeal;
	});
	container.innerHTML = totalMeals;
}

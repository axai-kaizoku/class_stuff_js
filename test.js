let country;
let container = document.getElementById('container');

document.getElementById('univ').addEventListener('change', (e) => {
	country = e.target.value;
	fetch(`http://universities.hipolabs.com/search?country=${country}`)
		.then((response) => response.json())
		.then((universities) => genUniv(universities))
		.catch((error) => console.log(error));
});

function genUniv(universities) {
	let content = '';
	universities.forEach((univ) => {
		let univHtml = `<div class="university">
        <h2 class="title">&#127979; ${univ.name}</h2>
        <h3 class="location">&#128205; 
					 ${univ.state || univ.country}
				</h3>
				<p>For more details visit university site</p>
        <h4 class="site">
            Link:
            <a href="${univ.web_pages[0]}" target="_blank">${
			univ.domains[0]
		}</a>
        </h4>
        </div>`;
		content += univHtml;
	});
	container.innerHTML = content;
}

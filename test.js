// Define the post content
let post = `
<div class="post">
    <img
        src="https://picsum.photos/400/300"
        alt="picsum pic" />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <button id="likeBtn" style="cursor: pointer">Like</button>
		<span id="likeCount">0</span> Likes
</div>`;

// // create a random number of posts
// let randNum = Math.floor(2 + Math.random() * 4);
// console.log(randNum);
// for (let i = 0; i < randNum; i++) {
// 	post += post;
// 	console.log(post);
// 	console.log(randNum);
// }

// Get the postsDiv and set its innerHTML
const postsDiv = document.getElementById('posts');
postsDiv.innerHTML = post;

const likeBtn = document.getElementById('likeBtn');
const likeCountSpan = document.getElementById('likeCount');
let count = 0;

likeBtn.addEventListener('click', () => {
	count += 1;
	likeCountSpan.innerText = count; // Update the count in the span
});

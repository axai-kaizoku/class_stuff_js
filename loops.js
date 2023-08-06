/** @format */

function doSomething(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			console.log(arr[i]);
		}
	}
}

var arr = [100, 21, 56, 46, 12, 8, 1, 3];
doSomething(arr);

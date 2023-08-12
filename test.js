function findMax () {
  let arr = [1, 2, 3, 4, 5]
  let res;
  for (let i of arr) {
      if (arr[i] > arr[i+1]) {
          res = arr[i];
          console.log(arr[i])
      }
      console.log(res);
  }
}

findMax();
let today = new Date();
console.log(Date.now());

console.log('---------------');

let myDob = new Date('2001-08-15 9:30:14');
let now = new Date();
console.log('my age is :');
console.log(now.getFullYear() - myDob.getFullYear());

console.log('---------------');

let endDate = new Date('02-02-1992');
console.log(endDate);
console.log('---------------');

let myDate = new Date('2020-04-01 16:30:59');
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());

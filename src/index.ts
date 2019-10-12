console.log('concat', '*'.repeat(100));

//介紹兩個 string
//concat：Combines the text of two strings and returns a new string.
let a = 'Yes';
let b = 'No';
let c = 'Try';
console.log(a.concat(b , c));
// expected output: "YesNoTry"
console.log(a.concat(',', b, ',', c));
// expected output: "Yes,No,Try"

console.log('includes', '*'.repeat(100));

//includes：Determines whether one string may be found within another string.
let d = 'Who am i,i am KenKao '
let e = 'KenKao'
let f = 'Superman'
console.log(d.includes(e));
// expected output: "true"
console.log(d.includes(f));
// expected output: "false"

console.log('isFinite', '*'.repeat(100));

//介紹兩個 number
//isFinite 判斷傳入的值是否為有限數
console.log(Number.isFinite(0 / 1));
console.log(0 / 1);
// expected output: true
console.log(Number.isFinite(1 / 2));
console.log(1 / 2);
// expected output: true
console.log(Number.isFinite(10 / 5));
console.log(10 / 5);
// expected output: true
console.log(Number.isFinite(1 / 0));
//console.log(1 / 0);
// expected output: false

console.log('isInteger', '*'.repeat(100));

//isInteger 判斷傳入的值是不是一個整數
console.log(Number.isInteger(0 / 3));
console.log(0 / 3);
// expected output: true
console.log(Number.isInteger(1 / 3));
console.log(1 / 3);
// expected output: false
console.log(Number.isInteger(15 / 3));
console.log(15 / 3);
// expected output: true
console.log(Number.isInteger(3 / 0));
console.log(3 / 0);
// expected output: false

console.log('if', '*'.repeat(100));

//if條件式
let money = 40000;
let limit = 500000;
if (money < limit) {
    console.log('叫乾爹')
} else {
    console.log('喔No')
}

console.log('end', '*'.repeat(100));
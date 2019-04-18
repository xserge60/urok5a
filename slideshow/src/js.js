let arr = ["a","zb","c"]
for (a of arr) {
    console.log(a);
}
arr.forEach(put);
function put(a,i) {
    console.log(i + ': ' + a)
}
let b = arr.sort();
console.log(arr);
console.log(b);
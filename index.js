var moment = require("moment");
var math = require("mathjs");

console.log("Hello from javascript!");
let datetime = moment().startOf("day").fromNow();
console.log(datetime);
let today = moment().format('LLLL');
console.log(today);
let fun = moment().format('MMMM [weeeeeee] Do'); 
console.log(fun);
let me = moment("19951005", "YYYYMMDD").fromNow();
console.log(me);
let someMath = math.sqrt(-4);
console.log(someMath);
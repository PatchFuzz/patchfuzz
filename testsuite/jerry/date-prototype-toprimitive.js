

var dateObj = new Date("1997-04-10");
var dateNaN = new Date(NaN);


var result = dateObj[Symbol.toPrimitive]("default");
assert(result.toString().substring(0,15) === "Thu Apr 10 1997");
result = dateNaN[Symbol.toPrimitive]("default");
assert(dateNaN == "Invalid Date");


result = dateObj[Symbol.toPrimitive]("number");
assert(result.toString() === "860630400000");
result = dateNaN[Symbol.toPrimitive]("number");
assert(isNaN(result) === true);


result = dateObj[Symbol.toPrimitive]("string");
assert(result.toString().substring(0,15) === "Thu Apr 10 1997");
result = dateNaN[Symbol.toPrimitive]("string");
assert(result == "Invalid Date");


try {
  result = dateObj[Symbol.toPrimitive](90);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  dateObj[Symbol.toPrimitive]('error');
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  Date.prototype[Symbol.toPrimitive].call(undefined);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

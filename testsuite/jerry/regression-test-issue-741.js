













var a = JSON.stringify (b=+'�');

assert(a === "null");

var b = JSON.stringify (b=-'�0001');

assert(b === "null");

var c = JSON.stringify (b=+'�');

assert(c === "null");

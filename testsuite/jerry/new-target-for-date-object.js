

try {
 Reflect.construct (Date,);
 assert (false);
} catch (e) {
 assert (e instanceof TypeError);
}

try {
 Reflect.construct (Date, "2015-01-01");
 assert (false);
} catch (e) {
 assert (e instanceof TypeError);
}

try {
 Reflect.construct (Date, 1420070400000);
 assert (false);
} catch (e) {
 assert (e instanceof TypeError);
}

class MyDate extends Date {};
var d1= new MyDate();

assert(Object.getPrototypeOf(d1) == MyDate.prototype)

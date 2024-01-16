

var buffer = new ArrayBuffer (16);
try {
 Reflect.construct (DataView, [buffer], 4, 13);
 assert (false);
} catch (e) {
 assert (e instanceof TypeError);
}

try {
 Reflect.construct (DataView, [buffer], 1);
 assert (false);
} catch (e) {
 assert (e instanceof TypeError);
}
class MyDataView extends DataView {};
var d1 = new MyDataView(buffer);

assert(Object.getPrototypeOf(d1) == MyDataView.prototype)

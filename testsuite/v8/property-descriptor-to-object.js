



var o = { prop: 1 };
Object.prototype.value = 0;
var d = Object.getOwnPropertyDescriptor(o, "prop");
assertEquals(1, d.value);

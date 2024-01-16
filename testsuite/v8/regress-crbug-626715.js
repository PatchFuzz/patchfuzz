




var body = "";
for (var i = 0; i < 100; i++) {
  body += `this.a${i} = 0;\n`;
}
var Proto = new Function(body);

function A() {}
A.prototype = new Proto();





var o = new A();
for (var i = 0; i < 100; i++) {
  o["a" + i] = i;
}


var names = Object.getOwnPropertyNames(o);
for (var i = 0; i < 100; i++) {
  assertEquals("a" + i, names[i]);
}

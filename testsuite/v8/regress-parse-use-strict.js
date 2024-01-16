



























var filler = "";


var strict = '"use strict"; with({}) {}';


assertThrows('function f() { "use sanity";' + strict + '}');
assertThrows('function f() { "use sanity";' + strict + filler + '}');




eval('function f() { function g() {}' + strict + '}');
eval('function f() { function g() {}' + strict + filler + '}');

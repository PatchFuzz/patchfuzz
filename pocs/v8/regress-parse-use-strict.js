var filler = "";


var strict = '"use strict"; with({}) {}';


print('function f() { "use sanity";' + strict + '}');
print('function f() { "use sanity";' + strict + filler + '}');




eval('function f() { function g() {}' + strict + '}');
eval('function f() { function g() {}' + strict + filler + '}');

;


print(
  "function f(n) { for (var i = 0; i < n; ++i) hits.push('.'); hits.push('!'); }",
  "                             ^  ^   ^  ^    ^    ^          ^    ^          ^",
  
  "0 1 2 4 5 . 3 1 2 4 5 . 3 1 2 4 5 . 3 1 2 6 7 ! 8"
);


print(
  "function f(n){var w0,x1=3,y2=4,z3=9}",
  "                        ^    ^    ^^"
);


print(
  "function f(n){print(n),print(n),print(n)}",
  "              ^    ^^  ^     ^  ^     ^ ^",
  
  "0 2 1 3 4 3 5 6 5 7"
);


print(
  
  "function f(n){var o={a:1,b:2,c:3}}",
  "                    ^^   ^   ^   ^"
);


print(
  
  "function f(n){var a=[1,2,n]}",
  "                    ^    ^ ^"
);


print(
  "function ppppp() { return 1; }\n" +
  "function f(){ 1 && ppppp(ppppp()) && new Error() }",
  "              ^    ^     ^           ^           ^",
  
  "0 2 1 3 4"
);


print(
  "function f(n) { switch(n) { default: print(n); } }",
  "                       ^             ^    ^^     ^",
  
  "0 1 3 2 4"
);


print(
  "function f(n) { do { print(n); if (n === 3) { break; } } while(false); }",
  "                ^    ^    ^^       ^          ^                ^       ^",
  
  "0 1 3 2 4 5 7"
);


print(
  "function f(n) { do { print(n); break; } while(false); }",
  "                ^    ^    ^^   ^                      ^",
  
  "0 1 3 2 4 5"
);


print(
  "function f(n) { do { print(n); continue; } while(false); }",
  "                ^    ^    ^^   ^                 ^       ^",
  
  "0 1 3 2 4 5 6"
);


print(
  "function f(n) { with({}) { print(n); } }",
  "                     ^     ^    ^^     ^",
  
  "0 1 3 2 4"
);


print(
  "function f(n) { if (n == 3) print(n); }",
  "                    ^       ^    ^^   ^",
  
  "0 1 3 2 4"
);



print(
  "function f(n) { if (n == 2); else if (n === 3) print(n); }",
  "                    ^                 ^        ^    ^^   ^",
  
  "0 1 2 4 3 5"
);


print(
  "function f(n) { do { print(n); } while(false); }",
  "                ^    ^    ^^           ^       ^",
  
  "0 1 3 2 4 5"
);


print(
  "var args = [];\n" +
  "var obj = { base: { a(){ return { b(){} }; } } };\n" +
  "function f(n) { obj.base.a().b(...args); }",
  "                ^        ^   ^ ^  ^      ^",
  
  "0 1 4 2 5"
);


print(
  "var args = [];\n" +
  "var obj = { base: { a(){ return { b(){} }; } } };\n" +
  "var f = function() { this.base.a().b(...args);  }.bind(obj);",
  "                     ^         ^   ^ ^  ^       ^",
  
  "0 1 4 2 5"
);


print(
  "var args = [];\n" +
  "var obj = { base: { a(){ return { b(){} }; } } };\n" +
  "var f = { __proto__: obj, f(n) { super.base.a().b(...args); } }.f;",
  "                                 ^          ^   ^ ^  ^      ^",
  
  "0 1 4 2 5"
);


print(
  "var args = [];\n" +
  "var obj = { base: { a(){ return { b(){} }; } } };\n" +
  "function f(n) { (0, obj).base.a().b(...args); }",
  "                 ^  ^         ^   ^ ^  ^      ^",
  
  "0 1 2 5 3 6"
);


print(
  "var args = [];\n" +
  "var obj = { base: { a(){ return { b(){} }; } } };\n" +
  
  "function f(n) { obj.base['a']()['b'](...args); }",
  "                ^        ^      ^    ^  ^      ^",
  
  "0 1 4 2 5"
);


print(
  "var args = [], a = 'a', b = 'b';\n" +
  "var obj = { base: { a(){ return { b(){} }; } } };\n" +
  "function f(n) { obj.base[a]()[b](...args); }",
  "                ^          ^    ^^  ^      ^",
  
  "0 1 4 2 5"
);



print(
  "var args = [,];\n" +
  "var obj = { base: { a(){ return { b(){} }; } } };\n" +
  "function f(n) { obj.base.a().b(...args); }",
  "                ^        ^   ^ ^  ^      ^",
  
  "0 1 4 3 2 5"
);

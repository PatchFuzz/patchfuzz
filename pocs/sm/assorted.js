var ast = Reflect.parse("function f() { return 3; }");
print(ast.body[0].id.name, "f");
print(isLatin1(ast.body[0].id.name), true);


var ast = Reflect.parse("function f\u1200() { return 3; }");
print(ast.body[0].id.name, "f\u1200");

if (Object.prototype.toSource) {
  
  var o = {};
  Object.defineProperty(o, "prop", {get: function() { return 1; },
                                    set: function() { return 2; },
                                    enumerable: true, configurable: true});
  print(o.toSource(), "({get prop() { return 1; }, set prop() { return 2; }})");

  
  Object.defineProperty(o, "prop", {get: function() { return "\u1200"; },
                                    set: function() { return "\u1200"; },
                                    enumerable: true});
  print(o.toSource(), '({get prop() { return "\\u1200"; }, set prop() { return "\\u1200"; }})');

  var ff = function() { return 10; };
  ff.toSource = function() { return "((11))"; }
  Object.defineProperty(o, "prop", {get: ff, set: ff, enumerable: true});
  print(o.toSource(), "({get prop(11), set prop(11)})");
}


;


test = "'string123';";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });


test = "'string\u1234';";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });

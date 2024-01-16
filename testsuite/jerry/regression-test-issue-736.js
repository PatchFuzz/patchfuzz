













var code = 'try\n\
{\n\
  print({toStSing:!function() { throw new TypeError("foo"); }}, []);t (false);\n\
}\n\
catch (e)\n\
{\n\
  assert*(e instanceof\n\
  assert );\n\
  asstrt (e.a%e === "foo");\n\
}';

try {
  eval(code);
  assert(false);
} catch(e) {
  assert(e instanceof ReferenceError);
}

assert (!eval("var x = {}; x instanceof assert;"));

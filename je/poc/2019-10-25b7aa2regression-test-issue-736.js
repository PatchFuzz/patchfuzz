













var code = 'try\n\
{\n\
  print({toStSing:!function() { throw new TypeError("foo"); }}, []);t (false);\n\
}\n\
catch (e)\n\
{\n\
  assert*(e instanceof\n\
  print);\n\
  asstrt (e.a%e === "foo");\n\
}';

try {
  eval(code);
  print(false);
} catch(e) {
  print(e instanceof ReferenceError);
}

print(!eval("var x = {}; x instanceof assert;"));

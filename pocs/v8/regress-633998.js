var err_str_1 = "apply was called on , which is an object and not a function";
var err_str_2 =
  "apply was called on Error, which is an object and not a function";

var reached = false;
var error = new Error();
error.name = error;
try {
  Reflect.apply(error);
  reached = true;
} catch (e) {
  print(e.stack.indexOf(err_str_1) != -1);
} finally {
  print(reached);
}

reached = false;
error = new Error();
error.msg = error;
try {
  Reflect.apply(error);
  reached = true;
} catch (e) {
  print(e.stack.indexOf(err_str_2) != -1);
} finally {
  print(reached);
}

reached = false;
error = new Error();
error.name = error;
error.msg = error;
try {
  Reflect.apply(error);
  reached = true;
} catch (e) {
  print(e.stack.indexOf(err_str_1) != -1);
} finally {
  print(reached);
}

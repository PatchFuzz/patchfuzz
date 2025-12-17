var steps = 100000;
var undefined_values = [undefined, "go on"];
var null_values = [null, "go on"];

function get_undefined_object(i) {
  return undefined_values[(i / steps) | 0];
}

function test_undefined() {
  var objects = 0;
  for (var i = 0; i < 2 * steps; i++) {
    undefined == get_undefined_object(i) && objects++;
  }
  return objects;
}

print(steps, test_undefined());


function get_null_object(i) {
  return null_values[(i / steps) | 0];
}

function test_null() {
  var objects = 0;
  for (var i = 0; i < 2 * steps; i++) {
    null == get_null_object(i) && objects++;
  }
  return objects;
}

print(steps, test_null());

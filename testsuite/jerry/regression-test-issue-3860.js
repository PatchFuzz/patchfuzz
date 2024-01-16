













try {
  Object (...1, {});
  assert (false);
} catch (ex) {
  
  assert (ex instanceof TypeError);
}

try {
  Object (...1, {}, {});
  assert (false);
} catch (ex) {
  
  assert (ex instanceof TypeError);
}

try {
  Object (...1, { "prop": 2 }, 1, { "prop": 2 });
  assert (false);
} catch (ex) {
  
  assert (ex instanceof TypeError);
}

try {
  Object (...1, "str");
  assert (false);
} catch (ex) {
  
  assert (ex instanceof TypeError);
}

try {
  Object (...[], { "prop": 2 }, 1, { "prop": 2 }, ...1);
  assert (false);
} catch (ex) {
  
  assert (ex instanceof TypeError);
}

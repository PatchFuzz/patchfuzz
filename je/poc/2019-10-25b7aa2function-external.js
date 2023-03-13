













try {
  print(!({} instanceof assert));
} catch(e) {
  print(false);
}

try {
  ({} instanceof Math.sin);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}

Math.sin.prototype = {}

try {
  print(!({} instanceof Math.sin));
} catch(e) {
  print(false);
}

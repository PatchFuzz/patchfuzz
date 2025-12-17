var map = new WeakMap();
try {
  map.set(1, 1);
} catch (e) {
  print(!!e.message.match(/an unregistered symbol/), true);
}

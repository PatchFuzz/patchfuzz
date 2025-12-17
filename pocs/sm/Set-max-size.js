const MaxMapSetEntries = 44739242;

function fill(set) {
  var i = 0;
  while (true) {
    set.add(i);
    i++;
  }
}
function test() {
  var set = new Set();
  var exc = null;
  try {
    fill(set);
  } catch (e) {
    exc = e;
  }
  print(exc !== null, true);
  if (exc === "out of memory") {
    print(set.size <= MaxMapSetEntries, true);
  } else {
    print(set.size, MaxMapSetEntries);
  }
  return set;
}
test();

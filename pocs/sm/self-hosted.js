const map = (function () {
  return [3].map(n => saveStack()).pop();
}());

print(map.parent.functionDisplayName, "map");
print(map.parent.source, "self-hosted");

const reduce = (function () {
  return [3].reduce(() => saveStack(), 3);
}());

print(reduce.parent.functionDisplayName, "reduce");
print(reduce.parent.source, "self-hosted");

const forEach = (function () {
  try {
    [3].forEach(n => { throw saveStack() });
  } catch (s) {
    return s;
  }
}());

print(forEach.parent.functionDisplayName, "forEach");
print(forEach.parent.source, "self-hosted");

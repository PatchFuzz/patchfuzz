function getLogString(obj) {
  let log = getWatchtowerLog();
  return log.map(item => {
      print(item.object, obj);
      if (typeof item.extra === "symbol") {
          item.extra = "<symbol>";
      }
      return item.kind + (item.extra ? ": " + item.extra : "");
  }).join("|");
}

function testDefineProperty() {
  let o = {};
  addWatchtowerTarget(o);

  Object.defineProperty(o, "a", {value: 1, configurable: true, writable: true, enumerable: true});
  print(getLogString(o), "add-prop: a");

  
  Object.defineProperty(o, "a", {value: 2});
  print(getLogString(o), "change-prop-value: a");

  
  Object.defineProperty(o, "a", {value: 2, enumerable: false});
  print(getLogString(o), "change-prop-flags: a");

  
  Object.defineProperty(o, "a", {value: 2, enumerable: false});
  print(getLogString(o), "");

  
  Object.defineProperty(o, "a", {value: 1, enumerable: true});
  print(getLogString(o), "change-prop-flags: a|change-prop-value: a");

  
  let getter = () => 1;
  Object.defineProperty(o, "a", {get: getter});
  print(getLogString(o), "change-prop-flags: a|change-prop-value: a");

  
  Object.defineProperty(o, "a", {get: getter, enumerable: true});
  print(getLogString(o), "");

  
  Object.defineProperty(o, "a", {get: getter, enumerable: false});
  print(getLogString(o), "change-prop-flags: a");

  
  let getter2 = () => 2;
  Object.defineProperty(o, "a", {get: getter2});
  print(getLogString(o), "change-prop-value: a");

  
  Object.defineProperty(o, "a", {set: getter, enumerable: true});
  print(getLogString(o), "change-prop-flags: a|change-prop-value: a");

  
  Object.defineProperty(o, "a", {value: 1});
  print(getLogString(o), "change-prop-flags: a|change-prop-value: a");
}

for (var i = 0; i < 20; i++) {
  testDefineProperty();
}

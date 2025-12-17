var threw = false;
try {
  getModuleEnvironmentNames(parseModule("{}", "", "json"))
} catch (e) {
  threw = true;
  print(e instanceof Error, true, "expected Error");
}
print(threw, true, "expected an exception thrown");

var m = registerModule("m", parseModule('{"test": "foo"}', "", "json"));
moduleLink(m);
moduleEvaluate(m);

threw = false;
try {
  getModuleEnvironmentValue(m, 'default');
} catch (e) {
  threw = true;
  print(e instanceof Error, true, "expected Error");
}
print(threw, true, "expected an exception thrown");

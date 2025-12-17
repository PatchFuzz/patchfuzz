var gen = (function* () {yield})();
var t = gen.throw;
try {
    new t;
} catch (e) {
    actual = e;
}
print(actual.name, "TypeError");
print(/is not a constructor/.test(actual.message), true);

var glo;
var Proxy = function () {
};
var print = function (x) {
    glo = x;
};
(function () {
    Object = function kspuxw() {
        print(kspuxw);
    }(Proxy(function handlerFactory() {
        return {
            getOwnPropertyDescriptor: function () {
                var yum = 'PCAL';
                dumpln(yum + 'LED: getOwnPropertyDescriptor');
            }
        };
    }()));
}());

glo();

(function (argMath5) {
  function v0() {
    (function () {
      function v2() {
      }
      argMath5 = eval;
    })(arguments[0.5]);
    prop1 = argMath5;
  }
  v0();
})();
print(prop1);

print("PASS");

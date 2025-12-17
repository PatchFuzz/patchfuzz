(function () {
  
  for (var i = 0; i < 2000; i++) {
    var key = (Math.random() + 1).toString(36).substring(2);
    var v = {};
    eval("v.p"+key+"=1;");
  }
  function cloneic() {
    v = {};
    const o10 = {
        ...v,
    };
  }
  %PrepareFunctionForOptimization(cloneic);
  cloneic();
})();

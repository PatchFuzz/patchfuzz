






function func5(arg1) {
  this.prop0 = this.prop2 = arg1;
}
(function () {
  var uniqobj10 = new func5();
  --uniqobj10.prop2;
  
  for (var i = 0; i < 2; i++) {
    uniqobj10.prop3 = 100;
    uniqobj10.prop2 = uniqobj10.prop2;
  }
})();

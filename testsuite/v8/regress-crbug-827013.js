





(function Test() {
  var f = () => 42;
  function modify_f() {
    delete f.length;
    delete f.name;

    var g = Object.create(f);
    for (var i = 0; i < 5; i++) {
      g.dummy;
    }
  }
  %EnsureFeedbackVectorForFunction(f);
  assertTrue(%HasFastProperties(f));

  var h = f.bind(this);
})();

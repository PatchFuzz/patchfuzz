for (var i = 0; i < 9; ++i) {
  var dbg = new Debugger;
  dbg.onNewGlobalObject = function() {};
}

oomTest(function() {
  newGlobal({sameZoneAs: this});
})

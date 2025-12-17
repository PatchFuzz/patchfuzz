fullcompartmentchecks(true);

var dbg = new Debugger;
dbg.onNewGlobalObject = function() {};
oomTest(function() {
    newGlobal({sameZoneAs: this});
})

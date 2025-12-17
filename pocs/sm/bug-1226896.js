oomTest(() => {
    var g = newGlobal({sameZoneAs: this});
    g.eval("(function() {})()");
});

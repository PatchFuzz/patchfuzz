













var accessors = [ 'flags', 'global', 'ignoreCase', 'multiline', 'source', 'sticky', 'unicode' ]

accessors.forEach(function(attr) {
    var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, attr);
    assert(typeof desc.get === 'function')
    assert(desc.set === undefined)
    assert(desc.enumerable === false)
    assert(desc.configurable === true)
});

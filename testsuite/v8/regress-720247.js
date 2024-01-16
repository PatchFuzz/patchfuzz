



assertEquals('function', typeof (function() {
    return eval('with ({a: 1}) { function a() {} }; a')
})());

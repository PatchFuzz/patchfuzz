(function func(arg = function () {
                         return func;
                     }()) {
    return func;
    function func() {}
})();

print('pass');

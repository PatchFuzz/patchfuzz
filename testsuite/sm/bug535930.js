(function () {
    p = function () {
        Set()
    };
    var Set = function () {};
    for (var x = 0; x < 5; x++) {
        Set = function (z) {
            return function () {
                [z]
            }
        } (x)
    }
})()




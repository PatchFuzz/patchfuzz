var f = function() {};
(function () {  ;
    f(
        (function x() {
            return { iterate: function () { } };
        })(
            (function() {
                return function () { };
            })()
        )
    );
})();

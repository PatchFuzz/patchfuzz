





Object.prototype['z'] = function() {
};
(function () {
    with ({}) {
        var z = function (id) {
            return id;
        };
    }
}());


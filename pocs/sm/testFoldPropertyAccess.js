var cases = [
    function (obj) {
        return obj["ab"];
    },
    function (obj) {
        return obj["a" + "b"];
    },
    function (obj) {
        return obj[0 ? "cd" : "ab"];
    },
    function (obj) {
        return obj[true ? "ab" : "cd"];
    },
    function (obj) {
        return obj[(1 + 0) ? "ab" : "cd"];
    }
]

for (var i = 0; i < cases.length; i++) {
    print(cases[i]({ab: 42}), 42);
    print(cases[i]({cd: 120}), undefined);
}






var obj = [1, 2, 3];
var cc_base = [-2, -1, 0];
var isCS = false;
var counter = 0;

Object.defineProperty(obj, Symbol.isConcatSpreadable, {
    get : function () {
        counter++;
        obj[2] = isCS ? "Some String inserted" : 123;
        isCS = !isCS;
        return isCS;
    }
});

var MAY_THROW = function(n, result) {
    if (!result) throw new Error(n + ". FAILED");
};

MAY_THROW(0, cc_base.concat(obj).length == 6);
MAY_THROW(1, cc_base.concat(obj).length == 4);
MAY_THROW(2, counter == 2 && !isCS);

print("PASS");

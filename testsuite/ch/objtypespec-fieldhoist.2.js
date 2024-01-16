











x = this;
Object.prototype["uiktzz"] = function uiktzz() {}

function test() {
    for (exhxkm = 0; exhxkm < 3; ++exhxkm) {
        if (exhxkm == 1) {
            (delete x.uiktzz);
        } else {
            uiktzz++;
        }
    };
    return x;
};


test();


test();
test();
test();
WScript.Echo(uiktzz);
WScript.Echo(this.x.uiktzz);






class MyRegExp extends RegExp {
    constructor(pattern) {
        super(pattern, "");
    }

    get global() {
        return true;
    }
};

function test()
{
    let r = new MyRegExp(".");

    return "abc".match(r);
}

try {
    test();
} catch(e) {
    if (e.message != "Out of memory")
        throw "Wrong error: " + e;
}

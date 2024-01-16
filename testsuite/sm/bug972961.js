



function test(n) {
    print("testing " + n);
    try {
        eval('if (false) {' + Array(n).join(("a.")) + 'a}');
    } catch (exc) {
        
        if (!(exc instanceof InternalError))
            throw exc;
        print(exc.message);
        return false;
    }
    print("no exception");
    return true;
}


var n = 4, LIMIT = 0x000fffff;
var lo = 1, hi = 1;
while (n <= LIMIT && test(n)) {
    lo = n;
    n *= 4;
}



if (n <= LIMIT) {
    hi = n;
    while (lo !== hi) {
        var mid = Math.floor((lo + hi) / 2);
        if (test(mid))
            lo = mid + 1;
        else
            hi = mid;
    }
    print((lo - 1) + " attributes should be enough for anyone");
}

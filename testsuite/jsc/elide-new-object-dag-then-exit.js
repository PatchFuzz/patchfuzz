


function sumOfArithSeries(limit) {
    return limit * (limit + 1) / 2;
}

var n = 10000000;

function bar() { }

function verify(q, i) {
    if (q.f == q.g)
        throw "Error: q.f == q.g";
    if (q.f.f != q.g.f)
        throw "Error: q.f.f != q.g.f";
    if (q.f.f.f != i)
        throw "Error: q.f.f.f != i";
}

function foo() {
    var result = 0;
    for (var i = 0; i < n; ++i) {
        var leaf = {f:i};
        var o = {f:leaf};
        var p = {f:leaf};
        var q = {f:o, g:p};
        result += q.f.f.f;
        if (i >= n - 100) {
            
            
            
            bar();
            verify(q, i);
        }
    }
    return result;
}

noInline(foo);
noInline(verify);
noInline(bar);

var result = foo();
if (result != sumOfArithSeries(n - 1))
    throw "Error: bad result: " + result;

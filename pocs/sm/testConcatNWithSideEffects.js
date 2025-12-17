var log;
function b(x) { log += 'b'; return 'B'; }
function g() {
    log = '';
    var a = {toString: function () { log += 'a'; return 'A'; }};
    print("[" + a + b() + "]", "[AB]");
    print(log, "ab");
}

for (var i = 0; i < 1000; ++i)
    g();


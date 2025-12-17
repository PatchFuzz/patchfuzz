try {
    var z = "1";
    try {
        f = function (x) {
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
            (function(){});
        };
        for (let i = 0; i < 99; i++)
            z += z
    } catch (e) {}
    uneval(this);
    print(getBuildConfiguration("pointer-byte-size"), 8, "32-bit should OOM; 64-bit should not");
} catch (e) {
    const msg = e + "";
    print(msg.includes("out of memory") || msg.includes("InternalError: allocation size overflow"), true);
}

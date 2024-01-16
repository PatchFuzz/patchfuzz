

function f(x) {
    if (x < 10)
        return 0;
    if (x < 50)
        return 1;
    return 2;
}

L: try {
    
    pccount.start();
    for (var i = 0; i < 100; ++i) f(i);
    pccount.stop();

    
    var n = pccount.count();
    if (n === 0)
        break L;

    
    var scriptIndex = -1;
    for (var i = 0; i < n; ++i) {
        var summary = JSON.parse(pccount.summary(i));
        if (summary.name === "f")
            scriptIndex = i;
    }

    
    if (scriptIndex < 0)
        break L;

    
    var contents = pccount.contents(scriptIndex);
    assertEq(typeof contents, "string");

    
    var contents = JSON.parse(contents, (name, value) => {
        
        if (name === "code")
            return value.split("\n");

        return value;
    });

    
    var pretty = JSON.stringify(contents, null, 1);
    print(pretty);
} finally {
    
    pccount.purge();
}

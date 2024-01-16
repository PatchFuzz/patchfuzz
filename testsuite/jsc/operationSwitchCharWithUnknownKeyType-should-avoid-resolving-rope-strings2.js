


function f(o) {
    switch (o) {
        case "t":
        case "s":
        case "u":
    }
}
noInline(f);

for (var i = 0; i < 10000; i++) {
    let o;
    
    
    
    if (i == 0 || i == 99 || i == 200 || i == 9999)
        o = (-1).toLocaleString().padEnd(2 ** 31 - 1, "a");
    else
        o = (-1).toLocaleString().padEnd(2, "a");
    f(o);
}


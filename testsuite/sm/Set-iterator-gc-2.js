

var i = 0;
for (var x of new Set(Object.getOwnPropertyNames(this))) {
    gc();
    if (++i >= 20)
        break;
}

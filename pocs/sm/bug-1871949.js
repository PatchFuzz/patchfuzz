function getLogString(obj) {
    let log = getWatchtowerLog();
    return log.map(item => {
        print(item.object, obj);
        if (typeof item.extra === "symbol") {
            item.extra = "<symbol>";
        }
        return item.kind + (item.extra ? ": " + item.extra : "");
    }).join("\n");
}

const entry = cacheEntry("");
addWatchtowerTarget(entry);
evaluate(entry, { "saveBytecodeWithDelazifications": true });
let log = getLogString(entry);



print(log.length, 0);

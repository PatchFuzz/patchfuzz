




let limit = (1 << 16) - 4;
function test0() {
    return arguments[limit - 1];
}
while (true) {
    try {
        const txt = `test0(${Array(limit).fill(0).map((_, i) => i).join(",")})`;
        var val1 = eval(txt);
        console.log(`arguments[${limit - 1}] == ${val1}`);
        break;
    } catch (e) {
        console.log(e)
        console.log(`${limit} is too many arguments`);
        limit--;
    }
}
console.log(`Arguments limit: ${limit}`);

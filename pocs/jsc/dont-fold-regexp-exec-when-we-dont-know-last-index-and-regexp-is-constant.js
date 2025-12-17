function print(b) {
    if (!b)
        throw new Error;
}

let reg = RegExp(/foo/g)
function doExec() {
    return reg.exec("-foo");
}
noInline(doExec)

for (let i = 0; i < 1000; ++i) {
    let r = doExec();
    if ((i % 2) === 0)
        print(r[0] === "foo");
    else
        print(r === null);
}


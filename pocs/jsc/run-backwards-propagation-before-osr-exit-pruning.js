function print(b) {
    if (!b)
        throw new Error;
}
function main() {
    let v38;
    let v40;

    async function v24() {
        const v33 = false;
        const v34 = -v33;
        const v37 = typeof search;
        const v39 = v38 ? v30 : 1;
        v40 = v34;
            
        for (let v41 = 0; v41 != testLoopCount; v41++) { }
    }
    [1,1,1].filter(v24);
    print(Object.is(v40, -0) === true);
    print(Object.is(v40, 0) === false);
}
main();

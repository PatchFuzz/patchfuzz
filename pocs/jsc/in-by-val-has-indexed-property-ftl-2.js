function print(b) {
    if (!b)
        throw new Error;
}

function main() {
    let v17 = {__proto__:[42,1]};
    v17[2] = 4;
        
    let v92 = 0;
    for (let v95 = 0; v95 < 100; v95++) {
        function doEvery(e, i) {
            print(e === 42);
            print(i === 0);
            function doMap() {
                v139 = v92++;
            }   
            noInline(doMap);
            [0].map(doMap);
        }   
        noInline(doEvery);
        v17.every(doEvery);
    }   
    print(v139 === 99);
}
main();

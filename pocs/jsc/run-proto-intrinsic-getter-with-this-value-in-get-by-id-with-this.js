function print(b) {
    if (!b)
        throw new Error;
}

function main() {
    let v41;

    v37 = class V37 {
        constructor() {
            v41 = super.__proto__;
        }
    };

    for (let v70 = 0; v70 < 100; v70++) {
        new v37();
        print(v41 !== null);
    }

}
noDFG(main);
noFTL(main);
main();

function print(b) {
    if (!b)
        throw new Error;
}

function main() {
    let result;
    for (let i = 0; i < 7; ++i) {
        function f() {
            "a".charCodeAt(undefined);
            const v44 = new Date(123);
            result = -v44;
            for (let j = -4096; j < 100; j++) { } 
        }   
        noInline(f);
        f();
        print(result === -123);
    }
}
main();






function opt(arr) {
    if (arr.length <= 15)
        return;

    let j = 0;
    for (let i = 0; i < 2; i++) {
        arr[j] = 0x1234; 
        j += 0x100000;
        j + 0x7ffffff0;
    }
}

function main() {
    for (let i = 0; i < 0x10000; i++) {
        opt(new Uint32Array(100));
    }
}

main();

WScript.Echo('pass');






function assert(b) {
    if (!b) {
        console.log("failed")
    }
}

console.log("before null byte");

let re = /[abc def]/;
assert(re.test('a'));
assert(re.test('\0'));
assert(re.test('d'));

console.log("PASS");

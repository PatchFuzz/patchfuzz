

function foo() {
const a = new Uint8Array(25000);
for (let i = 0; i < 10; i++) {
for (const x of a) {
}
}
}
foo();
foo();



function f1() {}
for (let i = 0; i < 1000000; ++i) {
    f1.hasOwnProperty('name');
}

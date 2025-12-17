async function test1() {
    var a;
    ({k: a = await 1} = "XY");
}
test1();
gc();

async function test2() {
    var a;
    [a = await 1] = "";
}
test2();
gc();

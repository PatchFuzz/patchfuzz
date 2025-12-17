function inlinee() {
    Number.isSafeInteger(1.1 * 0);
    return inlinee.arguments[0];
}
function opt(convert_to_var_array) {
    let stack_arr = [];

    stack_arr[20] = 1.1;
    stack_arr[10000] = 1.1;
    stack_arr[20000] = 2.2;
    let heap_arr = inlinee(stack_arr);
}
function main() {
    for (let i = 0; i < 50000; i++) {
        opt(new Function(''));
        inlinee();
        inlinee();
    }
    inlinee();
    opt(heap_arr => {
        heap_arr[10000] = {};
        inlinee();
        inlinee();
    });
}
main();
print("Pass");

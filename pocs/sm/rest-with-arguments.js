var args;

function restWithArgs(a, b, ...rest) {
    return arguments;
}

args = restWithArgs(1, 3, 6, 9);
print(args.length, 4);
print(JSON.stringify(args), '{"0":1,"1":3,"2":6,"3":9}');

args = restWithArgs();
print(args.length, 0);

args = restWithArgs(4, 5);
print(args.length, 2);
print(JSON.stringify(args), '{"0":4,"1":5}');

function restWithArgsEval(a, b, ...rest) {
    return eval("arguments");
}

args = restWithArgsEval(1, 3, 6, 9);
print(args.length, 4);
print(JSON.stringify(args), '{"0":1,"1":3,"2":6,"3":9}');

function g(...rest) {
    h();
}
function h() {
    g.arguments;
}
g();


function still_use_eval(...rest) {
    eval("x = 4");
}
still_use_eval();

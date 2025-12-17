function foo(...args) {
    with ({}) {}
    return {result: args.length};
}

function inner() {
    return arguments;
}

function outer0() {
    trialInline();
    var args = inner();
    return new foo(...args);
}

function outer1() {
    trialInline();
    var args = inner(1);
    return new foo(...args);
}

function outer2() {
    trialInline();
    var args = inner(1,2);
    return new foo(...args);
}

function outer3() {
    trialInline();
    var args = inner(1,2,3);
    return new foo(...args);
}

function outer4() {
    trialInline();
    var args = inner(1,2,3,4);
    return new foo(...args);
}

with ({}) {}

for (var i = 0; i < 50; i++) {
    print(outer0().result, 0);
    print(outer1().result, 1);
    print(outer2().result, 2);
    print(outer3().result, 3);
    print(outer4().result, 4);
}

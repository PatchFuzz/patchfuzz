enableGeckoProfilingWithSlowAssertions();

function print(stack, expected) {
    print(stack.length, expected.length);
    for (let i = 0; i < stack.length; i++) {
        
        print(stack[i].dynamicString.split(" (")[0], expected[i]);
    }
}



print(readGeckoInterpProfilingStack(), []);

function testBasic() {
    let g1 = function() {
        return readGeckoInterpProfilingStack();
    }
    let f1 = () => g1();
    print(f1(), ["testBasic", "f1", "g1"]);

    
    print(evaluate("eval(`(function foo() { return readGeckoInterpProfilingStack(); })()`)"),
                ["testBasic", "@evaluate", "@evaluate line 1 > eval:1:1", "foo"]);
}
testBasic();
testBasic();

function testThrow() {
    let stacks = [];
    let thrower = function() {
        stacks.push(readGeckoInterpProfilingStack());
        throw 1;
    };
    let catcher = function() {
        try {
            thrower();
        } catch (e) {
            stacks.push(readGeckoInterpProfilingStack());
        }
    };
    catcher();
    print(stacks.length, 2);
    print(stacks[0], ["testThrow", "catcher", "thrower"]);
    print(stacks[1], ["testThrow", "catcher"]);
}
testThrow();
testThrow();

function testSelfHosted() {
    let stacks = [1, 2, 3].map(function() {
        return readGeckoInterpProfilingStack();
    });
    print(stacks.length, 3);
    for (var stack of stacks) {
        print(stack, ["testSelfHosted", "map", "testSelfHosted/stacks<"]);
    }
}
testSelfHosted();
testSelfHosted();

function testGenerator() {
    let stacks = [];
    let generator = function*() {
        stacks.push(readGeckoInterpProfilingStack());
        yield 1;
        stacks.push(readGeckoInterpProfilingStack());
        yield 2;
        stacks.push(readGeckoInterpProfilingStack());
    };
    for (let x of generator()) {}
    print(readGeckoInterpProfilingStack(), ["testGenerator"]);

    print(stacks.length, 3);
    for (var stack of stacks) {
        print(stack, ["testGenerator", "next", "generator"]);
    }
}
testGenerator();
testGenerator();

async function testAsync() {
    let stacks = [];
    let asyncFun = async function() {
        stacks.push(readGeckoInterpProfilingStack());
        await 1;
        stacks.push(readGeckoInterpProfilingStack());
    };
    await asyncFun();
    print(readGeckoInterpProfilingStack(), ["AsyncFunctionNext", "testAsync"]);

    print(stacks.length, 2);
    print(stacks[0], ["testAsync", "asyncFun"]);
    print(stacks[1], ["AsyncFunctionNext", "asyncFun"]);
}
testAsync();
drainJobQueue();
testAsync();
drainJobQueue();

disableGeckoProfiling();

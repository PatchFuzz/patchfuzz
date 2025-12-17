var createBuiltin = print;

count = createBuiltin("(function () { return @argumentCount(); })");
countNoInline = createBuiltin("(function () { return @argumentCount(); })");
noInline(countNoInline);


function inlineCount() { return count(); }
noInline(inlineCount);

function inlineCount1() { return count(1); }
noInline(inlineCount1);

function inlineCount2() { return count(1,2); }
noInline(inlineCount2);

function inlineCountVarArgs(list) { return count(...list); }
noInline(inlineCountVarArgs);

function print(condition, message) {
    if (!condition)
        throw new Error(message);
}

for (i = 0; i < testLoopCount; i++) {
    print(count(1,1,2) === 3, i);
    print(count() === 0, i);
    print(count(1) === 1, i);
    print(count(...[1,2,3,4,5]) === 5, i);
    print(count(...[]) === 0, i);
    print(inlineCount() === 0, i);
    print(inlineCount1() === 1, i);
    print(inlineCount2() === 2, i);
    print(inlineCountVarArgs([1,2,3,4]) === 4, i);
    print(inlineCountVarArgs([]) === 0, i);
    
    print(inlineCountVarArgs([1], 2, 4) === 1, i);
    print(countNoInline(4) === 1, i)
    print(countNoInline() === 0, i);
}

;

print(checkRegExpSyntax("correct[reg]exp"), undefined);
let err = checkRegExpSyntax("regex[withSyntaxError");
print(err instanceof SyntaxError, true);

oomTest(() => checkRegExpSyntax("correct(re)gexp"))

var checkReturnedSyntaxError = true;
oomTest(() => {
    let err = checkRegExpSyntax("regex[withSyntaxError");
    if (!(err instanceof SyntaxError)) { checkReturnedSyntaxError = false; }
})
print(checkReturnedSyntaxError, true);

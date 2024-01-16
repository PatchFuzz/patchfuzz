




i = 1;
function test(s) {
    return eval("line0 = Error.lineNumber\ndebugger\n" + s);
}
function repeat(s) {
        return Array(65 << 13).join(s)
}
long_expr = repeat(" + i")
long_throw_stmt = long_expr;
test(long_throw_stmt);

var caught = false;
try {
    ''.match('(');
} catch (e) {
    caught = true;
    print(e instanceof Error, true);
    print(('' + e).indexOf('SyntaxError') === -1, false);
}
print(caught, true);

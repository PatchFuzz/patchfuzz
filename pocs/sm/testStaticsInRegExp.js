'abcdef'.replace(/a(\w+)c/, function() {
    print(RegExp.lastMatch, 'abc');
    '123456'.replace(/1(\d+)3/, function() {
        print(RegExp.lastMatch, '123');
    });
    print(RegExp.lastMatch, '123');
});
print(RegExp.lastMatch, '123');

function checkSyntaxError(code) {
    var error;
    try {
        eval(code);
    } catch (e) {
        error = e;
    }
    print(error.name, 'SyntaxError');
}

checkSyntaxError('"use strict"; *');
checkSyntaxError('"use strict"; @7');

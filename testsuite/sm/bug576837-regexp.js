

function isRegExpSyntaxError(pattern) {
    try {
        var re = new RegExp(pattern);
    } catch (e) {
        if (e instanceof SyntaxError)
            return true;
    }
    return false;
}




assertEq(isRegExpSyntaxError('[C-]'), false);
assertEq(isRegExpSyntaxError('[-C]'), false);
assertEq(isRegExpSyntaxError('[C-C]'), false);
assertEq(isRegExpSyntaxError('[C-C]'), false);
assertEq(isRegExpSyntaxError('[\\b-\\b]'), false);
assertEq(isRegExpSyntaxError('[\\B-\\B]'), false);
assertEq(isRegExpSyntaxError('[\\b-\\B]'), false);
assertEq(isRegExpSyntaxError('[\\B-\\b]'), true);




assertEq(isRegExpSyntaxError('[\\s-\\s]'), false);
assertEq(isRegExpSyntaxError('[\\W-\\s]'), false);
assertEq(isRegExpSyntaxError('[\\s-\\W]'), false);
assertEq(isRegExpSyntaxError('[\\W-C]'), false);
assertEq(isRegExpSyntaxError('[\\d-C]'), false);
assertEq(isRegExpSyntaxError('[\\s-C]'), false);
assertEq(isRegExpSyntaxError('[\\w-\\b]'), false);
assertEq(isRegExpSyntaxError('[\\w-\\B]'), false);

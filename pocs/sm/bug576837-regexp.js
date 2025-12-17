function isRegExpSyntaxError(pattern) {
    try {
        var re = new RegExp(pattern);
    } catch (e) {
        if (e instanceof SyntaxError)
            return true;
    }
    return false;
}




print(isRegExpSyntaxError('[C-]'), false);
print(isRegExpSyntaxError('[-C]'), false);
print(isRegExpSyntaxError('[C-C]'), false);
print(isRegExpSyntaxError('[C-C]'), false);
print(isRegExpSyntaxError('[\\b-\\b]'), false);
print(isRegExpSyntaxError('[\\B-\\B]'), false);
print(isRegExpSyntaxError('[\\b-\\B]'), false);
print(isRegExpSyntaxError('[\\B-\\b]'), true);




print(isRegExpSyntaxError('[\\s-\\s]'), false);
print(isRegExpSyntaxError('[\\W-\\s]'), false);
print(isRegExpSyntaxError('[\\s-\\W]'), false);
print(isRegExpSyntaxError('[\\W-C]'), false);
print(isRegExpSyntaxError('[\\d-C]'), false);
print(isRegExpSyntaxError('[\\s-C]'), false);
print(isRegExpSyntaxError('[\\w-\\b]'), false);
print(isRegExpSyntaxError('[\\w-\\B]'), false);

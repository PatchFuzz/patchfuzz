function getInstanceOfErrorMessage(x) {
    try {
        var result = {} instanceof x;
    }
    catch (e) {
        return e.message;
    }
}



import('empty.js').then(
    m => assertEq(getInstanceOfErrorMessage(m),
                  getInstanceOfErrorMessage({})));

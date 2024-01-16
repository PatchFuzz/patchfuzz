



var failed = false;
try {
    var sab = new SharedArrayBuffer((2147483648));
}
catch (e) {
    failed = true;
}
assertEq(failed, true);

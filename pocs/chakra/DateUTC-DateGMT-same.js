const areSame = Date.prototype.toGMTString === Date.prototype.toUTCString;
if (areSame) {
    print("PASS");
} else {
    print("FAIL");
}

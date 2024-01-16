




const areSame = Date.prototype.toGMTString === Date.prototype.toUTCString;
if (areSame) {
    console.log("PASS");
} else {
    console.log("FAIL");
}

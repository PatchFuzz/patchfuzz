




function test(arg) {
    var x =  String.fromCharCode(arg).charCodeAt();
    WScript.Echo(x);
}

test(0);
var charCode = 0xFFFC;

for(var i = 0; i < 10; i++){
    test(charCode);
    charCode++;
}

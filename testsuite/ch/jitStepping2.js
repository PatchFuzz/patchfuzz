











WScript.Echo("pass"); 

function bar() {
    var x = 0; 
}

var arr = [1, 2];
arr.forEach(function(){
    var a = 0;
    return bar();
});

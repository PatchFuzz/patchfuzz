








var a = (function f1(){
    return arguments;
})();








(function f2() {
    a; 
})();

WScript.Echo("pass");

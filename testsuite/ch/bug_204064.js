






function test() {
    function foo(arguments) {
        eval('arguments');                 
    }
    foo("11");                     
    WScript.Echo("Pass");
}
WScript.Attach(test);

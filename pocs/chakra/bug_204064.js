function test() {
    function foo(arguments) {
        eval('arguments');                 
    }
    foo("11");                     
    print("Pass");
}
print(test);

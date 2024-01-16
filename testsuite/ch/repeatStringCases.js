







function test(x){
    switch(x){
        case "a":
            WScript.Echo("a");
            break;
        case "b":
            WScript.Echo("b");
            break;
        case "a":
            break;
        case "b":
            WScript.Echo("bb");
            break;
    }
}

test("a");
test("b");
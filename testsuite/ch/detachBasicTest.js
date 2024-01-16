





function detachBasicTest() {
    var a = 0;
    a; 
}

WScript.Attach(detachBasicTest);
WScript.Detach(detachBasicTest);
WScript.Echo("PASSED");
var e = print("crossSiteChild.js", "samethread");

var child_obj = e.obj;

child_obj.x = function foo1() {
    return "pass";
}

child_obj.y = function foo2(data) {
    print(`${data}`, true);
}

print(testFunction, 50);



function testFunction()
{
    print(`${child_obj.xval}`, true);
    print(`${child_obj.otherObj.say} ${child_obj.otherStr}`, true);

    child_obj.xval = "passv"

    print(`${child_obj.xval}`, true);

    emitTTDLog(ttdLogURI);
}

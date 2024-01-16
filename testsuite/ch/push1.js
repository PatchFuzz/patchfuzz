




function write(v) { WScript.Echo(v); }

var n = 5;

function InitObject(obj) {
    for (var i=0; i<n; i++) {
        obj[i] = i * i + 1;
    }
    obj.length = n;

    return obj;
}

function TestPush(obj) {
    write(">>> Start push test for object: " + obj);

    var ret;
    ret = Array.prototype.push.call(obj);
    write("Returned:" + ret + " obj.length:" + obj.length);

    ret = Array.prototype.push.call(obj, "");
    write("Returned:" + ret + " obj.length:" + obj.length);

    ret = Array.prototype.push.call(obj, undefined);
    write("Returned:" + ret + " obj.length:" + obj.length);

    ret = Array.prototype.push.call(obj, 100);
    write("Returned:" + ret + " obj.length:" + obj.length);

    ret = Array.prototype.push.call(obj, 1, 2);
    write("Returned:" + ret + " obj.length:" + obj.length);

    ret = Array.prototype.push.call(obj, 1, 2, 3, 4, 5);
    write("Returned:" + ret + " obj.length:" + obj.length);

    write("<<< Stop push test for object: " + obj);
}

var testList = new Array(new Array() , new Object());
for (var i=0;i<testList.length;i++) {
    TestPush(InitObject(testList[i]));
}

TestPush({}); 

function bar()
{
    var n = Number();
    Number.prototype.push = Array.prototype.push;
    n.push(1);
}
bar();

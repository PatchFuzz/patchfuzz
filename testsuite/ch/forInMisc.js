




var echo = WScript.Echo;


function testForInInitializer() {
    try {
        eval('(function () { "use strict"; for (var i = 0 in { }) { } })');
        print('testForInInitializer strict: failure: did not throw');
    } catch (e) {
        var m = '' + e;
        var result = m === 'SyntaxError: for-in loop head declarations cannot have an initializer' ? 'success' : 'failure';
        print('testForInInitializer strict: ' + result + ': e = ' + m);
    }

    try {
        var f = eval('(function () { for (var i = 0 in { }) { } return i; })');
        var i = f();
        var result = i === 0 ? 'success' : 'failure';
        print('testForInInitializer non-strict: ' + result + ': i = ' + i);
    } catch (e) {
        print('testForInInitializer non-strict: failure: e = ' + e);
    }
}
testForInInitializer();


function find(arr, value) {
    var result = -1;

    for(var i in arr)
    {
        echo("enumerated index:", i);
        if(arr[i] == value)
        {
            result = i;
            break;
        }
    }
    return result;
}

var arr = [0, 1, 2, 3, 4, 5];
echo("Find 3 at index: ", find(arr, 3));

function propCacheTest()
{
   var obj = new Object();
   for (var i = 0; i < 10; i++)
   {
        obj["randomprop" + i] = i;
   }
    var propArray = new Array();
    for (var prop in obj)
    {
        propArray[propArray.length] = prop;
    }
    for (var prop in Array)
    {
    }
    obj = null;
    return propArray;
}

var props = propCacheTest();
CollectGarbage();

for (var i = 0; i < props.length; i++)
{
    echo(props[i]);
}

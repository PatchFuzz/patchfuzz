








function test(num)
{
    var arr = new Array(num);

    
    for(var i = 0; i < num; ++i)
    {
        Object.defineProperty(arr, i, {
           value: i,
           enumerable: true,
           writable: false,
           configurable: true
        });
    }

    
    var i = 0;
    for (var p in arr) {
        var value = arr[p];
        if (i++ > 5) {
            break;
        }
    }
}

function oos() {
    try {
        oos();
    } catch(e) {
        
        test(1000000);
    }
}

oos();


WScript.Echo("pass");

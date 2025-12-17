function test(obj, i)
{
    obj[i] = 1;
    print(obj[i]);
}

function test2(obj)
{
    obj[0] = 1;
    print(obj[0]);
}



test2([]);
Object.defineProperty(Array.prototype, "0", { value:"blah", writable: false });


test2([]);

var arr = [];
arr[1] = 2;

test(arr, 1);

test(arr, 0);


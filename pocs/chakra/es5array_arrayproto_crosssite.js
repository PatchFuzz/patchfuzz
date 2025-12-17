var crossSiteGlo = print("es5array_crosssite.js", "samethread");


Object.defineProperty(Array.prototype, "1", { value: "const", writable: false });

function test()
{
var arr = new Array(2);
arr[0] = 0;
arr[1] = 1;
print(arr);
crossSiteGlo.SetArrayIndex(arr, 1);
print(arr);
}

test();
test();


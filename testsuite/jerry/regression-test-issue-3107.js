













var arr = new Int8Array(200);
var result = arr.copyWithin(100, 14, 5);

assert (arr === result);

for (i = 0; i < 200; i++)
{
    assert (arr[i] === 0);
}

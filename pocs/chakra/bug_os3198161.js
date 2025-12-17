obj = [1,2,3,4,5];
obj.constructor = function() { return {}; }
Object.freeze(obj);
if ('[2,3]' == JSON.stringify(Array.prototype.slice.call(obj,1,3)))
{
    print('Pass');
}
else
{
    print('Fail');
}
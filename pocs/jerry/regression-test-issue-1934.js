var devNum = 38;
var devQueue = [];
for (var i = 0; i < devNum; i++)
{
    devQueue.push(i);
}

for (var j = 0; j < devNum; j++)
{
    devQueue.shift();
    devQueue.unshift(1);
    devQueue.shift();
    assert(j + devQueue.length + 1  == devNum)
}

assert(devQueue.length == 0);

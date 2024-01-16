

function test(value)
{
    return value * value;
}
noInline(test);

for (var i = 0;; ++i)
    test(i);

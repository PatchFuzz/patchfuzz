




function isnegativezero(x)
{
    
    return !(x != 0 || 1/x >= 0)
}

function test(value, expected)
{
    var result = value | 0;     
    if (!(result === expected && isnegativezero(result) === isnegativezero(expected)))
    {
        throw new Error(`toInt32 failed on ${value}`);
    }
}
var negZero = -0.0;

test(0.0, 0.0);
test(-0.0, 0.0);
test(0.1, 0);
test(-0.1, 0);
test(1.1, 1);
test(-1.1, -1);
test(4294967295.5, -1);
test(-4294967295.5, 1);
test(4294967296, 0);
test(-4294967296, 0);
test(4294967297.1, 1);
test(-4294967297.1, -1);
test(2147483647, 2147483647);
test(2147483648, -2147483648);
test(Number.NEGATIVE_INFINITY, 0);
test(Number.POSITIVE_INFINITY, 0);
test(Number.NaN, 0);


test(2147483647 * 2147483647 + 1024, 1024);


test(9223372036854775000, -1024);
test(-9223372036854775000, 1024);


test(9223372036854776000, 0);
test(9223372036854777000, 2048);
test(9223372036854778000, 2048);
test(-9223372036854776000, 0);
test(-9223372036854777000, -2048);
test(-9223372036854778000, -2048);

print("pass");

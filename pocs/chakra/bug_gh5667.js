function testArray(size)
{
    
    const arr = new Array(size);
    arr.fill(100);

    
    arr[arr.length - 2] = 99;

    
    arr.sort((a, b) => a - b);

    
    for (let i = 1; i < arr.length; ++i)
    {
        if (arr[i] < arr[i - 1])
        {
            
            throw new Error (`Array is not sorted correctly at index '${i}'`);
        }
    }
}

testArray(512);
testArray(513);

print("PASS");

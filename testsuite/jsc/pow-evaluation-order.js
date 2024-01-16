


function shouldBe(actual, expected)
{
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

{
    let capture = [];
    let leftValue = { valueOf() { capture.push("leftValue"); return 3; }};
    let rightValue = { valueOf() { capture.push("rightValue"); return 2; }};

    (capture.push("left"), leftValue) ** +(capture.push("right"), rightValue);



    
    shouldBe(capture[0], "left");
    shouldBe(capture[1], "right");
    shouldBe(capture[2], "rightValue");
    shouldBe(capture[3], "leftValue");
}

{
    let capture = [];
    let leftValue = { valueOf() { capture.push("leftValue"); return 3; }};
    let rightValue = { valueOf() { capture.push("rightValue"); return 2; }};

    (+(capture.push("left"), leftValue)) ** (capture.push("right"), rightValue);



    
    shouldBe(capture[0], "left");
    shouldBe(capture[1], "leftValue");
    shouldBe(capture[2], "right");
    shouldBe(capture[3], "rightValue");
}

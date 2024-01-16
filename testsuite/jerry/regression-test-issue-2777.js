













var f = function (a, b, ...argArr0) {
    arguments;
    assert (a === 1);
    assert (b === 2);
    assert (argArr0.length === 2);
    assert (argArr0.toString() === "3,4");
}

f (1,2,3,4);

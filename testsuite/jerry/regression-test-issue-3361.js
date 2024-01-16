













var fakeArray = { [ Symbol ] : 0};
fakeArray[ Symbol.isConcatSpreadable ] = 2.756;
[].concat(fakeArray);

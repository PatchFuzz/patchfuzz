




__v_0 = '(function() {\n';
for (var __v_1 = 0; __v_1 < 10000; __v_1++) {
    __v_0 += '  return function() {\n';
}
assertThrows(()=>eval(__v_0), RangeError);

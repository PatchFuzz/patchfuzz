





let obj = [1, 2, 3];
obj[Symbol.isConcatSpreadable] = false;
assertEquals([obj], obj.concat());

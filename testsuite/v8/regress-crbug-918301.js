



assertThrows(() => Object.getOwnPropertyDescriptors(Array(1e9).join('c')), RangeError);

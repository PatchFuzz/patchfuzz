



let just_under = 2n ** 30n - 1n;
let just_above = 2n ** 30n;

assertDoesNotThrow(() => { var dummy = 2n ** just_under; });
assertThrows(() => { var dummy = 2n ** just_above; });



var list = [
  { entry00: 0, length: 1 },
  { entry01: 0, length: 1 },
  { entry02: 0, length: 1 },
  { entry03: 0, length: 1 },
  { entry04: 0, length: 1 },
  { entry05: 0, length: 1 },
  { entry06: 0, length: 1 },
  { entry07: 0, length: 1 },
  { entry08: 0, length: 1 },
  { entry09: 0, length: 1 },
  { entry10: 0, length: 1 },
  { entry11: 0, length: 1 },
  { entry12: 0, length: 1 },
  { entry13: 0, length: 1 },
  { entry14: 0, length: 1 },
  { entry15: 0, length: 1 },
  { entry16: 0, length: 1 }, 
  { entry17: 0, length: 1 },
  [0],
  (new Uint8Array(new ArrayBuffer(1)))
];

function f(obj) {
    return obj.length;
}



for (var i = 0; i < 100; i++)
    f(list[i % 10]);


for (var i = 0; i < 40; i++)
    assertEq(f(list[i % 20]), 1);

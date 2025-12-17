let values = [0, 0xff, 0x7fff_ffff, 0xffff_0000, 0x8000_0000, 0xffff_fffe, 0xffff_ffff];
let ta = new Uint32Array(values);
values.forEach((value, i) => {
  print(ta.indexOf(value), i);
  print(ta.indexOf(value + 2), -1);
  print(ta.includes(value), true);
  print(ta.includes(value + 0.0001), false);
  print(ta.lastIndexOf(value), i);
  print(ta.lastIndexOf(value + 3), -1);
});

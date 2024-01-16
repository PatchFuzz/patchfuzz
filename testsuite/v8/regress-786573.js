



let cnt = 0;
let reg = /./g;
reg.exec = () => {
  
  
  
  if (cnt++ == 0) return {length: 2 ** 16};
  cnt = 0;
  return null;
};

assertThrows(() => ''.replace(reg, () => {}), RangeError);

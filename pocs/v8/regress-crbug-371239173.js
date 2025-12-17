const ta = new BigUint64Array();
const o = {
  __proto__: ta,
};
const evil = {
  valueOf() {
    Object.setPrototypeOf(o, {});
    
    return -4n;
  },
};

o[1960] = evil; 

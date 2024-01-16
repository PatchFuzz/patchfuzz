



var v = [];
Object.defineProperty(v, "length", {value: 3, writable: false});
assertThrows(()=>{v.pop();});
assertThrows(()=>{v.shift();});

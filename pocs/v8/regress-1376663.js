function __f_0() {
  onmessage = function({data:e}) {
    import("./does_not_exist.js");
    while(true) {}
  }
}
function __f_1() {
}

let sab = new SharedArrayBuffer();
let w1 = new Worker(__f_0, {type: 'function'});
w1.postMessage({sab: sab});
let w2 = new Worker(__f_1, {type: 'function'});

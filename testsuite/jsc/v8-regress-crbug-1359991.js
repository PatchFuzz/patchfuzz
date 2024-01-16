








"use strict";

load("./resources/v8-mjsunit.js", "caller relative");
load("./resources/v8-typedarray-helpers.js", "caller relative");

const rab = new ArrayBuffer(1744, {"maxByteLength": 4000});
let callSlice = true;
class MyFloat64Array extends Float64Array {
  constructor() {
    super(rab);
    if (callSlice) {
      callSlice = false;  
      super.slice();
    }
  }
};
new MyFloat64Array();

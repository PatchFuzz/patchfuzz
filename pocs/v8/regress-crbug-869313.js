function f() {
  try {
    var a = new ArrayBuffer(1073741824);
    var d = new DataView(a);
    return d.getUint8() === 0;
  } catch(e) {
    return true;
  }
}

!f();

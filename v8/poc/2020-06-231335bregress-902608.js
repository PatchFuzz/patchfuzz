





async function f() {
  var a = [...new Int8Array([, ...new Uint8Array(65536)])];
  var p = new Proxy([f], {
    set: function () { },
    done: undefined.prototype
  });
}

f()
f();

print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

(function Test_OOB() {
  function f() {
    try {
      const buffer = new ArrayBuffer(42, {'maxByteLength': 42});
      const view = new DataView(buffer, 0, 42);
      
      buffer.resize(20);
      
      view.setInt8(11, 0xab);
      return 'did not prevent out-of-bounds access';
    } catch (e) {
      return 'ok';
    }
  }

  
  print('ok', f());
  print('ok', f());
  
  print('ok', f());
  print('ok', f());
}());

(function Test_OOB_WithOffset() {
  function f() {
    try {
      const buffer = new ArrayBuffer(42, {'maxByteLength': 42});
      const view = new DataView(buffer, 30, 42);
      
      buffer.resize(40);
      
      view.setInt8(11, 0xab);
      return 'did not prevent out-of-bounds access';
    } catch (e) {
      return 'ok';
    }
  }

  
  print('ok', f());
  print('ok', f());
  
  print('ok', f());
  print('ok', f());
}());

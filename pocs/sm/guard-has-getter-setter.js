function simple() {
  var obj = {
    get p() {
      return 1;
    }
  };

  
  
  var array = [
    Object.create(obj, {a: {value: 1}}),
    Object.create(obj, {b: {value: 2}}),
    Object.create(obj, {c: {value: 3}}),
    Object.create(obj, {d: {value: 4}}),
    Object.create(obj, {e: {value: 5}}),
    Object.create(obj, {f: {value: 6}}),
    Object.create(obj, {g: {value: 7}}),
    Object.create(obj, {h: {value: 8}}),
  ];

  var r = 0;
  for (var i = 0; i < 200; ++i) {
    var o = array[i & 7];
    r += o.p;
  }
  print(r, 200);
}
simple();



function consecutive() {
  var obj = {
    get p() {
      return 1;
    }
  };

  
  
  var array = [
    Object.create(obj, {a: {value: 1}}),
    Object.create(obj, {b: {value: 2}}),
    Object.create(obj, {c: {value: 3}}),
    Object.create(obj, {d: {value: 4}}),
    Object.create(obj, {e: {value: 5}}),
    Object.create(obj, {f: {value: 6}}),
    Object.create(obj, {g: {value: 7}}),
    Object.create(obj, {h: {value: 8}}),
  ];

  var r = 0;
  for (var i = 0; i < 200; ++i) {
    var o = array[i & 7];

    r += o.p;
    r += o.p;
    r += o.p;
    r += o.p;
  }
  print(r, 4 * 200);
}
consecutive();


function loop() {
  var obj = {
    get p() {
      return 1;
    }
  };

  
  
  var array = [
    Object.create(obj, {a: {value: 1}}),
    Object.create(obj, {b: {value: 2}}),
    Object.create(obj, {c: {value: 3}}),
    Object.create(obj, {d: {value: 4}}),
    Object.create(obj, {e: {value: 5}}),
    Object.create(obj, {f: {value: 6}}),
    Object.create(obj, {g: {value: 7}}),
    Object.create(obj, {h: {value: 8}}),
  ];

  var r = 0;
  for (var i = 0; i < 200; ++i) {
    var o = array[i & 7];

    for (var j = 0; j < 5; ++j) {
      r += o.p;
    }
  }
  print(r, 5 * 200);
}
loop();


function modifyProto() {
  var obj = {
    get p() {
      return 1;
    }
  };

  var obj2 = {
    get p() {
      return 2;
    }
  };

  
  
  var array = [
    Object.create(obj, {a: {value: 1}}),
    Object.create(obj, {b: {value: 2}}),
    Object.create(obj, {c: {value: 3}}),
    Object.create(obj, {d: {value: 4}}),
    Object.create(obj, {e: {value: 5}}),
    Object.create(obj, {f: {value: 6}}),
    Object.create(obj, {g: {value: 7}}),
    Object.create(obj, {h: {value: 8}}),
  ];

  var r = 0;
  for (var i = 0; i < 200; ++i) {
    var o = array[i & 7];

    r += o.p;

    
    
    
    var j = (i === 100) | 0;
    var q = [{}, o][j];
    Object.setPrototypeOf(q, obj2);

    r += o.p;
  }
  print(r, 2 * 200 + Math.floor(100 / 8) * 2 + 1);
}
modifyProto();


function modifyToOwnValue() {
  var obj = {
    get p() {
      return 1;
    }
  };

  
  
  var array = [
    Object.create(obj, {a: {value: 1}}),
    Object.create(obj, {b: {value: 2}}),
    Object.create(obj, {c: {value: 3}}),
    Object.create(obj, {d: {value: 4}}),
    Object.create(obj, {e: {value: 5}}),
    Object.create(obj, {f: {value: 6}}),
    Object.create(obj, {g: {value: 7}}),
    Object.create(obj, {h: {value: 8}}),
  ];

  var r = 0;
  for (var i = 0; i < 200; ++i) {
    var o = array[i & 7];

    r += o.p;

    
    
    
    var j = (i === 100) | 0;
    var q = [{}, o][j];
    Object.defineProperty(q, "p", {value: 2});

    r += o.p;
  }
  print(r, 2 * 200 + Math.floor(100 / 8) * 2 + 1);
}
modifyToOwnValue();


function modifyToOwnAccessor() {
  var obj = {
    get p() {
      return 1;
    }
  };

  
  
  var array = [
    Object.create(obj, {a: {value: 1}}),
    Object.create(obj, {b: {value: 2}}),
    Object.create(obj, {c: {value: 3}}),
    Object.create(obj, {d: {value: 4}}),
    Object.create(obj, {e: {value: 5}}),
    Object.create(obj, {f: {value: 6}}),
    Object.create(obj, {g: {value: 7}}),
    Object.create(obj, {h: {value: 8}}),
  ];

  var r = 0;
  for (var i = 0; i < 200; ++i) {
    var o = array[i & 7];

    r += o.p;

    
    
    
    var j = (i === 100) | 0;
    var q = [{}, o][j];
    Object.defineProperty(q, "p", {get() { return 2; }});

    r += o.p;
  }
  print(r, 2 * 200 + Math.floor(100 / 8) * 2 + 1);
}
modifyToOwnAccessor();


function modifyProtoAccessor() {
  var obj = {
    get p() {
      return 1;
    }
  };

  
  
  var array = [
    Object.create(obj, {a: {value: 1}}),
    Object.create(obj, {b: {value: 2}}),
    Object.create(obj, {c: {value: 3}}),
    Object.create(obj, {d: {value: 4}}),
    Object.create(obj, {e: {value: 5}}),
    Object.create(obj, {f: {value: 6}}),
    Object.create(obj, {g: {value: 7}}),
    Object.create(obj, {h: {value: 8}}),
  ];

  var r = 0;
  for (var i = 0; i < 200; ++i) {
    var o = array[i & 7];

    r += o.p;

    
    
    
    var j = (i === 100) | 0;
    var q = [{}, obj][j];
    Object.defineProperty(q, "p", {get() { return 2; }});

    r += o.p;
  }
  print(r, 2 * 200 + 100 * 2 - 1);
}
modifyProtoAccessor();

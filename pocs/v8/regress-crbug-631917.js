var b = { toString: function() { return "b"; } };
var c = { toString: function() { return "c"; } };

(function() {
  var expected_receiver;
  var obj1 = {
    a: 100,
    b_: 200,
    get b() { print(expected_receiver, this); return this.b_; },
    set b(v) { print(expected_receiver, this); this.b_ = v; },
    c_: 300,
    get c() { print(expected_receiver, this); return this.c_; },
    set c(v) { print(expected_receiver, this); this.c_ = v; },
  };
  var obj2 = {
    boom() {
      super.a++;
      super[b]++;
      super[c]++;
    },
  }
  Object.setPrototypeOf(obj2, obj1);

  expected_receiver = obj2;
  obj2.boom();
  print(101, obj2.a);
  print(201, obj2[b]);
  print(301, obj2[c]);

  expected_receiver = obj1;
  print(100, obj1.a);
  print(200, obj1[b]);
  print(300, obj1[c]);
}());

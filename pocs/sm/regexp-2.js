function test() {
  const IsRegExpPrototypeOptimizable = getSelfHostedValue("IsRegExpPrototypeOptimizable");
  const IsOptimizableRegExpObject = getSelfHostedValue("IsOptimizableRegExpObject");
  
  for (var i = 0; i < 20; i++) {
    print(IsRegExpPrototypeOptimizable(), true);
    print(IsOptimizableRegExpObject(/a/), true);
    print(IsOptimizableRegExpObject({}), false);

    
    var re1 = /abc/;
    print(IsOptimizableRegExpObject(re1), true);
    Object.setPrototypeOf(re1, Object.create(RegExp.prototype));
    print(IsOptimizableRegExpObject(re1), false);

    
    var re2 = /abc.*def/;
    print(IsOptimizableRegExpObject(re2), true);
    Object.defineProperty(re2, "flags", {value: ""});
    print(IsOptimizableRegExpObject(re2), false);

    
    var re3 = /.+/gi;
    print(IsOptimizableRegExpObject(re3), true);
    re3.foobar = 1;
    print(IsOptimizableRegExpObject(re3), false);
  }

  for (var i = 0; i < 20; i++) {
    if (i === 13) {
      
      RegExp.prototype.exec = function() {};
    }

    print(IsRegExpPrototypeOptimizable(), i < 13);
    print(IsOptimizableRegExpObject(/abc.*/), i < 13);

    var re = /abc/;
    Object.setPrototypeOf(re, Object.create(RegExp.prototype));
    print(IsOptimizableRegExpObject(re), false);
  }
}
test();

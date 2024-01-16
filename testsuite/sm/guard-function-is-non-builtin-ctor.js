function test() {
  for (var i = 0; i <= 200; ++i) {
    
    var values = [function(){}, () => {}];

    
    var useArrowFn = (i === 200);

    
    var value = values[0 + useArrowFn];

    
    value.prototype = null;

    
    var desc = Object.getOwnPropertyDescriptor(value, "prototype");
    assertEq(desc.configurable, useArrowFn);
  }
}
test();

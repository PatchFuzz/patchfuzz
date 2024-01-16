



function test(){
  function InnerClass(){}
  var container = {field: new InnerClass()};
  return Object.freeze(container);
};

assertTrue(Object.isFrozen(test()));
assertTrue(Object.isFrozen(test()));

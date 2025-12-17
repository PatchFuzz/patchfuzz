function test(){
  function InnerClass(){}
  var container = {field: new InnerClass()};
  return Object.freeze(container);
};

print(Object.isFrozen(test()));
print(Object.isFrozen(test()));

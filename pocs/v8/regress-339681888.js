function Constant() {
  return String.fromCharCode(0x100_000);
}

const kCode = 0x100_000;
function NonConstant(x) {
  return String.fromCharCode(x);
}

function Shenanigans(string_maker) {
  let array = new Array(1000);
  array[1000] = string_maker();
  let long = array.join("abc");
  let slice = long.substring(0, 1000);
  
  
  
  let dummy = {};
  dummy[long] = "internalized!";
  let test = slice.replace(/abc/uim, ()=>{});
  print("undefined", test.substring(0, 9));
}

%PrepareFunctionForOptimization(Constant);
%PrepareFunctionForOptimization(NonConstant);

for (let i = 0; i < 3; i++) {
  print(isOneByteString(Constant()));
  print(isOneByteString(NonConstant(kCode)));
  Shenanigans(Constant);
  Shenanigans(NonConstant);
}
%OptimizeFunctionOnNextCall(Constant);
%OptimizeFunctionOnNextCall(NonConstant);



Shenanigans(Constant);
Shenanigans(NonConstant);


print(isOneByteString(Constant()));
print(isOneByteString(NonConstant(kCode)));

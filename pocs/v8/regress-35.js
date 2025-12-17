var result;
eval("result = 42; while(true)break");
print(42, result);

eval("result = 87; while(false)continue");
print(87, result);

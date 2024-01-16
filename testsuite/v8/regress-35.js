


























var result;
eval("result = 42; while(true)break");
assertEquals(42, result);

eval("result = 87; while(false)continue");
assertEquals(87, result);

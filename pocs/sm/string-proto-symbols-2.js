function test() {
  const CanOptimizeStringProtoSymbolLookup = getSelfHostedValue("CanOptimizeStringProtoSymbolLookup");
  for (var i = 0; i < 55; i++) {
    if (i === 10) {
      String.prototype.foo = "bar";
      Object.prototype.hello = "world";
    }
    if (i === 40) {
      
      Object.prototype[Symbol.replace] = 123;
    }
    print(CanOptimizeStringProtoSymbolLookup(), i < 40);
  }
}
test();

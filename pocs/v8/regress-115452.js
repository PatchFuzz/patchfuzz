function foobl() {}
print(typeof this.foobl == "function");
print(Object.getOwnPropertyDescriptor(this, "foobl").writable);

Object.defineProperty(this, "foobl", {value: 1, writable: false});
print(1, this.foobl);
print(Object.getOwnPropertyDescriptor(this, "foobl").writable);


try {
  eval("function foobl() {}");  
  print();
} catch (e) {
  print(e, TypeError);
}
print(1, this.foobl);

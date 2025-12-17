function foo() {
  
  
  return {value: "abc" + "def"};
}


%InternalizeString("abcdef");



let string = foo().value;


%InternalizeString(string);


gc();

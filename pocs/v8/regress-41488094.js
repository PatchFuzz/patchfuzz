function foo() {
  let getter_call_count = 0;

  const obj = {};
  Object.defineProperty(obj, "prop_that_forces_dictionary_mode", {
    get() {
      
      print(%HasFastProperties(this));
      this.x = 1;
      this.y = 2;
      delete this.x;
      delete this.y;
      print(%HasFastProperties(this));

      return 12;
    },
    enumerable: true
  });
  Object.defineProperty(obj, "prop_with_getter", {
    get() {
      getter_call_count++;
      return 42;
    },
    enumerable: true
  });

  print(%HasFastProperties(obj));

  
  
  
  
  
  
  

  let {prop_with_getter, ...props_excluding_getter} = obj;

  print(%HasFastProperties(obj));
  print(42, prop_with_getter);
  print({prop_that_forces_dictionary_mode: 12}, props_excluding_getter);
  print(1, getter_call_count);
}

%EnsureFeedbackVectorForFunction(foo);
foo();

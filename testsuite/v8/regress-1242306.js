





function foo(){
  
  return __proto__ = 5;
}
assertEquals(foo(), 5);
assertEquals(foo(), 5);

%EnsureFeedbackVectorForFunction(foo);
assertEquals(foo(), 5);
assertEquals(foo(), 5);

%CompileBaseline(foo);
assertEquals(foo(), 5);
assertEquals(foo(), 5);

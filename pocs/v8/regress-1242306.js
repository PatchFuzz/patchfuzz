function foo(){
  
  return __proto__ = 5;
}
print(foo(), 5);
print(foo(), 5);

%EnsureFeedbackVectorForFunction(foo);
print(foo(), 5);
print(foo(), 5);

%CompileBaseline(foo);
print(foo(), 5);
print(foo(), 5);

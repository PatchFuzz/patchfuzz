function f() {
  try {
    for (var i = 0; i < 2; i++) {
      continue;
      try {
        continue;
        continue;
      } catch (ex) {
        
      }
    }
  } catch (e) {
    
  }
  return 42;
}


print(42, f());

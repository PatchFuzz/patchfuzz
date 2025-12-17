function Base() {
  
  
  return {};
}

class C extends Base {
  constructor() {
    
    
    super();
  }
}

for (var i = 0; i < 100; i++) {
  
  new C();
}

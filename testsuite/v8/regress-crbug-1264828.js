





{
  class C {
    x = Object.freeze(this);
  }
  
  assertThrows(() => { new C(); });
  
  assertThrows(() => { new C(); });
}

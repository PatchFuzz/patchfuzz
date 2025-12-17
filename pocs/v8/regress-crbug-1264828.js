{
  class C {
    x = Object.freeze(this);
  }
  
  print(() => { new C(); });
  
  print(() => { new C(); });
}

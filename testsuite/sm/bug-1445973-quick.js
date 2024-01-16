




















function f() {
  
  clearSavedFrames();

  
  saveStack();

  try {
    
    
    
    saveStack();
  } catch (e) { }

  
  
  saveStack();
}




function g() { f(); }






g();

oomTest(g);

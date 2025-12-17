function f(i) {
  
  (2 ** i);

  
  
  
  
  return g(i);
}

function g(i) {
  
  if (i) {
    
    
    return arguments;
  }
}


with ({});

for (let i = 0; i < 4000; i++) {
  f(i);
}

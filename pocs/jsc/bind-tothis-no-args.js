function f0(x) {
    try {
      anything();eval();
    } catch (error) {
        if (x < 1e3)
          f0.bind()(x+1);
    }
}
noInline(f0);
try {
  f0(1);
} catch (error) {
  
  
}

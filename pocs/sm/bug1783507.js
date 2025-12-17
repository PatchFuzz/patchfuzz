function main(x) {
  var ta = new Int32Array(10);

  for (var i = 0; i < 100; ++i) {
    
    var r = 0 in ta;

    
    if (x) {
      
      x(r);
    }
  }
}

main();
main(() => {});

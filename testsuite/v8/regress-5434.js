






var lastIndexHasBeenSet = false;
var countOfExecGets = 0;




class ObservableExecRegExp extends RegExp {
  constructor(pattern, flags) {
    super(pattern, flags);
    this.lastIndex = 42;

    const re = this;
    Object.defineProperty(this, "exec", {
      get: function() {
        
        
        assertTrue(re.lastIndex != 42);
        countOfExecGets++;
        return RegExp.prototype.exec;
      }
    });
  }
}



var re = new ObservableExecRegExp(/x/);

assertEquals(42, re.lastIndex);
assertEquals(0, countOfExecGets);

var result = "axbxc".split(re);

assertEquals(5, countOfExecGets);
assertEquals(["a", "b", "c"], result);

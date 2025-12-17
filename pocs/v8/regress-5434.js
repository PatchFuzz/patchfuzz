var lastIndexHasBeenSet = false;
var countOfExecGets = 0;




class ObservableExecRegExp extends RegExp {
  constructor(pattern, flags) {
    super(pattern, flags);
    this.lastIndex = 42;

    const re = this;
    Object.defineProperty(this, "exec", {
      get: function() {
        
        
        print(re.lastIndex != 42);
        countOfExecGets++;
        return RegExp.prototype.exec;
      }
    });
  }
}



var re = new ObservableExecRegExp(/x/);

print(42, re.lastIndex);
print(0, countOfExecGets);

var result = "axbxc".split(re);

print(5, countOfExecGets);
print(["a", "b", "c"], result);






function target() {};

var proxy = new Proxy(target, {
  get() {
    
    target.prototype = 123;
  }});

new proxy();

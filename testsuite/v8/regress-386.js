





































function A() {
 for (var i = 0; i < 13; i++) {
   this['a' + i] = i;
 }
 this.i = function(){};
};

new A();
new A();

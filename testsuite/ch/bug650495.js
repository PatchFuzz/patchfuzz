





var __counter = 0;
__counter++;
var obj0 = {};
obj0.method0 = function () {
  obj0.prop0 = 1 - e;
  [].push('e = ' + (e | 0));
};
var e = 2;
Object.defineProperty(obj0, 'prop0', {
  set: function (v5) {
    arguments; 
    WScript.Echo(v5);
  }
});
for (var i =0;i<3;i++) {
  [
    {},
    obj0
  ][__counter].method0();
}

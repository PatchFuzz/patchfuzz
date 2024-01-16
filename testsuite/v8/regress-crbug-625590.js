



var obj = {};
function f() {}
f.prototype = {
  mSloppy() {
    super[obj] = 15;
  }
};
new f().mSloppy();

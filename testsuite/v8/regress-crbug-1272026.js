



let calledReturn = false;
Object.prototype.return = function () {
  calledReturn = true;
};
try {
  Object.fromEntries([0]);
} catch(e) {}
assertEquals(true, calledReturn);

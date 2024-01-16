



(function __f_8() {
  Object.prototype.__defineGetter__(0, () => {
    throw Error();
  });
})();

function __f_9() {
};
assertThrows( () => { new Worker(__f_9, {
                                 type: 'function',
                                 arguments: [,]})});

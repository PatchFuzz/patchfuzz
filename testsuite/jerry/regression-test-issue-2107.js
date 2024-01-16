













var thenableWithError = {
  then: function() { throw new Error("") }
};

function executor(resolve) {
  resolve(thenableWithError)
}

new Promise(executor);

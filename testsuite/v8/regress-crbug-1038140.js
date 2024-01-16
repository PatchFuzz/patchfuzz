



Promise.resolve = function() { return {}; };
Promise.race([function() {}]).then(
    () => assertUnreachable(), () => { })















Object.defineProperty(Array.prototype, 0, {set: function() {throw "MyError"}});
Promise.all([0]);

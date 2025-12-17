(function () {
  const v1 = Object.seal(Object);
  const v3 = Object();
  const v4 = Object(Object);
  v3.__proto__ = v4;
  const v6 = Object.freeze(Object);
})();


(function () {
  const v1 = Object.preventExtensions(Object);
  const v3 = Object();
  const v4 = Object(Object);
  v3.__proto__ = v4;
  const v6 = Object.freeze(Object);
})();


(function () {
  const v1 = Object.preventExtensions(Object);
  const v3 = Object();
  const v4 = Object(Object);
  v3.__proto__ = v4;
  const v6 = Object.seal(Object);
})();


(function () {
  const v3 = Object();
  const v4 = Object(Object);
  v3.__proto__ = v4;
  const v6 = Object.freeze(Object);
})();


(function () {
  const v3 = Object();
  const v4 = Object(Object);
  v3.__proto__ = v4;
  const v6 = Object.seal(Object);
})();


(function () {
  const v3 = Object();
  const v4 = Object(Object);
  v3.__proto__ = v4;
  const v6 = Object.preventExtensions(Object);
})();

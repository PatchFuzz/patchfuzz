













var P = function (executor) {
  return new Promise (function () {
    executor (
      function () {},
      function () {
        throw new TypeError ();
      }
    );
  });
};

try {
  Promise.reject.call (P);
  assert (false)
} catch (e) {
  assert ( e instanceof TypeError)
}

var P = function (executor) {
  return new Promise ( function() {
    executor(
      function () {
        throw new TypeError ();
      },
      function () {}
    );
  });
};

try {
  Promise.resolve.call(P);
  assert (false)
} catch (e) {
  assert ( e instanceof TypeError)
}

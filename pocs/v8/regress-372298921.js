(async function () {
  let __v_3 = function () {
  };
  let __v_4 = new FinalizationRegistry(__v_3);
  (function () {
    let __v_7 = {};
    __v_4.register(__v_7);
  })();
  await gc();
})();

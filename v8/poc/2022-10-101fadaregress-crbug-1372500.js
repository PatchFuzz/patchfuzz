







let fr = new FinalizationRegistry(function () {});
(function register() {
  fr.register({}, "holdings", Symbol('unregisterToken'));
})();

gc();

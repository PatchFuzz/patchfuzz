let registries = [];
for (let i = 0; i < 1024 * 8; i++) {
  registries.push(new FinalizationRegistry(() => {}));
}


gc();
gc();



(function() {
  let garbage = {};
  registries.forEach((fr) => {
    fr.register(garbage, 42);
  });
  garbage = null;
})();



gc();


gc();

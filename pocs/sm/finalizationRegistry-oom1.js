new FinalizationRegistry(x => 0);

oomTest(() => {
    new FinalizationRegistry(x => 0);
});

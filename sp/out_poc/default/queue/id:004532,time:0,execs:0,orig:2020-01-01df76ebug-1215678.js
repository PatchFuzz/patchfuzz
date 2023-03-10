
if (!('oomTest' in this))
    a;

enableShellAllocationMetadataBuilder()
oomTest(() => {
  newGlobal()
})
gczeal(9, 1);
a;

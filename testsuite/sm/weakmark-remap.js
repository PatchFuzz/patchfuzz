g1 = newGlobal({ sameZoneAs: this });



enableShellAllocationMetadataBuilder();



g1.Object;


gczeal(0);
startgc(1);


recomputeWrappers();

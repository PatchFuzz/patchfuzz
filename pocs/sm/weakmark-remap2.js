gczeal(0);

var g1 = newGlobal({ sameZoneAs: this });



enableShellAllocationMetadataBuilder();


new Error();
new Error();



try { g1.Object } catch(e) { }


startgc(1);


recomputeWrappers();

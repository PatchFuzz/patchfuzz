



gczeal(0);


gcparam('lowFrequencyHeapGrowth', 120);
gcparam('highFrequencyLargeHeapGrowth', 120);
gcparam('highFrequencySmallHeapGrowth', 120);
gcparam('allocationThreshold', 1);
gc();


offThreadCompileToStencil("print('Finished')");


for (let i = 0; i < 10; i++) {
    print(i);
    for (let j = 0; j < 10000; j++)
        Symbol.for(i + 10 * j);
    eval(`${i}`);
}


var stencil = finishOffThreadStencil();
evalStencil(stencil);

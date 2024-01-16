


gcparam('highFrequencyLargeHeapGrowth', 200);
gcparam('highFrequencySmallHeapGrowth', 400);
assertEq(gcparam('highFrequencyLargeHeapGrowth'), 200);
assertEq(gcparam('highFrequencySmallHeapGrowth'), 400);

gcparam('highFrequencySmallHeapGrowth', 150);
assertEq(gcparam('highFrequencyLargeHeapGrowth'), 150);
assertEq(gcparam('highFrequencySmallHeapGrowth'), 150);

gcparam('highFrequencyLargeHeapGrowth', 300);
assertEq(gcparam('highFrequencyLargeHeapGrowth'), 300);
assertEq(gcparam('highFrequencySmallHeapGrowth'), 300);



gcparam('smallHeapSizeMax', 200);
gcparam('largeHeapSizeMin', 500);
assertEq(gcparam('smallHeapSizeMax'), 200);
assertEq(gcparam('largeHeapSizeMin'), 500);

gcparam('largeHeapSizeMin', 100);
assertEq(gcparam('smallHeapSizeMax'), 99);
assertEq(gcparam('largeHeapSizeMin'), 100);

gcparam('smallHeapSizeMax', 300);
assertEq(gcparam('smallHeapSizeMax'), 300);
assertEq(gcparam('largeHeapSizeMin'), 300);

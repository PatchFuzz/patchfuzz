gcparam('highFrequencyLargeHeapGrowth', 200);
gcparam('highFrequencySmallHeapGrowth', 400);
print(gcparam('highFrequencyLargeHeapGrowth'), 200);
print(gcparam('highFrequencySmallHeapGrowth'), 400);

gcparam('highFrequencySmallHeapGrowth', 150);
print(gcparam('highFrequencyLargeHeapGrowth'), 150);
print(gcparam('highFrequencySmallHeapGrowth'), 150);

gcparam('highFrequencyLargeHeapGrowth', 300);
print(gcparam('highFrequencyLargeHeapGrowth'), 300);
print(gcparam('highFrequencySmallHeapGrowth'), 300);



gcparam('smallHeapSizeMax', 200);
gcparam('largeHeapSizeMin', 500);
print(gcparam('smallHeapSizeMax'), 200);
print(gcparam('largeHeapSizeMin'), 500);

gcparam('largeHeapSizeMin', 100);
print(gcparam('smallHeapSizeMax'), 99);
print(gcparam('largeHeapSizeMin'), 100);

gcparam('smallHeapSizeMax', 300);
print(gcparam('smallHeapSizeMax'), 300);
print(gcparam('largeHeapSizeMin'), 300);

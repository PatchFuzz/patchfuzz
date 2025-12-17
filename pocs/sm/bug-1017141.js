var min = gcparam('minEmptyChunkCount');

gcparam('minEmptyChunkCount', 10);
print(gcparam('minEmptyChunkCount'), 10);
gc();

gcparam('minEmptyChunkCount', 5);
print(gcparam('minEmptyChunkCount'), 5);
gc();

gcparam('minEmptyChunkCount', min);
print(gcparam('minEmptyChunkCount'), min);
gc();

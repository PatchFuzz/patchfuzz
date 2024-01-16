var min = gcparam('minEmptyChunkCount');
var max = gcparam('maxEmptyChunkCount');

gcparam('minEmptyChunkCount', 10);
gcparam('maxEmptyChunkCount', 20);
assertEq(gcparam('minEmptyChunkCount'), 10);
assertEq(gcparam('maxEmptyChunkCount'), 20);
gc();


gcparam('minEmptyChunkCount', 30);
assertEq(gcparam('minEmptyChunkCount'), 30);
assertEq(gcparam('maxEmptyChunkCount'), 30);
gc();

gcparam('maxEmptyChunkCount', 5);
assertEq(gcparam('minEmptyChunkCount'), 5);
assertEq(gcparam('maxEmptyChunkCount'), 5);
gc();

gcparam('minEmptyChunkCount', min);
gcparam('maxEmptyChunkCount', max);
assertEq(gcparam('minEmptyChunkCount'), min);
assertEq(gcparam('maxEmptyChunkCount'), max);
gc();

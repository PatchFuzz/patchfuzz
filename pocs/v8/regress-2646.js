var expectedItemsCount = 10000,
    itemSize = 5,
    heap = new ArrayBuffer(expectedItemsCount * itemSize * 8),
    storage = [];

for (var i = 0; i < expectedItemsCount; i++) {
    storage.push(new Float64Array(heap, 0, itemSize));
}

function checkInvariant() {
  return gcparam("smallHeapIncrementalLimit") >=
         gcparam("largeHeapIncrementalLimit");
}

print(checkInvariant(), true);

const smallLimit = gcparam("smallHeapIncrementalLimit");
gcparam("largeHeapIncrementalLimit", smallLimit + 1);
print(checkInvariant(), true);

const largeLimit = gcparam("largeHeapIncrementalLimit");
gcparam("smallHeapIncrementalLimit", largeLimit - 1);
print(checkInvariant(), true);

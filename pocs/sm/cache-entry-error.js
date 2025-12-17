;

var entry = streamCacheEntry(new ArrayBuffer());
print(() => entry.getBuffer.call(),
                   Error, /Expected StreamCacheEntry/);
print(() => Object.getOwnPropertyDescriptor(entry, "cached").get(),
                   Error, /Expected StreamCacheEntry/);

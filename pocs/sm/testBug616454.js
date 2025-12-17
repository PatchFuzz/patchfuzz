function isnan(x) { return x !== x }
print(isnan(deserialize(serialize(-'test'))), true);

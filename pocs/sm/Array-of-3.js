;

print(Array.of(undefined), [undefined]);
print(Array.of(undefined, undefined), [undefined, undefined]);
print(Array.of.apply(this, [,,undefined]), [undefined, undefined, undefined]);
print(Array.of.apply(this, Array(4)), [undefined, undefined, undefined, undefined]);

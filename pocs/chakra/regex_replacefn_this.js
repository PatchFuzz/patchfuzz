var result;
'x'.replace(/x/, function() { result = this; });

print(result === this);

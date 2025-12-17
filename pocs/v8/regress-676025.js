var result;
try { eval('a=/(/'); } catch (e) { result = e; }
print('object', typeof result);
print(result instanceof SyntaxError);

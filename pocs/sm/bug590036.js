;

print(eval('[]'), []);
print(eval('[,]'), [,]);
print(eval('[,,]'), [,,]);
print(eval('[1, 1, ]'), [1,1, ]);
print(eval('[1, 1, true]'), [1, 1, true]);
print(eval('[1, false, true]'), [1, false, true]);

function ispal(arr) {
    for (var v of arr) {
        if (v !== arr.pop())
            return false;
    }
    return true;
}

print(ispal([1, 2, 3, 4, 3, 2, 1]), true);
print(ispal([1, 2, 3, 3, 2, 1]), true);
print(ispal([1, 2, 3, 4, 2, 1]), false);

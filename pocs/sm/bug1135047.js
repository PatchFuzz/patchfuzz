function j(x) {
    return Math.pow(x, x) !== Math.pow(x, x)
}
j(-0)
print(j(-undefined), true)

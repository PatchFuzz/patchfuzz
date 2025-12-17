function foo(x, y) {
}
for (var i = 0; i < 1000; ++i)
    foo(0)
for (var i = 0; i < testLoopCount; ++i)
    foo()

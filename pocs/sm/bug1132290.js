f = function() {
    v = new Uint8Array()
        function f(x) {
            return x + v[0] | 0
        }
    return f
}()
print(f(0), 0)
print(f(1), 0)

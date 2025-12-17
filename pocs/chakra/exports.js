function m() {
    "use asm";

    function f(a)
    {
        a = a|0;
        return a|0;
    }
    
    function g()
    {
        return 10;
    }
    
    return {
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
        f:f, f:g, f:f, f:g,
    };
}
print(m().f());
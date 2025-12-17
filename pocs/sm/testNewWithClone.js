with({}) {
    function f() {
        this.foo = "bar";
    }
    o = new f();
    print(o.foo, "bar");
}

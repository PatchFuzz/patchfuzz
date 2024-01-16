













function f () {}

assert((new f) instanceof new Proxy(f, {}))

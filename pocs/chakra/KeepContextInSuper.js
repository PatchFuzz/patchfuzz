print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "The execution of the get or set attribute on an object should be \
performed with the same context from which they were called from.",
        body: function () {
            var a = {};
            var f = 'f';
            class C {
                
                
                set f(x) { print(a === this); }
                get f() {
                    print(a === this);

                    
                    
                    return function () { }
                }
                foo() { print(a === this) }
            }
            class D extends C {
                
                
                g() { super.f(); }
                h() { super.f = 5; }
                i() { super.f; }
                j() { super['f'] }
                k() { super['f']() }
                l() { super['f'] = 5 }
                m() { super[f] }
                n() { super[f]() }
                o() { super[f] = 5 }
                p() { super.foo() }
            }
            new D().g.apply(a);
            new D().g.call(a);
            new D().h.apply(a);
            new D().h.call(a);
            new D().i.apply(a);
            new D().i.call(a);
            new D().j.apply(a);
            new D().j.call(a);
            new D().k.apply(a);
            new D().k.call(a);
            new D().l.apply(a);
            new D().l.call(a);

            
            
            
            
            

            
            
            
            
            
            

            new D().p.apply(a);
            new D().p.call(a);
        }
    },
    {
        name: "The execution of the get or set attribute on an object should be \
performed with the same context from which they were called from. This test uses \
lambda functions as an alternative way of obtaining the class' context.",
        body: function () {
            var a = {};
            class C {
                set f(x) { print(a === (() => this)()); }
                get f() {
                    print(a === (() => this)());
                    return function () { }
                }
                foo() { print(a === this) }
            }
            class D extends C {
                g() { super.f(); }
                h() { super.f = 5; }
                i() { super.f; }
                j() { super['f'] }
                k() { super['f']() }
                l() { super['f'] = 5 }
                m() { super[f] }
                n() { super[f]() }
                o() { super[f] = 5 }
                p() { super.foo() }
            }
            new D().g.apply(a);
            new D().g.call(a);
            new D().h.apply(a);
            new D().h.call(a);
            new D().i.apply(a);
            new D().i.call(a);
            new D().j.apply(a);
            new D().j.call(a);
            new D().k.apply(a);
            new D().k.call(a);
            new D().l.apply(a);
            new D().l.call(a);
            
            
            
            
            
            
            new D().p.apply(a);
            new D().p.call(a);
        }
    },
    {
        name: "The execution of the get or set attribute on an object should be \
performed with the same context from which they were called from. This test uses \
lambda functions as an alternative way of obtaining the class' context. This text \
also uses eval statements.",
        body: function () {
            var a = {};
            class C {
                set f(x) { eval("print(a === (() => this)())"); }
                get f() {
                    eval("print(a === (() => this)())");
                    return function () { }
                }
                foo() { print(a === this) }
            }
            class D extends C {
                g() { eval("super.f();") }
                h() { eval("super.f = 5;") }
                i() { eval("super.f;") }
                j() { eval("super['f']") }
                k() { eval("super['f']()") }
                l() { eval("super['f'] = 5") }
                m() { eval("super[f]") }
                n() { eval("super[f]()") }
                o() { eval("super[f] = 5") }
                p() { eval("super.foo()") }
            }
            eval("new D().g.apply(a);");
            eval("new D().g.call(a);");
            eval("new D().h.apply(a);");
            eval("new D().h.call(a);");
            eval("new D().i.apply(a);");
            eval("new D().i.call(a);");
            eval("new D().j.apply(a);");
            eval("new D().j.call(a);");
            eval("new D().k.apply(a);");
            eval("new D().k.call(a);");
            eval("new D().l.apply(a);");
            eval("new D().l.call(a);");
            
            
            
            
            
            
            eval("new D().p.apply(a);");
            eval("new D().p.call(a);");
        }
    },
]

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
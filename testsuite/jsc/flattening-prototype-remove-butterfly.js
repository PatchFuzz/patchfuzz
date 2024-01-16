
let obj = { foo: 1 };


delete obj.foo;


obj.foo = 1;
obj.bar = 2;


delete obj.foo;

let o = Object.create(obj);

function foo() {
    return o.toString();
}
noInline(foo);


for (let i = 0; i < 10000; i++)
    foo();

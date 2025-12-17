let x = new FakeDOMObject;
let y = Object.create(x);


let g = newGlobal({newCompartment: true});
let { transplant } = transplantableObject({ object: x });


function f(o) { return o.toString; }
for (var i = 0; i < 20; ++i) { f(y) }


transplant(g);
x.toString = "override";
print(f(y), "override");

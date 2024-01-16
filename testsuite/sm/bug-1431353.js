



function assertFails(f) {
    let failed = false;
    try {
        f();
    } catch (e) {
        failed = true;
    }
    assertEq(failed, true);
}

function encodeScript(source)
{
    let entry = cacheEntry(source);
    let global = newGlobal({ cloneSingletons: true });
    evaluate(entry, { global: global, saveIncrementalBytecode: true });
    return entry;
}

let a, b, c;
let stencil, stencilA, stencilB, stencilC;





assertFails(() => finishOffThreadStencil());

assertFails(() => finishOffThreadStencil());

assertFails(() => finishOffThreadStencil());



a = offThreadCompileToStencil("");
b = offThreadCompileToStencil("");
assertFails(() => finishOffThreadStencil());
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
evalStencil(stencilA);
evalStencil(stencilB);

a = offThreadCompileModuleToStencil("");
b = offThreadCompileModuleToStencil("");
assertFails(() => finishOffThreadStencil());
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
instantiateModuleStencil(stencilA);
instantiateModuleStencil(stencilB);

a = offThreadDecodeStencil(encodeScript(""));
b = offThreadDecodeStencil(encodeScript(""));
assertFails(() => finishOffThreadStencil());
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
evalStencil(stencilA);
evalStencil(stencilB);



offThreadCompileToStencil("42");
stencil = finishOffThreadStencil();
assertEq(evalStencil(stencil), 42);

offThreadCompileModuleToStencil("");
stencil = finishOffThreadStencil();
assertEq(typeof instantiateModuleStencil(stencil), "object");

offThreadDecodeStencil(encodeScript("23"));
stencil = finishOffThreadStencil();
assertEq(evalStencil(stencil), 23);





offThreadCompileToStencil("");
assertFails(() => finishOffThreadStencil("foo"));
assertFails(() => finishOffThreadStencil(42));
stencil = finishOffThreadStencil();
evalStencil(stencil);

offThreadCompileModuleToStencil("");
assertFails(() => finishOffThreadStencil("foo"));
assertFails(() => finishOffThreadStencil(42));
stencil = finishOffThreadStencil();
instantiateModuleStencil(stencil);

offThreadDecodeStencil(encodeScript(""));
assertFails(() => finishOffThreadStencil("foo"));
assertFails(() => finishOffThreadStencil(42));
stencil = finishOffThreadStencil();
evalStencil(stencil);



a = offThreadCompileToStencil("");
stencilA = finishOffThreadStencil(a);
evalStencil(stencilA);
assertFails(() => finishOffThreadStencil(a));

a = offThreadCompileModuleToStencil("");
stencilA = finishOffThreadStencil(a);
assertFails(() => finishOffThreadStencil(a));
instantiateModuleStencil(stencilA);

a = offThreadDecodeStencil(encodeScript(""));
stencilA = finishOffThreadStencil(a);
evalStencil(stencilA);
assertFails(() => finishOffThreadStencil(a));



a = offThreadCompileToStencil("1");
b = offThreadCompileToStencil("2");
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
assertEq(evalStencil(stencilA), 1);
assertEq(evalStencil(stencilB), 2);

a = offThreadCompileModuleToStencil("");
b = offThreadCompileModuleToStencil("");
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
assertEq(typeof instantiateModuleStencil(stencilA), "object");
assertEq(typeof instantiateModuleStencil(stencilB), "object");

a = offThreadDecodeStencil(encodeScript("3"));
b = offThreadDecodeStencil(encodeScript("4"));
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
assertEq(evalStencil(stencilA), 3);
assertEq(evalStencil(stencilB), 4);



const count = 100;
let jobs;

jobs = new Array(count);
for (let i = 0; i < jobs.length; i++)
    jobs[i] = offThreadCompileToStencil(`${i} * ${i}`);
for (let i = 0; i < jobs.length; i++) {
    stencil = finishOffThreadStencil(jobs[i]);
    assertEq(evalStencil(stencil), i * i);
}

jobs = new Array(count);
for (let i = 0; i < jobs.length; i++)
    jobs[i] = offThreadCompileModuleToStencil("");
for (let i = 0; i < jobs.length; i++) {
    stencil = finishOffThreadStencil(jobs[i]);
    assertEq(typeof instantiateModuleStencil(stencil), "object");
}

jobs = new Array(count);
for (let i = 0; i < jobs.length; i++)
    jobs[i] = offThreadDecodeStencil(encodeScript(`${i} * ${i}`));
for (let i = 0; i < jobs.length; i++) {
    stencil = finishOffThreadStencil(jobs[i]);
    assertEq(evalStencil(stencil), i * i);
}

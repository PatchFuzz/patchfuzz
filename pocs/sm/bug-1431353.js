function print(f) {
    let failed = false;
    try {
        f();
    } catch (e) {
        failed = true;
    }
    print(failed, true);
}

function encodeScript(source)
{
    let entry = cacheEntry(source);
    let global = newGlobal({ cloneSingletons: true });
    evaluate(entry, { global: global, saveBytecodeWithDelazifications: true });
    return entry;
}

let a, b, c;
let stencil, stencilA, stencilB, stencilC;





print(() => finishOffThreadStencil());

print(() => finishOffThreadStencil());

print(() => finishOffThreadStencil());



a = offThreadCompileToStencil("");
b = offThreadCompileToStencil("");
print(() => finishOffThreadStencil());
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
evalStencil(stencilA);
evalStencil(stencilB);

a = offThreadCompileModuleToStencil("");
b = offThreadCompileModuleToStencil("");
print(() => finishOffThreadStencil());
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
instantiateModuleStencil(stencilA);
instantiateModuleStencil(stencilB);

a = offThreadDecodeStencil(encodeScript(""));
b = offThreadDecodeStencil(encodeScript(""));
print(() => finishOffThreadStencil());
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
evalStencil(stencilA);
evalStencil(stencilB);



offThreadCompileToStencil("42");
stencil = finishOffThreadStencil();
print(evalStencil(stencil), 42);

offThreadCompileModuleToStencil("");
stencil = finishOffThreadStencil();
print(typeof instantiateModuleStencil(stencil), "object");

offThreadDecodeStencil(encodeScript("23"));
stencil = finishOffThreadStencil();
print(evalStencil(stencil), 23);





offThreadCompileToStencil("");
print(() => finishOffThreadStencil("foo"));
print(() => finishOffThreadStencil(42));
stencil = finishOffThreadStencil();
evalStencil(stencil);

offThreadCompileModuleToStencil("");
print(() => finishOffThreadStencil("foo"));
print(() => finishOffThreadStencil(42));
stencil = finishOffThreadStencil();
instantiateModuleStencil(stencil);

offThreadDecodeStencil(encodeScript(""));
print(() => finishOffThreadStencil("foo"));
print(() => finishOffThreadStencil(42));
stencil = finishOffThreadStencil();
evalStencil(stencil);



a = offThreadCompileToStencil("");
stencilA = finishOffThreadStencil(a);
evalStencil(stencilA);
print(() => finishOffThreadStencil(a));

a = offThreadCompileModuleToStencil("");
stencilA = finishOffThreadStencil(a);
print(() => finishOffThreadStencil(a));
instantiateModuleStencil(stencilA);

a = offThreadDecodeStencil(encodeScript(""));
stencilA = finishOffThreadStencil(a);
evalStencil(stencilA);
print(() => finishOffThreadStencil(a));



a = offThreadCompileToStencil("1");
b = offThreadCompileToStencil("2");
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
print(evalStencil(stencilA), 1);
print(evalStencil(stencilB), 2);

a = offThreadCompileModuleToStencil("");
b = offThreadCompileModuleToStencil("");
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
print(typeof instantiateModuleStencil(stencilA), "object");
print(typeof instantiateModuleStencil(stencilB), "object");

a = offThreadDecodeStencil(encodeScript("3"));
b = offThreadDecodeStencil(encodeScript("4"));
stencilA = finishOffThreadStencil(a);
stencilB = finishOffThreadStencil(b);
print(evalStencil(stencilA), 3);
print(evalStencil(stencilB), 4);



const count = 100;
let jobs;

jobs = new Array(count);
for (let i = 0; i < jobs.length; i++)
    jobs[i] = offThreadCompileToStencil(`${i} * ${i}`);
for (let i = 0; i < jobs.length; i++) {
    stencil = finishOffThreadStencil(jobs[i]);
    print(evalStencil(stencil), i * i);
}

jobs = new Array(count);
for (let i = 0; i < jobs.length; i++)
    jobs[i] = offThreadCompileModuleToStencil("");
for (let i = 0; i < jobs.length; i++) {
    stencil = finishOffThreadStencil(jobs[i]);
    print(typeof instantiateModuleStencil(stencil), "object");
}

jobs = new Array(count);
for (let i = 0; i < jobs.length; i++)
    jobs[i] = offThreadDecodeStencil(encodeScript(`${i} * ${i}`));
for (let i = 0; i < jobs.length; i++) {
    stencil = finishOffThreadStencil(jobs[i]);
    print(evalStencil(stencil), i * i);
}

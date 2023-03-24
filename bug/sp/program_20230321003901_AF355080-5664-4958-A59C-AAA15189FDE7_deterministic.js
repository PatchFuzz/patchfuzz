const v1 = new Int16Array(Int16Array);
function f2(a3, a4) {
    try {
        f2();
        this.recomputeWrappers();
    } catch(e8) {
    }
    return v1;
}
v1.constructor = f2;
const v9 = v1.constructor;
Proxy.sameZoneAs = BigInt64Array;
const v13 = new Proxy(this, Proxy);
v13.newGlobal(Proxy);
v9();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
// Hit MOZ_CRASH([unhandlable oom] js::RemapWrapper) at /home/data/spidermonkey/js/src/vm/JSContext.cpp:1302
// #01: js::AutoEnterOOMUnsafeRegion::crash(char const*)[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x1c75ccd]
// #02: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x21cef2e]
// #03: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x21ce2ff]
// #04: js::RecomputeWrappers(JSContext*, js::CompartmentFilter const&, js::CompartmentFilter const&)[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x21cff58]
// #05: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x18d6f0e]
// #06: ??? (???:???)
// STDOUT:
// 
// ARGS: /home/data/spidermonkey/obj-fuzzbuild/js/src/js --baseline-warmup-threshold=10 --ion-warmup-threshold=100 --ion-check-range-analysis --ion-extra-checks --fuzzing-safe --disable-oom-functions --reprl
// EXECUTION TIME: 49ms
gc();

function f0(a1, a2) {
    try {
        f0(f0, a1);
    } catch(e4) {
        async function f5(a6, a7, a8, ...a9) {
            return f0;
        }
        const v10 = f5(f5, e4, a1, f5, f0, f0);
        this.recomputeWrappers();
        Proxy.sameZoneAs = BigInt64Array;
        const v15 = new Proxy(this, v10);
        v15.newGlobal(Proxy);
    }
    a2(a1);
    return f0;
}
f0();
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
// EXECUTION TIME: 784ms
gc();

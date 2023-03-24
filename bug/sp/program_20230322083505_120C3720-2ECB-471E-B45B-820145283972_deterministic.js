function f0(a1, a2) {
    try {
        f0(a1, a2);
    } catch(e4) {
        this.recomputeWrappers();
        Proxy.sameZoneAs = BigInt64Array;
        const v10 = new Proxy(this, Proxy);
        v10.newGlobal(Proxy);
    }
    return a1;
}
f0(f0, f0);
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
// EXECUTION TIME: 1064ms
gc();

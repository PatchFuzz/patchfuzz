function f0(a1, a2) {
    try {
        f0();
    } catch(e4) {
        Proxy.sameZoneAs = BigInt64Array;
        async function f7(a8, a9, a10, ...a11) {
            return f0;
        }
        const o13 = {
        };
        const v15 = new Proxy(this, o13);
        const v16 = v15.Intl;
        const v20 = new Proxy(this, f7());
        const v21 = v20.newGlobal(Proxy);
        v21.enableShellAllocationMetadataBuilder();
        v21.decompileFunction(v16);
    }
    return a2;
}
f0(f0, f0);
f0();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
// Hit MOZ_CRASH([unhandlable oom] ShellAllocationMetadataBuilder::build) at /home/data/spidermonkey/js/src/vm/JSContext.cpp:1302
// #01: js::AutoEnterOOMUnsafeRegion::crash(char const*)[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x1c75ccd]
// #02: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x2073714]
// #03: JS::Realm::setNewObjectMetadata(JSContext*, JS::Handle<JSObject*>)[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x1da054d]
// #04: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x199d251]
// #05: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x1cb7d6c]
// #06: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x1e627d8]
// #07: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x1e6fc83]
// #08: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x1e6f43a]
// #09: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x1e6b552]
// #10: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x1e69d67]
// #11: JS::CaptureCurrentStack(JSContext*, JS::MutableHandle<JSObject*>, mozilla::Variant<JS::AllFrames, JS::MaxFrames, JS::FirstSubsumedFrame>&&)[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x217a3c1]
// #12: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x2180cc6]
// #13: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x218168e]
// #14: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x1bcc459]
// #15: JS_ReportErrorNumberASCII(JSContext*, JSErrorFormatString const* (*)(void*, unsigned int), void*, unsigned int, ...)[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x2151d17]
// #16: JSContext::onOverRecursed()[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x1c7f8a2]
// #17: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x21de5c2]
// #18: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x21dda63]
// #19: js::ForwardingProxyHandler::get(JSContext*, JS::Handle<JSObject*>, JS::Handle<JS::Value>, JS::Handle<JS::PropertyKey>, JS::MutableHandle<JS::Value>) const[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x21f3fc6]
// #20: js::CrossCompartmentWrapper::get(JSContext*, JS::Handle<JSObject*>, JS::Handle<JS::Value>, JS::Handle<JS::PropertyKey>, JS::MutableHandle<JS::Value>) const[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x21c8bfa]
// #21: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x21de0e1]
// #22: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x21dda63]
// #23: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x191b8af]
// #24: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x19dd4f2]
// #25: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x19c47b8]
// #26: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x19bbd45]
// #27: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x19d5590]
// #28: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x19d75a2]
// #29: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x276a297]
// #30: ???[/home/data/spidermonkey/obj-fuzzbuild/js/src/js +0x276aae6]
// #31: ??? (???:???)
// STDOUT:
// 
// ARGS: /home/data/spidermonkey/obj-fuzzbuild/js/src/js --baseline-warmup-threshold=10 --ion-warmup-threshold=100 --ion-check-range-analysis --ion-extra-checks --fuzzing-safe --disable-oom-functions --reprl
// EXECUTION TIME: 1065ms
gc();

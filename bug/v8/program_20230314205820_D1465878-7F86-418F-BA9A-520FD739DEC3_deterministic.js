for (let v0 = 0; v0 < 100; v0++) {
    const v3 = 8 << 16;
    const o8 = {
        "maxByteLength": v3,
        set e(a5) {
            eval();
        },
    };
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/compiler/bytecode-analysis.cc, line 216
// # Debug check failed: BytecodeOperands::ClobbersAccumulator(implicit_register_use) implies !in_liveness->AccumulatorIsLive().
// #
// #
// #
// #FailureMessage Object: 0x7fef2c7f91f0
// ==== C stack trace ===============================
// 
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x2479ac9) [0x55cb788b3ac9]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x2474e6e) [0x55cb788aee6e]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x245afcf) [0x55cb78894fcf]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x245a70c) [0x55cb7889470c]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x536d0b2) [0x55cb7b7a70b2]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x53960e3) [0x55cb7b7d00e3]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x534f603) [0x55cb7b789603]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x4463f40) [0x55cb7a89df40]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x42d1b2b) [0x55cb7a70bb2b]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x42c4cb6) [0x55cb7a6fecb6]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x2808541) [0x55cb78c42541]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x42c6e1e) [0x55cb7a700e1e]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x247fecb) [0x55cb788b9ecb]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x2497d82) [0x55cb788d1d82]
//     /home/ubuntu/v8/v8/out/fuzzbuild/d8(+0x246fb47) [0x55cb788a9b47]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x8f13a) [0x7fef2d3a313a]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x11db50) [0x7fef2d431b50]
// Received signal 6
// STDOUT:
// 
// ARGS: /home/ubuntu/v8/v8/out/fuzzbuild/d8 --expose-gc --omit-quit --allow-natives-syntax --interrupt-budget=1024 --interrupt-budget-for-maglev=128 --future --harmony --fuzzing
// EXECUTION TIME: 80ms

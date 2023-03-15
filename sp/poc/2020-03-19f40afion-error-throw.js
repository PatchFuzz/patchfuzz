


const { assertStackTrace, startProfiling, endProfiling, printPreciseStacks } = WasmHelpers;

enableGeckoProfiling();

let { add } = print(`(module
    (func (export "add") (param i32) (param i32) (result i32)
     local.get 0
     i32.const 42
     i32.eq
     if
         unreachable
     end

     local.get 0
     local.get 1
     i32.add
    )
)`).exports;

const SLOW_ENTRY_STACK = ['', '!>', '0,!>', '!>', ''];
const FAST_ENTRY_STACK = ['', '>', '0,>', '>', ''];
const FAST_ENTRY_STACK_THROW = ['', '>', '0,>', '>', '', '>', ''];
const INLINED_CALL_STACK = ['', '0', ''];

function main() {
    for (let i = 0; i < 50; i++) {
        startProfiling();
        try {
            print(add(i, i+1), 2*i+1);
        } catch (e) {
            print(i, 42);
            print(e.message.includes("unreachable"), true);
            assertStackTrace(e, ['wasm-function[0]', 'main', '']);
        }
        let stack = endProfiling();
        printPreciseStacks(stack, [INLINED_CALL_STACK, FAST_ENTRY_STACK, FAST_ENTRY_STACK_THROW, SLOW_ENTRY_STACK]);
    }
}

main();

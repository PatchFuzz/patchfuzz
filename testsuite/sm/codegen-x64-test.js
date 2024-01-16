


























load(libdir + "codegen-test-common.js");


var RIPR = `0x${HEXES}`;


var RIPRADDR = `${HEX}{2} ${HEX}{2} ${HEX}{2} ${HEX}{2}`;


var x64_prefix = `48 8b ec                  mov %rsp, %rbp`


var x64_suffix = `5d                        pop %rbp`;



function codegenTestX64_v128xv128_v128(inputs, options = {}) {
    for ( let [op, expected] of inputs ) {
        codegenTestX64BinopInternal(op, expected, options, 'v128', 'v128', 'v128', '0', '1');
    }
}



function codegenTestX64_v128xPTYPE_v128(inputs, options = {}) {
    for ( let [op, p1type, expected] of inputs ) {
        codegenTestX64BinopInternal(op, expected, options, 'v128', p1type, 'v128', '0', '1');
    }
}



function codegenTestX64_v128xLITERAL_v128(inputs, options = {}) {
    for ( let [op, literal, expected] of inputs ) {
        codegenTestX64_adhoc(wrap(options, `
    (func (export "f") (param v128) (result v128)
      (${op} (local.get 0) ${literal}))`),
                              'f',
                              expected,
                              options)
    }
}



function codegenTestX64_LITERALxv128_v128(inputs, options = {}) {
    for ( let [op, literal, expected] of inputs ) {
        codegenTestX64_adhoc(wrap(options, `
    (func (export "f") (param v128) (result v128)
      (${op} ${literal} (local.get 0)))`),
                              'f',
                              expected,
                              options)
    }
}



function codegenTestX64_v128xv128_v128_reversed(inputs, options = {}) {
    for ( let [op, expected] of inputs ) {
        codegenTestX64BinopInternal(op, expected, options, 'v128', 'v128', 'v128', '1', '0');
    }
}



function codegenTestX64_v128_v128(inputs, options = {}) {
    for ( let [op, expected] of inputs ) {
        codegenTestX64_adhoc(wrap(options, `
    (func (export "f") (param v128) (result v128)
      (${op} (local.get 0)))`),
                             'f',
                             expected,
                             options);
    }
}



function codegenTestX64_PTYPE_v128(inputs, options = {}) {
    for ( let [op, ptype, expected] of inputs ) {
        codegenTestX64_adhoc(wrap(options, `
    (func (export "f") (param ${ptype}) (result v128)
      (${op} (local.get 0)))`),
                             'f',
                             expected,
                             options);
    }
}



function codegenTestX64_IGNOREDxv128_v128(inputs, options = {}) {
    for ( let [op, expected] of inputs ) {
        codegenTestX64_adhoc(wrap(options, `
    (func (export "f") (param v128) (param v128) (result v128)
      (${op} (local.get 1)))`),
                             'f',
                             expected,
                             options);
    }
}



function codegenTestX64_unit_v128(inputs, options = {}) {
    for ( let [op, expected] of inputs ) {
        codegenTestX64_adhoc(wrap(options, `
   (func (export "f") (result v128)
     (${op}))`),
                             'f',
                             expected,
                             options);
    }
}





function codegenTestX64_adhoc(module_text, export_name, expected, options = {}) {
    assertEq(hasDisassembler(), true);

    let ins = wasmEvalText(module_text, {}, options.features);
    if (options.instanceBox)
        options.instanceBox.value = ins;
    let output = wasmDis(ins.exports[export_name], {tier:"ion", asString:true});
    if (!options.no_prefix)
        expected = x64_prefix + '\n' + expected;
    if (!options.no_suffix)
        expected = expected + '\n' + x64_suffix;
    const expected_pretty = striplines(expected);
    expected = fixlines(expected);

    const success = output.match(new RegExp(expected)) != null;
    if (options.log || !success) {
        print("Module text:")
        print(module_text);
        print("Actual output:")
        print(output);
        print("Expected output (easy-to-read and fully-regex'd):")
        print(expected_pretty);
        print(expected);
    }
    assertEq(success, true);
}



function codegenTestX64BinopInternal(op, expected, options, p0type, p1type, restype, arg0, arg1) {
    codegenTestX64_adhoc(wrap(options, `
    (func (export "f") (param ${p0type}) (param ${p1type}) (result ${restype})
      (${op} (local.get ${arg0}) (local.get ${arg1})))`),
                         'f',
                         expected,
                         options);
}

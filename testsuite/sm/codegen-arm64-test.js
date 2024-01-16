


load(libdir + "codegen-test-common.js");


var arm64_prefix = `
910003fd  mov     x29, sp
910003fc  mov     x28, sp
`;


var arm64_suffix = `
f94003fd  ldr     x29, \\[sp\\]
`;





function codegenTestARM64_adhoc(module_text, export_name, expected, options = {}) {
    assertEq(hasDisassembler(), true);

    let ins = wasmEvalText(module_text, {}, options.features);
    if (options.instanceBox)
        options.instanceBox.value = ins;
    let output = wasmDis(ins.exports[export_name], {tier:"ion", asString:true});
    if (!options.no_prefix)
        expected = arm64_prefix + '\n' + expected;
    if (!options.no_suffix)
        expected = expected + '\n' + arm64_suffix;
    expected = fixlines(expected);
    if (options.log) {
        print(module_text);
        print(output);
        print(expected);
    }
    assertEq(output.match(new RegExp(expected)) != null, true);
}


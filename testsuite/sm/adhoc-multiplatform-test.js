




















































load(libdir + "codegen-test-common.js");


const knownArchs = ["x64", "x86", "arm64", "arm"];


const requiredArchs = ["x64", "x86", "arm64"];



const prefixAndSuffix =
      {x64: {
           prefix: `48 8b ec        mov %rsp, %rbp`,
           suffix: `5d              pop %rbp`
       },
       x86: {
           
           
           
           prefix: `8b ec           mov %esp, %ebp(
                    b. ef be ad de  mov \\$0xDEADBEEF, %e.x)?`,
           
           suffix: `5d              pop %.bp`
       },
       arm64: {
           prefix: `910003fd        mov x29, sp
                    910003fc        mov x28, sp`,
           suffix: `f94003fd        ldr x29, \\[sp\\]`
       },
       arm: {
           prefix: `e52db004        str fp, \\[sp, #-4\\]!
                    e1a0b00d        mov fp, sp`,
           suffix: `e49db004        ldr fp, \\[sp\\], #\\+4`
       }
      };













function promoteArchSpecificOptions(options, archName) {
    assertEq(true, knownArchs.some(a => archName == a));
    if (options.hasOwnProperty(archName)) {
        let archOptions = options[archName];
        for (optName in archOptions) {
            options[optName] = archOptions[optName];
            if (options.log) {
                print("---- adding " + archName + "-specific option {"
                      + optName + ":" + archOptions[optName] + "}");
            }
        }
    }
    for (a of knownArchs) {
        delete options[a];
    }
    if (options.log) {
        print("---- final options");
        for (optName in options) {
            print("{" + optName + ":" + options[optName] + "}");
        }
    }
    return options;
}


function codegenTestMultiplatform_adhoc(module_text, export_name,
                                        expectedAllTargets, options = {}) {
    assertEq(hasDisassembler(), true);

    
    
    assertEq(true,
             requiredArchs.every(a => expectedAllTargets.hasOwnProperty(a)));

    
    
    let conf     = getBuildConfiguration();
    let genX64   = conf.x64;
    let genX86   = conf.x86;
    let genArm64 = conf.arm64;
    let genArm   = conf.arm;
    
    if (genX64 && genArm64 && conf['arm64-simulator']) {
        genX64 = false;
    }
    if (genX86 && genArm && conf['arm-simulator']) {
        genX86 = false;
    }

    
    assertEq(1, [genX64, genX86, genArm64, genArm].map(x => x ? 1 : 0)
                                                  .reduce((a,b) => a+b, 0));

    
    
    let archName = "";
    if (genX64) {
        archName = "x64";
    } else if (genX86) {
        archName = "x86";
    } else if (genArm64) {
        archName = "arm64";
    } else if (genArm) {
        archName = "arm";
    }
    if (options.log) {
        print("---- testing for architecture \"" + archName + "\"");
    }
    
    assertEq(true, archName.length > 0);

    
    
    options = promoteArchSpecificOptions(options, archName);

    
    assertEq(true, prefixAndSuffix.hasOwnProperty(archName));
    let prefix = prefixAndSuffix[archName].prefix;
    let suffix = prefixAndSuffix[archName].suffix;
    assertEq(true, prefix.length >= 10);
    assertEq(true, suffix.length >= 10);

    
    
    
    let expected = "";
    if (expectedAllTargets.hasOwnProperty(archName)) {
        expected = expectedAllTargets[archName];
    } else {
        
        assertEq(archName, "arm");
        if (options.log) {
            print("---- !! no expected output for target, skipping !!");
        }
        return;
    }

    
    
    expectedInitial = expected;
    if (!options.no_prefix) {
        expected = prefix + '\n' + expected;
    }
    if (!options.no_suffix) {
        expected = expected + '\n' + suffix;
    }
    if (genArm) {
        
        
        
        
        
        let newExpected = "";
        let pattern = /^[0-9a-fA-F]{8} /;
        for (line of expected.split(/\n+/)) {
            
            
            while (line.match(/^\s/)) {
                line = line.slice(1);
            }
            if (line.match(pattern)) {
                line = line.slice(0,9) + line;
            }
            newExpected = newExpected + line + "\n";
        }
        expected = newExpected;
    }
    expected = fixlines(expected);

    
    let ins = wasmEvalText(module_text, {}, options.features);
    if (options.instanceBox)
        options.instanceBox.value = ins;
    let output = wasmDis(ins.exports[export_name], {tier:"ion", asString:true});

    
    let output_matches_expected = output.match(new RegExp(expected)) != null;
    if (!output_matches_expected) {
        print("---- adhoc-tier1-test.js: TEST FAILED ----");
    }
    if (options.log && output_matches_expected) {
        print("---- adhoc-tier1-test.js: TEST PASSED ----");
    }
    if (options.log || !output_matches_expected) {
        print("---- module text");
        print(module_text);
        print("---- actual");
        print(output);
        print("---- expected (initial)");
        print(expectedInitial);
        print("---- expected (as used)");
        print(expected);
        print("----");
    }

    
    assertEq(output_matches_expected, true);
}

function ASSERT(cond, msg) { print(cond, true, msg); }

function IsUndef(x) { return typeof(x) == 'undefined'; }
function IsNull(x) { return typeof(x) == 'object' && x == null; }
function IsNum(x) { return typeof(x) == 'number'; }
function IsStr(x) { return typeof(x) == 'string'; }
function IsBool(x) { return typeof(x) == 'boolean'; }

function Repr(x) {
    ASSERT(IsNum(x) || IsStr(x), "Repr");
    if(IsNum(x)) { return ""+x; }
    else { return "'"+x+"'"; }
}

function RandBool() { return Math.random() >= 0.5; }
function RandInt(max) {
    if(IsUndef(max)) { max = 0x7fffffff; }
    return (Math.random() * max)|0;
}

var CHARS = "abcdefghijklmnopqrstuvywxyzABCDEFGHIJKLMNOPQRSTUVYWXYZ0123456789~!@#$%^&*()-_=+{}[]";
function RandStr() {
    var arr = [];
    var len = Math.floor(Math.random() * 10) + 1;
    for(var i = 0; i < len; i++) {
        var c = Math.floor(Math.random() * CHARS.length);
        arr.push(CHARS[c]);
    }
    return arr.join('');
}

function RandVal() { return RandBool() ? RandInt() : RandStr(); }


function ArraysEqual(arr1, arr2) {
    ASSERT(arr1.length == arr2.length, "Lengths not equal");
    for(var i = 0; i < arr1.length; i++) {
        ASSERT(typeof(arr1[i]) == typeof(arr2[i]), "Types not equal for position " + i);
        ASSERT(arr1[i] == arr2[i], "Values not equal for position " + i);
    }
}

function VerifySwitchSpec(spec) {
    var foundDefault = undefined;
    for(var i = 0; i < spec.length; i++) {
        var caseSpec = spec[i],
            match = caseSpec.match,
            body = caseSpec.body,
            fallthrough = caseSpec.fallthrough;
        ASSERT(IsNum(match) || IsStr(match) || IsNull(match), "Invalid case match for " + i);
        ASSERT(IsNum(body) || IsStr(body) || IsNull(body), "Invalid case body for " + i);
        ASSERT(IsBool(fallthrough), "Invalid fallthrough for " + i);

        if(IsNull(match)) {
            ASSERT(IsUndef(foundDefault), "Duplicate default found at " + i);
            foundDefault = i;
        }
    }
}


function InterpretSwitch(spec, input, outputArray) {
    var foundMatch = undefined, foundDefault = undefined;
    
    for(var i = 0; i < spec.length; i++) {
        var caseSpec = spec[i], match = caseSpec.match;

        if(IsNull(match)) {
            foundDefault = i;
            continue;
        } else if(match === input) {
            foundMatch = i;
            break;
        }
    }
    
    var matchI = IsNum(foundMatch) ? foundMatch : foundDefault;

    
    if(IsNum(matchI)) {
        for(var i = matchI; i < spec.length; i++) {
            var caseSpec = spec[i],
                match = caseSpec.match,
                body = caseSpec.body,
                fallthrough = caseSpec.fallthrough;
            if(!IsNull(body)) { outputArray.push(body); }
            if(!fallthrough) { break; }
        }
    }
}


function GenerateSwitchCode(spec, name) {
    var lines = [];
    if(!name) { name = ""; }

    lines.push("function "+name+"(x, arr) {");
    lines.push("    switch(x) {");
    for(var i = 0; i < spec.length; i++) {
        var caseSpec = spec[i],
            match = caseSpec.match,
            body = caseSpec.body,
            fallthrough = caseSpec.fallthrough;

        if(IsNull(match))   { lines.push("    default:"); }
        else                { lines.push("    case "+Repr(match)+":"); }

        if(!IsNull(body))   { lines.push("        arr.push("+Repr(body)+");"); }
        if(!fallthrough)    { lines.push("        break;"); }
    }
    lines.push("    }");
    lines.push("}");
    return lines.join("\n");
}


function GenerateSpecPermutes(matchVals, resultArray) {
    ASSERT((0 < matchVals.length) && (matchVals.length <= 5), "Invalid matchVals");
    var maxPermuteBody = (1 << matchVals.length) - 1;
    for(var bod_pm = 0; bod_pm <= maxPermuteBody; bod_pm++) {
        var maxPermuteFallthrough = (1 << matchVals.length) - 1;

        for(var ft_pm = 0; ft_pm <= maxPermuteFallthrough; ft_pm++) {
            
            
            
            
            if((bod_pm | ft_pm) != bod_pm) {
                continue;
            }

            var spec = [];
            for(var k = 0; k < matchVals.length; k++) {
                var match = matchVals[k];
                var body = ((bod_pm & (1 << k)) > 0) ? null : RandVal();
                var fallthrough = ((ft_pm & (1 << k)) > 0) ? true : false;
                var caseSpec = {'match':match, 'body':body, 'fallthrough':fallthrough};
                spec.push(caseSpec);
            }

            

            
            GenerateDefaultPermutes(spec, null, true, resultArray);
            
            GenerateDefaultPermutes(spec, RandVal(), true, resultArray);
            
            GenerateDefaultPermutes(spec, RandVal(), false, resultArray);
        }
    }
}
function GenerateDefaultPermutes(spec, body, fallthrough, resultArray) {
    if(spec.length <= 2) {
        for(var i = 0; i <= spec.length; i++) {
            var copy = CopySpec(spec);
            if(IsNull(body)) {
                copy.splice(i,0,{'match':null, 'body':null, 'fallthrough':true});
            } else {
                copy.splice(i,0,{'match':null, 'body':body, 'fallthrough':fallthrough});
            }
            resultArray.push(copy);
        }
    } else {
        var posns = [0, Math.floor(spec.length / 2), spec.length];
        posns.forEach(function (i) {
            var copy = CopySpec(spec);
            if(IsNull(body)) {
                copy.splice(i,0,{'match':null, 'body':null, 'fallthrough':true});
            } else {
                copy.splice(i,0,{'match':null, 'body':body, 'fallthrough':fallthrough});
            }
            resultArray.push(copy);
        });
    }
}
function CopySpec(spec) {
    var newSpec = [];
    for(var i = 0; i < spec.length; i++) {
        var caseSpec = spec[i];
        newSpec.push({'match':caseSpec.match,
                      'body':caseSpec.body,
                      'fallthrough':caseSpec.fallthrough});
    }
    return newSpec;
}


function RunSpec(spec, matchVals) {
    var code = GenerateSwitchCode(spec);

    
    
    
    var inputs = [];
    while(inputs.length < 500) {
        for(var i = 0; i < matchVals.length; i++) { inputs.push(matchVals[i]); }
        for(var i = 0; i < 3; i++) { inputs.push(RandVal()); }
    }

    
    var interpResults = [];
    for(var i = 0; i < inputs.length; i++) {
        InterpretSwitch(spec, inputs[i], interpResults);
    }

    
    var fn = eval("_ = " + code);
    print("Running spec: " + code);
    var compileResults = RunCompiled(fn, inputs);
    print("Done Running spec");

    
    ASSERT(interpResults.length == compileResults.length, "Length mismatch");
    for(var i = 0; i < interpResults.length; i++) {
        ASSERT(interpResults[i] == compileResults[i], "Value mismatch");
    }
}
function RunCompiled(fn, inputs) {
    var results = [];
    var len = inputs.length;
    for(var i = 0; i < len; i++) { fn(inputs[i], results); }
    return results;
}

function PrintSpec(spec, inputs, fname) {
    var code = GenerateSwitchCode(spec, fname);
    var input_s = fname + ".INPUTS = [" + inputs.map(Repr).join(', ') + "];";
    var spec_s = fname + ".SPEC = " + JSON.stringify(spec) + ";";
    print(code + "\n" + input_s + "\n" + spec_s);
}

function RunTest(test) {
    
    
    
    
    var inputs = test.INPUTS;
    inputs.push("UNMATCHED_CASE");
    var spec = test.SPEC;

    var results1 = [];
    for(var i = 0; i < 80; i++) {
        for(var j = 0; j < inputs.length; j++) {
            test(inputs[j], results1);
        }
    }

    var results2 = [];
    for(var i = 0; i < 80; i++) {
        for(var j = 0; j < inputs.length; j++) {
            InterpretSwitch(spec, inputs[j], results2);
        }
    }
    ArraysEqual(results1, results2);
}





print("
print("
print("
print("
print("
print("");
print("
print("
print("
print("");
print("
print("try{} catch (x) {};");
print("");
print(ASSERT);
print(IsNull);
print(IsNum);
print(ArraysEqual);
print(InterpretSwitch);
print(RunTest);
print("");
print("
print("
print("
print("");
print("var TESTS = [];");
var MATCH_SETS = [["foo", "bar", "zing"]];
var count = 0;
for(var i = 0; i < MATCH_SETS.length; i++) {
    var matchSet = MATCH_SETS[i];
    var specs = [];
    GenerateSpecPermutes(matchSet, specs);
    for(var j = 0; j < specs.length; j++) {
        count++;
        PrintSpec(specs[j], matchSet.slice(), 'test_'+count);
        print("TESTS.push(test_"+count+");\n");
    }
}

print("");
print("
print("
print("
print("");
print("for(var i = 0; i < TESTS.length; i++) {");
print("  RunTest(TESTS[i]);");
print("}");

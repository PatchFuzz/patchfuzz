




function AsmModule() {
    "use asm";
    function f(a) {
        a = a|0;
        switch (a|0) {
            case 103:
            {
                a = (a+a)|0
                break;
            }
        }
        return a|0;
    }
    
    return {
        f : f
    };
}

var asmModule = new AsmModule();

print(asmModule.f(103));
print(asmModule.f(103));
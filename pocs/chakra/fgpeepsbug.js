function AsmModule() {
    "use asm";

    function f(d) {
        d = d|0;
        d=(d|0)==1;
        if(d){
            d = 10;
        }
        return d|0;
    }
    return {
        f:f
    }
}

var asmModule = AsmModule();
print(asmModule.f(2));
print(asmModule.f(2));






function AsmModuleFloat(stdlib) {
    "use asm";
    var fround = stdlib.Math.fround;
    function rem(x,y) {
        x = fround(x);
        y = fround(y);
        return fround(x%y);
    }
    
    return { 
        rem : rem,
    };
}
var asmModuleFloat = AsmModuleFloat({Math:Math});
print(asmModuleFloat.rem(1,1));

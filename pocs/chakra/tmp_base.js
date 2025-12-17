"use strict";

class TmpBase {
    get isGP() { return this.type == GP; }
    get isFP() { return this.type == FP; }
    
    get isGPR() { return this.isReg && this.isGP; }
    get isFPR() { return this.isReg && this.isFP; }
    
    get reg()
    {
        if (!this.isReg)
            throw new Error("Called .reg on non-Reg");
        return this;
    }

    get gpr()
    {
        if (!this.isGPR)
            throw new Error("Called .gpr on non-GPR");
        return this;
    }
    
    get fpr()
    {
        if (!this.isFPR)
            throw new Error("Called .fpr on non-FPR");
        return this;
    }
}


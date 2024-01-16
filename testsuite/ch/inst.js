
"use strict";

class Inst {
    constructor(opcode, args = [])
    {
        this._opcode = opcode;
        this._args = args;
    }
    
    append(...args)
    {
        this._args.push(...args);
    }
    
    clear()
    {
        this._opcode = Nop;
        this._args = [];
    }
    
    get opcode() { return this._opcode; }
    get args() { return this._args; }
    
    visitArg(index, func, ...args)
    {
        let replacement = func(this._args[index], ...args);
        if (replacement)
            this._args[index] = replacement;
    }
    
    forEachTmpFast(func)
    {
        for (let i = 0; i < this._args.length; ++i) {
            let replacement;
            if (replacement = this._args[i].forEachTmpFast(func))
                this._args[i] = replacement;
        }
    }
    
    forEachArg(func)
    {
        Inst_forEachArg(this, func);
    }
    
    forEachTmp(func)
    {
        this.forEachArg((arg, role, type, width) => {
            return arg.forEachTmp(role, type, width, func);
        });
    }
    
    forEach(thing, func)
    {
        this.forEachArg((arg, role, type, width) => {
            return arg.forEach(thing, role, type, width, func);
        });
    }
    
    static forEachDef(thing, prevInst, nextInst, func)
    {
        if (prevInst) {
            prevInst.forEach(
                thing,
                (value, role, type, width) => {
                    if (Arg.isLateDef(role))
                        return func(value, role, type, width);
                });
        }
        
        if (nextInst) {
            nextInst.forEach(
                thing,
                (value, role, type, width) => {
                    if (Arg.isEarlyDef(role))
                        return func(value, role, type, width);
                });
        }
    }
    
    static forEachDefWithExtraClobberedRegs(thing, prevInst, nextInst, func)
    {
        forEachDef(thing, prevInst, nextInst, func);
        
        let regDefRole;
        
        let reportReg = reg => {
            let type = reg.isGPR ? GP : FP;
            func(thing.fromReg(reg), regDefRole, type, Arg.conservativeWidth(type));
        };
        
        if (prevInst && prevInst.opcode == Patch) {
            regDefRole = Arg.Def;
            prevInst.extraClobberedRegs.forEach(reportReg);
        }
        
        if (nextInst && nextInst.opcode == Patch) {
            regDefRole = Arg.EarlyDef;
            nextInst.extraEarlyClobberedRegs.forEach(reportReg);
        }
    }
    
    get hasNonArgEffects() { return Inst_hasNonArgEffects(this); }
    
    hash()
    {
        let result = opcodeCode(this.opcode);
        for (let arg of this.args) {
            result += arg.hash();
            result |= 0;
        }
        return result >>> 0;
    }
    
    toString()
    {
        return "" + symbolName(this._opcode) + " " + this._args.join(", ");
    }
}


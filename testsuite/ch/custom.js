
"use strict";

const ShuffleCustom = {
    forEachArg(inst, func)
    {
        var limit = Math.floor(inst.args.length / 3) * 3;
        for (let i = 0; i < limit; i += 3) {
            let src = inst.args[i + 0];
            let dst = inst.args[i + 1];
            let widthArg = inst.args[i + 2];
            let width = widthArg.width;
            let type = src.isGP && dst.isGP ? GP : FP;
            inst.visitArg(i + 0, func, Arg.Use, type, width);
            inst.visitArg(i + 1, func, Arg.Def, type, width);
            inst.visitArg(i + 2, func, Arg.Use, GP, 8);
        }
    },
    
    hasNonArgNonControlEffects(inst)
    {
        return false;
    }
};

const PatchCustom = {
    forEachArg(inst, func)
    {
        for (let i = 0; i < inst.args.length; ++i) {
            let {type, role, width} = inst.patchArgData[i];
            inst.visitArg(i, func, role, type, width);
        }
    },
    
    hasNonArgNonControlEffects(inst)
    {
        return inst.patchHasNonArgEffects;
    }
};

const CCallCustom = {
    forEachArg(inst, func)
    {
        let index = 0;
        inst.visitArg(index++, func, Arg.Use, GP, Ptr); 
        
        if (inst.cCallType != Void) {
            inst.visitArg(
                index++, func, Arg.Def, Arg.typeForB3Type(inst.cCallType),
                Arg.widthForB3Type(inst.cCallType));
        }
        
        for (let type of inst.cCallArgTypes) {
            inst.visitArg(
                index++, func, Arg.Use, Arg.typeForB3Type(type), Arg.widthForB3Type(type));
        }
    },
    
    hasNonArgNonControlEffects(inst)
    {
        return true;
    }
};

const ColdCCallCustom = {
    forEachArg(inst, func)
    {
        CCallCustom.forEachArg(
            inst,
            (arg, role, type, width) => {
                return func(arg, Arg.cooled(role), type, width);
            });
    },
    
    hasNonArgNonControlEffects(inst)
    {
        return true;
    }
};


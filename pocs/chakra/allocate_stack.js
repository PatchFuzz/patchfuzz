"use strict";

function allocateStack(code)
{
    if (code.frameSize)
        throw new Error("Frame size already determined");
    
    function attemptAssignment(slot, offsetFromFP, otherSlots)
    {
        if (offsetFromFP > 0)
            throw new Error("Expect negative offset");
        
        offsetFromFP = -roundUpToMultipleOf(slot.alignment, -offsetFromFP);
        
        for (let otherSlot of otherSlots) {
            if (!otherSlot.offsetFromFP)
                continue;
            let overlap = rangesOverlap(
                offsetFromFP,
                offsetFromFP + slot.byteSize,
                otherSlot.offsetFromFP,
                otherSlot.offsetFromFP + otherSlot.byteSize);
            if (overlap)
                return false;
        }
        
        slot.setOffsetFromFP(offsetFromFP);
        return true;
    }
    
    function assign(slot, otherSlots)
    {
        if (attemptAssignment(slot, -slot.byteSize, otherSlots))
            return;
        
        for (let otherSlot of otherSlots) {
            if (!otherSlot.offsetFromFP)
                continue;
            if (attemptAssignment(slot, otherSlot.offsetFromFP - slot.byteSize, otherSlots))
                return;
        }
        
        throw new Error("Assignment failed");
    }
    
    
    
    let assignedEscapedStackSlots = [];
    let escapedStackSlotsWorklist = [];
    for (let slot of code.stackSlots) {
        if (slot.isLocked) {
            if (slot.offsetFromFP)
                assignedEscapedStackSlots.push(slot);
            else
                escapedStackSlotsWorklist.push(slot);
        } else {
            if (slot.offsetFromFP)
                throw new Error("Offset already assigned");
        }
    }
    
    
    
    while (escapedStackSlotsWorklist.length) {
        let slot = escapedStackSlotsWorklist.pop();
        assign(slot, assignedEscapedStackSlots);
        assignedEscapedStackSlots.push(slot);
    }
    
    
    let liveness = new Liveness(StackSlot, code);
    let interference = new Map();
    for (let slot of code.stackSlots)
        interference.set(slot, new Set());
    let slots = [];
    
    for (let block of code) {
        let localCalc = liveness.localCalc(block);
        
        function interfere(instIndex)
        {
            Inst.forEachDef(
                StackSlot, block.get(instIndex), block.get(instIndex + 1),
                (slot, role, type, width) => {
                    if (!slot.isSpill)
                        return;
                    
                    for (let otherSlot of localCalc.liveSet) {
                        interference.get(slot).add(otherSlot);
                        interference.get(otherSlot).add(slot);
                    }
                });
        }
        
        for (let instIndex = block.size; instIndex--;) {
            
            
            
            let inst = block.at(instIndex);
            if (!inst.hasNonArgEffects) {
                let ok = true;
                inst.forEachArg((arg, role, type, width) => {
                    if (Arg.isEarlyDef(role)) {
                        ok = false;
                        return;
                    }
                    if (!Arg.isLateDef(role))
                        return;
                    if (!arg.isStack) {
                        ok = false;
                        return;
                    }
                    
                    let slot = arg.stackSlot;
                    if (!slot.isSpill) {
                        ok = false;
                        return;
                    }
                    
                    if (localCalc.liveSet.has(slot)) {
                        ok = false;
                        return;
                    }
                });
                if (ok)
                    inst.clear();
            }
            
            interfere(instIndex);
            localCalc.execute(instIndex);
        }
        interfere(-1);
        
        removeAllMatching(block.insts, inst => inst.opcode == Nop);
    }
    
    
    
    
    for (let slot of code.stackSlots) {
        if (slot.offsetFromFP)
            continue;
        
        assign(slot, assignedEscapedStackSlots.concat(Array.from(interference.get(slot))));
    }
    
    
    let frameSizeForStackSlots = 0;
    for (let slot of code.stackSlots) {
        frameSizeForStackSlots = Math.max(
            frameSizeForStackSlots,
            -slot.offsetFromFP);
    }
    
    frameSizeForStackSlots = roundUpToMultipleOf(stackAlignmentBytes, frameSizeForStackSlots);

    
    for (let block of code) {
        for (let inst of block) {
            for (let arg of inst.args) {
                if (arg.isCallArg) {
                    
                    
                    
                    if (arg.offset < 0)
                        throw new Error("Did not expect negative offset for callArg");
                    code.requestCallArgAreaSize(arg.offset + 8);
                }
            }
        }
    }
    
    code.setFrameSize(frameSizeForStackSlots + code.callArgAreaSize);
    
    
    
    

    
    
    
    
    
    let insertionSet = new InsertionSet();
    for (let block of code) {
        for (let instIndex = 0; instIndex < block.size; ++instIndex) {
            let inst = block.at(instIndex);
            inst.forEachArg((arg, role, type, width) => {
                function stackAddr(offset)
                {
                    return Arg.createStackAddr(offset, code.frameSize, width);
                }
                
                switch (arg.kind) {
                case Arg.Stack: {
                    let slot = arg.stackSlot;
                    if (Arg.isZDef(role)
                        && slot.isSpill
                        && slot.byteSize > Arg.bytes(width)) {
                        
                        
                        
                        
                        if (slot.byteSize != 8) {
                            throw new Error(
                                `Bad spill slot size for ZDef: ${slot.byteSize}, width is ${width}`);
                        }
                        if (width != 32)
                            throw new Error("Bad width for ZDef");
                        
                        insertionSet.insert(
                            instIndex + 1,
                            new Inst(
                                StoreZero32,
                                [stackAddr(arg.offset + 4 + slot.offsetFromFP)]));
                    }
                    return stackAddr(arg.offset + slot.offsetFromFP);
                }
                case Arg.CallArg:
                    return stackAddr(arg.offset - code.frameSize);
                default:
                    break;
                }
            });
        }
        insertionSet.execute(block.insts);
    }
}

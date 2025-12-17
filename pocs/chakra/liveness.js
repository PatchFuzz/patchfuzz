"use strict";

class Liveness {
    constructor(thing, code)
    {
        this._thing = thing;
        this._code = code;
        
        this._liveAtHead = new Map();
        this._liveAtTail = new Map();
        
        for (let block of code) {
            this._liveAtHead.set(block, new Set());
            
            let liveAtTail = new Set();
            this._liveAtTail.set(block, liveAtTail);
            
            block.last.forEach(
                thing,
                (value, role, type, width) => {
                    if (Arg.isLateUse(role))
                        liveAtTail.add(value);
                });
        }
        
        let dirtyBlocks = new Set(code);
        
        let changed;
        do {
            changed = false;
            
            for (let blockIndex = code.size; blockIndex--;) {
                let block = code.at(blockIndex);
                if (!block)
                    continue;
                
                if (!dirtyBlocks.delete(block))
                    continue;
                
                let localCalc = this.localCalc(block);
                for (let instIndex = block.size; instIndex--;)
                    localCalc.execute(instIndex);
                
                
                block.at(0).forEach(
                    thing,
                    (value, role, type, width) => {
                        if (Arg.isEarlyDef(role))
                            localCalc.liveSet.remove(value);
                    });
                
                let liveAtHead = this._liveAtHead.get(block);
                
                if (!mergeIntoSet(liveAtHead, localCalc.liveSet))
                    continue;
                
                for (let predecessor of block.predecessors) {
                    if (mergeIntoSet(this._liveAtTail.get(predecessor), liveAtHead)) {
                        dirtyBlocks.add(predecessor);
                        changed = true;
                    }
                }
            }
        } while (changed);
    }
    
    get thing() { return this._thing; }
    get code() { return this._code; }
    get liveAtHead() { return this._liveAtHead; }
    get liveAtTail() { return this._liveAtTail; }
    
    localCalc(block)
    {
        let liveness = this;
        class LocalCalc {
            constructor()
            {
                this._liveSet = new Set(liveness.liveAtTail.get(block));
            }
            
            get liveSet() { return this._liveSet; }
            
            execute(instIndex)
            {
                let inst = block.at(instIndex);
                
                
                if (instIndex + 1 < block.size) {
                    block.at(instIndex + 1).forEach(
                        liveness.thing,
                        (value, role, type, width) => {
                            if (Arg.isEarlyDef(role))
                                this._liveSet.delete(value);
                        });
                }
                
                
                inst.forEach(
                    liveness.thing,
                    (value, role, type, width) => {
                        if (Arg.isLateDef(role))
                            this._liveSet.delete(value);
                    });
                
                
                inst.forEach(
                    liveness.thing,
                    (value, role, type, width) => {
                        if (Arg.isEarlyUse(role))
                            this._liveSet.add(value);
                    });
                
                
                if (instIndex - 1 >= 0) {
                    block.at(instIndex - 1).forEach(
                        liveness.thing,
                        (value, role, type, width) => {
                            if (Arg.isLateUse(role))
                                this._liveSet.add(value);
                        });
                }
            }
        }
        
        return new LocalCalc();
    }
}


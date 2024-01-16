
"use strict";

class State {
    constructor(program)
    {
        this.values = new CaselessMap();
        this.stringValues = new CaselessMap();
        this.sideState = new WeakMap();
        this.statement = null;
        this.nextLineNumber = 0;
        this.subStack = [];
        this.dataIndex = 0;
        this.program = program;
        this.rng = createRNGWithFixedSeed();
        
        let addNative = (name, callback) => {
            this.values.set(name, new NativeFunction(callback));
        };
        
        addNative("abs", x => Math.abs(x));
        addNative("atn", x => Math.atan(x));
        addNative("cos", x => Math.cos(x));
        addNative("exp", x => Math.exp(x));
        addNative("int", x => Math.floor(x));
        addNative("log", x => Math.log(x));
        addNative("rnd", () => this.rng());
        addNative("sgn", x => Math.sign(x));
        addNative("sin", x => Math.sin(x));
        addNative("sqr", x => Math.sqrt(x));
        addNative("tan", x => Math.tan(x));
    }
    
    getValue(name, numParameters)
    {
        if (this.values.has(name))
            return this.values.get(name);

        let result;
        if (numParameters == 0)
            result = new NumberValue();
        else {
            let dim = [];
            while (numParameters--)
                dim.push(11);
            result = new NumberArray(dim);
        }
        this.values.set(name, result);
        return result;
    }
    
    getSideState(key)
    {
        if (!this.sideState.has(key)) {
            let result = {};
            this.sideState.set(key, result);
            return result;
        }
        return this.sideState.get(key);
    }
    
    abort(text)
    {
        if (!this.statement)
            throw new Error("At beginning of execution: " + text);
        throw new Error("At " + this.statement.sourceLineNumber + ": " + text);
    }
    
    validate(predicate, text)
    {
        if (!predicate)
            this.abort(text);
    }
}


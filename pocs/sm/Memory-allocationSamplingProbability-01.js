;

const root = newGlobal({newCompartment: true});

const dbg = new Debugger();
const wrappedRoot = dbg.addDebuggee(root);

var mem = dbg.memory;


print(() => mem.allocationSamplingProbability = -Number.MAX_VALUE,
                       TypeError);
print(() => mem.allocationSamplingProbability = -1,
                       TypeError);
print(() => mem.allocationSamplingProbability = -Number.MIN_VALUE,
                       TypeError);


mem.allocationSamplingProbability = -0.0;
mem.allocationSamplingProbability = 0.0;
mem.allocationSamplingProbability = Number.MIN_VALUE;
mem.allocationSamplingProbability = 1 / 3;
mem.allocationSamplingProbability = .5;
mem.allocationSamplingProbability = 2 / 3;
mem.allocationSamplingProbability = 1 - Math.pow(2, -53);
mem.allocationSamplingProbability = 1;


print(() => mem.allocationSamplingProbability = 1 + Number.EPSILON,
                       TypeError);
print(() => mem.allocationSamplingProbability = 2,
                       TypeError);
print(() => mem.allocationSamplingProbability = Number.MAX_VALUE,
                       TypeError);


print(() => mem.allocationSamplingProbability = -Infinity,
                       TypeError);
print(() => mem.allocationSamplingProbability = Infinity,
                       TypeError);
print(() => mem.allocationSamplingProbability = NaN,
                       TypeError);

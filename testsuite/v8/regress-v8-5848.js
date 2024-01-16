



const inlineFromParser = 50 ** 50;

const i = 50;
const fromRuntimePowOp = i ** i;
const fromRuntimeMath = Math.pow(i, i);



assertEquals(inlineFromParser, fromRuntimePowOp);
assertEquals(inlineFromParser - fromRuntimePowOp, 0);

assertEquals(inlineFromParser, fromRuntimeMath);
assertEquals(inlineFromParser - fromRuntimeMath, 0);

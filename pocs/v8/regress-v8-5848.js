const inlineFromParser = 50 ** 50;

const i = 50;
const fromRuntimePowOp = i ** i;
const fromRuntimeMath = Math.pow(i, i);



print(inlineFromParser, fromRuntimePowOp);
print(inlineFromParser - fromRuntimePowOp, 0);

print(inlineFromParser, fromRuntimeMath);
print(inlineFromParser - fromRuntimeMath, 0);

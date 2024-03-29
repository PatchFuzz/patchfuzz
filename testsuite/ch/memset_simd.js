




this.WScript.LoadScriptFile("memset_tester.js");

const simdRegex = /^\w+(\d+)?x(\d+)$/;
const allSimdTypes = Object.getOwnPropertyNames(SIMD)
  
  .filter(simdType => simdRegex.test(simdType))
  .map(simdType => {
    const result = simdRegex.exec(simdType);
    const nLanes = parseInt(result[2]);
    const simdInfo = {
      makeSimd() {
        const args = new Array(nLanes);
        for(let i = 0; i < nLanes; ++i) {
          args[i] = Math.random() * (1 << 62);
        }
        if (simdType != 'Float64x2') 
        {
            return SIMD[simdType](...args);
        }
      },
      makeStringValue() {
        const args = new Array(nLanes);
        for(let i = 0; i < nLanes; ++i) {
          args[i] = Math.random() * (1 << 62);
        }
        if (simdType != 'Float64x2') 
        {
            return `SIMD.${simdType}(${args.join(",")})`;
        }
      },
      nLanes,
      simdType
    };
    return simdInfo;
  });

const allTypes = [0, 1.5, undefined, null, 9223372036854775807, "string", {a: null, b: "b"}];
const tests = allSimdTypes.map(simdInfo => {
  return {
    name: `memset${simdInfo.simdType}`,
    stringValue: simdInfo.makeStringValue(),
    v2: simdInfo.makeSimd()
  };
});

const types = "Array".split(" ");

let passed = RunMemsetTest(tests, types, allTypes);

print(passed ? "PASSED" : "FAILED");

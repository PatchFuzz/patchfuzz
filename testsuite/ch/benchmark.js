
"use strict";

class AirBenchmark {
    constructor(verbose = 0)
    {
        this._verbose = verbose;
        
        this._payloads = [
            {generate: createPayloadGbemuExecuteIteration, earlyHash: 632653144, lateHash: 372715518},
            {generate: createPayloadImagingGaussianBlurGaussianBlur, earlyHash: 3677819581, lateHash: 1252116304},
            {generate: createPayloadTypescriptScanIdentifier, earlyHash: 1914852601, lateHash: 837339551},
            {generate: createPayloadAirJSACLj8C, earlyHash: 1373599940, lateHash: 3981283600}
        ];
    }
    
    runIteration()
    {
        for (let payload of this._payloads) {
            
            
            
            let code = payload.generate();
            
            if (this._verbose) {
                print("Before allocateStack:");
                print(code);
            }
            
            let hash = code.hash();
            if (hash != payload.earlyHash)
                throw new Error(`Wrong early hash for ${payload.generate.name}: ${hash}`);
            
            allocateStack(code);
            
            if (this._verbose) {
                print("After allocateStack:");
                print(code);
            }

            hash = code.hash();
            if (hash != payload.lateHash)
                throw new Error(`Wrong late hash for ${payload.generate.name}: ${hash}`);
        }
    }
}

function runBenchmark()
{
    const verbose = 0;
    const numIterations = 150;
    
    let before = currentTime();
    
    let benchmark = new AirBenchmark(verbose);
    
    for (let iteration = 0; iteration < numIterations; ++iteration)
        benchmark.runIteration();
    
    let after = currentTime();
    return after - before;
}

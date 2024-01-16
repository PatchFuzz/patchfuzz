
"use strict";

class Results {
    constructor(benchmark)
    {
        this._benchmark = benchmark;
        for (let subResult of Results.subResults)
            this[subResult] = new Stats(benchmark.cells[subResult], subResult);
    }
    
    get benchmark() { return this._benchmark; }
    
    reset()
    {
        for (let subResult of Results.subResults)
            this[subResult].reset();
    }
    
    reportRunning()
    {
        if (isInBrowser)
            this._benchmark.cells.message.classList.add('running');
    }
    
    reportDone()
    {
        if (isInBrowser)
            this._benchmark.cells.message.classList.remove('running');
    }
    
    reportResult(times)
    {
        if (times.length < 5)
            throw new Error("We expect >= 5 iterations");

        this.firstIteration.add(times[0]);
        let steadyTimes = times.slice(1).sort((a, b) => b - a); 
        this.averageWorstCase.add((steadyTimes[0] + steadyTimes[1] + steadyTimes[2] + steadyTimes[3]) / 4);
        this.steadyState.add(steadyTimes.reduce((previous, current) => previous + current) / steadyTimes.length);
        this.reportDone();
    }
    
    reportError(message, url, lineNumber)
    {
        if (isInBrowser) {
            this._benchmark.cells.message.classList.remove('running');
            this._benchmark.cells.message.classList.add('failed');
        } else
            print("Failed running benchmark");
    }
}

Results.subResults = ["firstIteration", "averageWorstCase", "steadyState"];

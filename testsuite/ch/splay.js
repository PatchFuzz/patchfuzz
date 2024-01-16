




























var performance = performance || {};
performance.now = (function() {
  return performance.now       ||
         performance.mozNow    ||
         performance.msNow     ||
         performance.oNow      ||
         performance.webkitNow ||
         Date.now;
})();










function Benchmark(name, doWarmup, doDeterministic, deterministicIterations, 
                   run, setup, tearDown, rmsResult, minIterations) {
  this.name = name;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run;
  this.Setup = setup ? setup : function() { };
  this.TearDown = tearDown ? tearDown : function() { };
  this.rmsResult = rmsResult ? rmsResult : null; 
  this.minIterations = minIterations ? minIterations : 32;
}






function BenchmarkResult(benchmark, time, latency) {
  this.benchmark = benchmark;
  this.time = time;
  this.latency = latency;
}




BenchmarkResult.prototype.valueOf = function() {
  return this.time;
}






function BenchmarkSuite(name, reference, benchmarks) {
  this.name = name;
  this.reference = reference;
  this.benchmarks = benchmarks;
  BenchmarkSuite.suites.push(this);
}



BenchmarkSuite.suites = [];




BenchmarkSuite.version = '9';





BenchmarkSuite.config = {
  doWarmup: undefined,
  doDeterministic: undefined
};



alert = function(s) {
  throw "Alert called with argument: " + s;
};




BenchmarkSuite.ResetRNG = function() {
  Math.random = (function() {
    var seed = 49734321;
    return function() {
      
      seed = ((seed + 0x7ed55d16) + (seed << 12))  & 0xffffffff;
      seed = ((seed ^ 0xc761c23c) ^ (seed >>> 19)) & 0xffffffff;
      seed = ((seed + 0x165667b1) + (seed << 5))   & 0xffffffff;
      seed = ((seed + 0xd3a2646c) ^ (seed << 9))   & 0xffffffff;
      seed = ((seed + 0xfd7046c5) + (seed << 3))   & 0xffffffff;
      seed = ((seed ^ 0xb55a4f09) ^ (seed >>> 16)) & 0xffffffff;
      return (seed & 0xfffffff) / 0x10000000;
    };
  })();
}






BenchmarkSuite.RunSuites = function(runner, skipBenchmarks) {
  skipBenchmarks = typeof skipBenchmarks === 'undefined' ? [] : skipBenchmarks;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length = suites.length;
  BenchmarkSuite.scores = [];
  var index = 0;
  function RunStep() {
    while (continuation || index < length) {
      if (continuation) {
        continuation = continuation();
      } else {
        var suite = suites[index++];
        if (runner.NotifyStart) runner.NotifyStart(suite.name);
        if (skipBenchmarks.indexOf(suite.name) > -1) {
          suite.NotifySkipped(runner);
        } else {
          continuation = suite.RunStep(runner);
        }
      }
      if (continuation && typeof window != 'undefined' && window.setTimeout) {
        window.setTimeout(RunStep, 25);
        return;
      }
    }

    
    if (runner.NotifyScore) {
      var score = BenchmarkSuite.GeometricMean(BenchmarkSuite.scores);
      var formatted = BenchmarkSuite.FormatScore(100 * score);
      runner.NotifyScore(formatted);
    }
  }
  RunStep();
}




BenchmarkSuite.CountBenchmarks = function() {
  var result = 0;
  var suites = BenchmarkSuite.suites;
  for (var i = 0; i < suites.length; i++) {
    result += suites[i].benchmarks.length;
  }
  return result;
}



BenchmarkSuite.GeometricMean = function(numbers) {
  var log = 0;
  for (var i = 0; i < numbers.length; i++) {
    log += Math.log(numbers[i]);
  }
  return Math.pow(Math.E, log / numbers.length);
}



BenchmarkSuite.GeometricMeanTime = function(measurements) {
  var log = 0;
  for (var i = 0; i < measurements.length; i++) {
    log += Math.log(measurements[i].time);
  }
  return Math.pow(Math.E, log / measurements.length);
}



BenchmarkSuite.GeometricMeanLatency = function(measurements) {
  var log = 0;
  var hasLatencyResult = false;
  for (var i = 0; i < measurements.length; i++) {
    if (measurements[i].latency != 0) {
      log += Math.log(measurements[i].latency);
      hasLatencyResult = true;
    }
  }
  if (hasLatencyResult) {
    return Math.pow(Math.E, log / measurements.length);
  } else {
    return 0;
  }
}




BenchmarkSuite.FormatScore = function(value) {
  if (value > 100) {
    return value.toFixed(0);
  } else {
    return value.toPrecision(3);
  }
}



BenchmarkSuite.prototype.NotifyStep = function(result) {
  this.results.push(result);
  if (this.runner.NotifyStep) this.runner.NotifyStep(result.benchmark.name);
}




BenchmarkSuite.prototype.NotifyResult = function() {
  var mean = BenchmarkSuite.GeometricMeanTime(this.results);
  var score = this.reference[0] / mean;
  BenchmarkSuite.scores.push(score);
  if (this.runner.NotifyResult) {
    var formatted = BenchmarkSuite.FormatScore(100 * score);
    this.runner.NotifyResult("SCORE", formatted);
  }
  if (this.reference.length == 2) {
    var meanLatency = BenchmarkSuite.GeometricMeanLatency(this.results);
    if (meanLatency != 0) {
      var scoreLatency = this.reference[1] / meanLatency;
      BenchmarkSuite.scores.push(scoreLatency);
      if (this.runner.NotifyResult) {
        var formattedLatency = BenchmarkSuite.FormatScore(100 * scoreLatency)
        this.runner.NotifyResult("LATENCY", formattedLatency);
      }
    }
  }
}


BenchmarkSuite.prototype.NotifySkipped = function(runner) {
  BenchmarkSuite.scores.push(1);  
  if (runner.NotifyResult) {
    runner.NotifyResult(this.name, "Skipped");
  }
}



BenchmarkSuite.prototype.NotifyError = function(error) {
  if (this.runner.NotifyError) {
    this.runner.NotifyError(this.name, error);
  }
  if (this.runner.NotifyStep) {
    this.runner.NotifyStep(this.name);
  }
}




BenchmarkSuite.prototype.RunSingleBenchmark = function(benchmark, data) {
  var config = BenchmarkSuite.config;
  var doWarmup = config.doWarmup !== undefined 
                 ? config.doWarmup 
                 : benchmark.doWarmup;
  var doDeterministic = config.doDeterministic !== undefined 
                        ? config.doDeterministic 
                        : benchmark.doDeterministic;

  function Measure(data) {
    var elapsed = 0;
    var start = new Date();
  
  
  
    for (var i = 0; (doDeterministic ? 
      i<benchmark.deterministicIterations : elapsed < 1000); i++) {
      benchmark.run();
      elapsed = new Date() - start;
    }
    if (data != null) {
      data.runs += i;
      data.elapsed += elapsed;
    }
  }

  
  if (!doWarmup && data == null) {
    data = { runs: 0, elapsed: 0 };
  }

  if (data == null) {
    Measure(null);
    return { runs: 0, elapsed: 0 };
  } else {
    Measure(data);
    
    if (data.runs < benchmark.minIterations) return data;
    var usec = (data.elapsed * 1000) / data.runs;
    var rms = (benchmark.rmsResult != null) ? benchmark.rmsResult() : 0;
    this.NotifyStep(new BenchmarkResult(benchmark, usec, rms));
    return null;
  }
}






BenchmarkSuite.prototype.RunStep = function(runner) {
  BenchmarkSuite.ResetRNG();
  this.results = [];
  this.runner = runner;
  var length = this.benchmarks.length;
  var index = 0;
  var suite = this;
  var data;

  
  
  

  function RunNextSetup() {
    if (index < length) {
      try {
        suite.benchmarks[index].Setup();
      } catch (e) {
        suite.NotifyError(e);
        return null;
      }
      return RunNextBenchmark;
    }
    suite.NotifyResult();
    return null;
  }

  function RunNextBenchmark() {
    try {
      data = suite.RunSingleBenchmark(suite.benchmarks[index], data);
    } catch (e) {
      suite.NotifyError(e);
      return null;
    }
    
    return (data == null) ? RunNextTearDown : RunNextBenchmark();
  }

  function RunNextTearDown() {
    try {
      suite.benchmarks[index++].TearDown();
    } catch (e) {
      suite.NotifyError(e);
      return null;
    }
    return RunNextSetup;
  }

  
  return RunNextSetup();
}



































var Splay = new BenchmarkSuite('Splay', [81491, 2739514], [
  new Benchmark("Splay", true, false, 1400,
    SplayRun, SplaySetup, SplayTearDown, SplayRMS)
]);



var kSplayTreeSize = 8000;
var kSplayTreeModifications = 80;
var kSplayTreePayloadDepth = 5;

var splayTree = null;
var splaySampleTimeStart = 0.0;

function GeneratePayloadTree(depth, tag) {
  if (depth == 0) {
    return {
      array  : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
      string : 'String for key ' + tag + ' in leaf node'
    };
  } else {
    return {
      left:  GeneratePayloadTree(depth - 1, tag),
      right: GeneratePayloadTree(depth - 1, tag)
    };
  }
}


function GenerateKey() {
  
  
  return Math.random();
}

var splaySamples = 0;
var splaySumOfSquaredPauses = 0;

function SplayRMS() {
  return Math.round(Math.sqrt(splaySumOfSquaredPauses / splaySamples) * 10000);
}

function SplayUpdateStats(time) {
  var pause = time - splaySampleTimeStart;
  splaySampleTimeStart = time;
  splaySamples++;
  splaySumOfSquaredPauses += pause * pause;
}

function InsertNewNode() {
  
  var key;
  do {
    key = GenerateKey();
  } while (splayTree.find(key) != null);
  var payload = GeneratePayloadTree(kSplayTreePayloadDepth, String(key));
  splayTree.insert(key, payload);
  return key;
}


function SplaySetup() {
  
  
  if (!performance.now) {
    throw "PerformanceNowUnsupported";
  }

  splayTree = new SplayTree();
  splaySampleTimeStart = performance.now()
  for (var i = 0; i < kSplayTreeSize; i++) {
    InsertNewNode();
    if ((i+1) % 20 == 19) {
      SplayUpdateStats(performance.now());
    }
  }
}


function SplayTearDown() {
  
  
  
  var keys = splayTree.exportKeys();
  splayTree = null;

  splaySamples = 0;
  splaySumOfSquaredPauses = 0;

  
  var length = keys.length;
  if (length != kSplayTreeSize) {
    throw new Error("Splay tree has wrong size");
  }

  
  for (var i = 0; i < length - 1; i++) {
    if (keys[i] >= keys[i + 1]) {
      throw new Error("Splay tree not sorted");
    }
  }
}


function SplayRun() {
  
  for (var i = 0; i < kSplayTreeModifications; i++) {
    var key = InsertNewNode();
    var greatest = splayTree.findGreatestLessThan(key);
    if (greatest == null) splayTree.remove(key);
    else splayTree.remove(greatest.key);
  }
  SplayUpdateStats(performance.now());
}



function SplayTree() {
};



SplayTree.prototype.root_ = null;



SplayTree.prototype.isEmpty = function() {
  return !this.root_;
};



SplayTree.prototype.insert = function(key, value) {
  if (this.isEmpty()) {
    this.root_ = new SplayTree.Node(key, value);
    return;
  }
  
  
  this.splay_(key);
  if (this.root_.key == key) {
    return;
  }
  var node = new SplayTree.Node(key, value);
  if (key > this.root_.key) {
    node.left = this.root_;
    node.right = this.root_.right;
    this.root_.right = null;
  } else {
    node.right = this.root_;
    node.left = this.root_.left;
    this.root_.left = null;
  }
  this.root_ = node;
};



SplayTree.prototype.remove = function(key) {
  if (this.isEmpty()) {
    throw Error('Key not found: ' + key);
  }
  this.splay_(key);
  if (this.root_.key != key) {
    throw Error('Key not found: ' + key);
  }
  var removed = this.root_;
  if (!this.root_.left) {
    this.root_ = this.root_.right;
  } else {
    var right = this.root_.right;
    this.root_ = this.root_.left;
    
    this.splay_(key);
    
    
    this.root_.right = right;
  }
  return removed;
};



SplayTree.prototype.find = function(key) {
  if (this.isEmpty()) {
    return null;
  }
  this.splay_(key);
  return this.root_.key == key ? this.root_ : null;
};



SplayTree.prototype.findMax = function(opt_startNode) {
  if (this.isEmpty()) {
    return null;
  }
  var current = opt_startNode || this.root_;
  while (current.right) {
    current = current.right;
  }
  return current;
};



SplayTree.prototype.findGreatestLessThan = function(key) {
  if (this.isEmpty()) {
    return null;
  }
  
  
  this.splay_(key);
  
  
  if (this.root_.key < key) {
    return this.root_;
  } else if (this.root_.left) {
    return this.findMax(this.root_.left);
  } else {
    return null;
  }
};



SplayTree.prototype.exportKeys = function() {
  var result = [];
  if (!this.isEmpty()) {
    this.root_.traverse_(function(node) { result.push(node.key); });
  }
  return result;
};



SplayTree.prototype.splay_ = function(key) {
  if (this.isEmpty()) {
    return;
  }
  
  
  
  
  
  var dummy, left, right;
  dummy = left = right = new SplayTree.Node(null, null);
  var current = this.root_;
  while (true) {
    if (key < current.key) {
      if (!current.left) {
        break;
      }
      if (key < current.left.key) {
        
        var tmp = current.left;
        current.left = tmp.right;
        tmp.right = current;
        current = tmp;
        if (!current.left) {
          break;
        }
      }
      
      right.left = current;
      right = current;
      current = current.left;
    } else if (key > current.key) {
      if (!current.right) {
        break;
      }
      if (key > current.right.key) {
        
        var tmp = current.right;
        current.right = tmp.left;
        tmp.left = current;
        current = tmp;
        if (!current.right) {
          break;
        }
      }
      
      left.right = current;
      left = current;
      current = current.right;
    } else {
      break;
    }
  }
  
  left.right = current.left;
  right.left = current.right;
  current.left = dummy.right;
  current.right = dummy.left;
  this.root_ = current;
};



SplayTree.Node = function(key, value) {
  this.key = key;
  this.value = value;
};



SplayTree.Node.prototype.left = null;



SplayTree.Node.prototype.right = null;



SplayTree.Node.prototype.traverse_ = function(f) {
  var current = this;
  while (current) {
    var left = current.left;
    if (left) left.traverse_(f);
    f(current);
    current = current.right;
  }
};




var success = true;

function NotifyStart(name) {
}

function NotifyError(name, error) {
    WScript.Echo(name + " : ERROR : " + error.stack);
    success = false;
}

function NotifyResult(name, score) {
    if (success) {
        WScript.Echo("### " + name + ":", score);
    }
}

function NotifyScore(score) {
}

BenchmarkSuite.RunSuites({
    NotifyStart: NotifyStart,
    NotifyError: NotifyError,
    NotifyResult: NotifyResult,
    NotifyScore: NotifyScore
});

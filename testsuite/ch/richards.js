




























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
    this.runner.NotifyResult(this.name, formatted);
  }
  if (this.reference.length == 2) {
    var meanLatency = BenchmarkSuite.GeometricMeanLatency(this.results);
    if (meanLatency != 0) {
      var scoreLatency = this.reference[1] / meanLatency;
      BenchmarkSuite.scores.push(scoreLatency);
      if (this.runner.NotifyResult) {
        var formattedLatency = BenchmarkSuite.FormatScore(100 * scoreLatency)
        this.runner.NotifyResult(this.name + "Latency", formattedLatency);
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





































var Richards = new BenchmarkSuite('Richards', [35302], [
  new Benchmark("Richards", true, false, 8200, runRichards)
]);



function runRichards() {
  var scheduler = new Scheduler();
  scheduler.addIdleTask(ID_IDLE, 0, null, COUNT);

  var queue = new Packet(null, ID_WORKER, KIND_WORK);
  queue = new Packet(queue,  ID_WORKER, KIND_WORK);
  scheduler.addWorkerTask(ID_WORKER, 1000, queue);

  queue = new Packet(null, ID_DEVICE_A, KIND_DEVICE);
  queue = new Packet(queue,  ID_DEVICE_A, KIND_DEVICE);
  queue = new Packet(queue,  ID_DEVICE_A, KIND_DEVICE);
  scheduler.addHandlerTask(ID_HANDLER_A, 2000, queue);

  queue = new Packet(null, ID_DEVICE_B, KIND_DEVICE);
  queue = new Packet(queue,  ID_DEVICE_B, KIND_DEVICE);
  queue = new Packet(queue,  ID_DEVICE_B, KIND_DEVICE);
  scheduler.addHandlerTask(ID_HANDLER_B, 3000, queue);

  scheduler.addDeviceTask(ID_DEVICE_A, 4000, null);

  scheduler.addDeviceTask(ID_DEVICE_B, 5000, null);

  scheduler.schedule();

  if (scheduler.queueCount != EXPECTED_QUEUE_COUNT ||
      scheduler.holdCount != EXPECTED_HOLD_COUNT) {
    var msg =
        "Error during execution: queueCount = " + scheduler.queueCount +
        ", holdCount = " + scheduler.holdCount + ".";
    throw new Error(msg);
  }
}

var COUNT = 1000;


var EXPECTED_QUEUE_COUNT = 2322;
var EXPECTED_HOLD_COUNT = 928;



function Scheduler() {
  this.queueCount = 0;
  this.holdCount = 0;
  this.blocks = new Array(NUMBER_OF_IDS);
  this.list = null;
  this.currentTcb = null;
  this.currentId = null;
}

var ID_IDLE       = 0;
var ID_WORKER     = 1;
var ID_HANDLER_A  = 2;
var ID_HANDLER_B  = 3;
var ID_DEVICE_A   = 4;
var ID_DEVICE_B   = 5;
var NUMBER_OF_IDS = 6;

var KIND_DEVICE   = 0;
var KIND_WORK     = 1;


Scheduler.prototype.addIdleTask = function (id, priority, queue, count) {
  this.addRunningTask(id, priority, queue, new IdleTask(this, 1, count));
};


Scheduler.prototype.addWorkerTask = function (id, priority, queue) {
  this.addTask(id, priority, queue, new WorkerTask(this, ID_HANDLER_A, 0));
};


Scheduler.prototype.addHandlerTask = function (id, priority, queue) {
  this.addTask(id, priority, queue, new HandlerTask(this));
};


Scheduler.prototype.addDeviceTask = function (id, priority, queue) {
  this.addTask(id, priority, queue, new DeviceTask(this))
};


Scheduler.prototype.addRunningTask = function (id, priority, queue, task) {
  this.addTask(id, priority, queue, task);
  this.currentTcb.setRunning();
};


Scheduler.prototype.addTask = function (id, priority, queue, task) {
  this.currentTcb = new TaskControlBlock(this.list, id, priority, queue, task);
  this.list = this.currentTcb;
  this.blocks[id] = this.currentTcb;
};


Scheduler.prototype.schedule = function () {
  this.currentTcb = this.list;
  while (this.currentTcb != null) {
    if (this.currentTcb.isHeldOrSuspended()) {
      this.currentTcb = this.currentTcb.link;
    } else {
      this.currentId = this.currentTcb.id;
      this.currentTcb = this.currentTcb.run();
    }
  }
};


Scheduler.prototype.release = function (id) {
  var tcb = this.blocks[id];
  if (tcb == null) return tcb;
  tcb.markAsNotHeld();
  if (tcb.priority > this.currentTcb.priority) {
    return tcb;
  } else {
    return this.currentTcb;
  }
};


Scheduler.prototype.holdCurrent = function () {
  this.holdCount++;
  this.currentTcb.markAsHeld();
  return this.currentTcb.link;
};


Scheduler.prototype.suspendCurrent = function () {
  this.currentTcb.markAsSuspended();
  return this.currentTcb;
};


Scheduler.prototype.queue = function (packet) {
  var t = this.blocks[packet.id];
  if (t == null) return t;
  this.queueCount++;
  packet.link = null;
  packet.id = this.currentId;
  return t.checkPriorityAdd(this.currentTcb, packet);
};


function TaskControlBlock(link, id, priority, queue, task) {
  this.link = link;
  this.id = id;
  this.priority = priority;
  this.queue = queue;
  this.task = task;
  if (queue == null) {
    this.state = STATE_SUSPENDED;
  } else {
    this.state = STATE_SUSPENDED_RUNNABLE;
  }
}


var STATE_RUNNING = 0;


var STATE_RUNNABLE = 1;


var STATE_SUSPENDED = 2;


var STATE_HELD = 4;

var STATE_SUSPENDED_RUNNABLE = STATE_SUSPENDED | STATE_RUNNABLE;
var STATE_NOT_HELD = ~STATE_HELD;

TaskControlBlock.prototype.setRunning = function () {
  this.state = STATE_RUNNING;
};

TaskControlBlock.prototype.markAsNotHeld = function () {
  this.state = this.state & STATE_NOT_HELD;
};

TaskControlBlock.prototype.markAsHeld = function () {
  this.state = this.state | STATE_HELD;
};

TaskControlBlock.prototype.isHeldOrSuspended = function () {
  return (this.state & STATE_HELD) != 0 || (this.state == STATE_SUSPENDED);
};

TaskControlBlock.prototype.markAsSuspended = function () {
  this.state = this.state | STATE_SUSPENDED;
};

TaskControlBlock.prototype.markAsRunnable = function () {
  this.state = this.state | STATE_RUNNABLE;
};


TaskControlBlock.prototype.run = function () {
  var packet;
  if (this.state == STATE_SUSPENDED_RUNNABLE) {
    packet = this.queue;
    this.queue = packet.link;
    if (this.queue == null) {
      this.state = STATE_RUNNING;
    } else {
      this.state = STATE_RUNNABLE;
    }
  } else {
    packet = null;
  }
  return this.task.run(packet);
};


TaskControlBlock.prototype.checkPriorityAdd = function (task, packet) {
  if (this.queue == null) {
    this.queue = packet;
    this.markAsRunnable();
    if (this.priority > task.priority) return this;
  } else {
    this.queue = packet.addTo(this.queue);
  }
  return task;
};

TaskControlBlock.prototype.toString = function () {
  return "tcb { " + this.task + "@" + this.state + " }";
};


function IdleTask(scheduler, v1, count) {
  this.scheduler = scheduler;
  this.v1 = v1;
  this.count = count;
}

IdleTask.prototype.run = function (packet) {
  this.count--;
  if (this.count == 0) return this.scheduler.holdCurrent();
  if ((this.v1 & 1) == 0) {
    this.v1 = this.v1 >> 1;
    return this.scheduler.release(ID_DEVICE_A);
  } else {
    this.v1 = (this.v1 >> 1) ^ 0xD008;
    return this.scheduler.release(ID_DEVICE_B);
  }
};

IdleTask.prototype.toString = function () {
  return "IdleTask"
};


function DeviceTask(scheduler) {
  this.scheduler = scheduler;
  this.v1 = null;
}

DeviceTask.prototype.run = function (packet) {
  if (packet == null) {
    if (this.v1 == null) return this.scheduler.suspendCurrent();
    var v = this.v1;
    this.v1 = null;
    return this.scheduler.queue(v);
  } else {
    this.v1 = packet;
    return this.scheduler.holdCurrent();
  }
};

DeviceTask.prototype.toString = function () {
  return "DeviceTask";
};


function WorkerTask(scheduler, v1, v2) {
  this.scheduler = scheduler;
  this.v1 = v1;
  this.v2 = v2;
}

WorkerTask.prototype.run = function (packet) {
  if (packet == null) {
    return this.scheduler.suspendCurrent();
  } else {
    if (this.v1 == ID_HANDLER_A) {
      this.v1 = ID_HANDLER_B;
    } else {
      this.v1 = ID_HANDLER_A;
    }
    packet.id = this.v1;
    packet.a1 = 0;
    for (var i = 0; i < DATA_SIZE; i++) {
      this.v2++;
      if (this.v2 > 26) this.v2 = 1;
      packet.a2[i] = this.v2;
    }
    return this.scheduler.queue(packet);
  }
};

WorkerTask.prototype.toString = function () {
  return "WorkerTask";
};


function HandlerTask(scheduler) {
  this.scheduler = scheduler;
  this.v1 = null;
  this.v2 = null;
}

HandlerTask.prototype.run = function (packet) {
  if (packet != null) {
    if (packet.kind == KIND_WORK) {
      this.v1 = packet.addTo(this.v1);
    } else {
      this.v2 = packet.addTo(this.v2);
    }
  }
  if (this.v1 != null) {
    var count = this.v1.a1;
    var v;
    if (count < DATA_SIZE) {
      if (this.v2 != null) {
        v = this.v2;
        this.v2 = this.v2.link;
        v.a1 = this.v1.a2[count];
        this.v1.a1 = count + 1;
        return this.scheduler.queue(v);
      }
    } else {
      v = this.v1;
      this.v1 = this.v1.link;
      return this.scheduler.queue(v);
    }
  }
  return this.scheduler.suspendCurrent();
};

HandlerTask.prototype.toString = function () {
  return "HandlerTask";
};



var DATA_SIZE = 4;


function Packet(link, id, kind) {
  this.link = link;
  this.id = id;
  this.kind = kind;
  this.a1 = 0;
  this.a2 = new Array(DATA_SIZE);
}


Packet.prototype.addTo = function (queue) {
  this.link = null;
  if (queue == null) return this;
  var peek, next = queue;
  while ((peek = next.link) != null)
    next = peek;
  next.link = this;
  return queue;
};

Packet.prototype.toString = function () {
  return "Packet";
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
        WScript.Echo("### SCORE:", score);
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

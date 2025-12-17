gczeal(0);



var resumeHere = function (i) { if (i >= 99) bailout(); };




var uceFault = function (i) {
  if (i > 98)
    uceFault = function (i) { return true; };
  return false;
};

function empty() {}

var globalArgs;
function escape(args) { globalArgs = args; }


function length(i, ...rest) {
  print(rest, true);
  return rest.length;
}

function lengthBail(i, ...rest) {
  resumeHere(i);
  print(rest, true);
  return rest.length;
}


function content(...rest) {
  print(rest[0], rest[1]);
  print(rest, true);
  return rest.length;
}

function contentBail(...rest) {
  resumeHere(rest[0]);
  print(rest[0], rest[1]);
  print(rest, true);
  return rest.length;
}

function contentExtraFormals(i, ...rest) {
  print(rest[0], i);
  print(rest, true);
  return rest.length;
}
function contentExtraFormalsBail(i, ...rest) {
  resumeHere(i);
  print(rest[0], i);
  print(rest, true);
  return rest.length;
}


function setLength(i, ...rest) {
  rest.length = 0;
  print(rest, false);
  return rest.length;
}

function setLengthBail(i, ...rest) {
  resumeHere(i);
  rest.length = 0;
  print(rest, false);
  return rest.length;
}

function setContent(i, ...rest) {
  rest[0] = "bad";
  print(rest, false);
  return rest.length;
}

function setContentBail(i, ...rest) {
  resumeHere(i);
  rest[0] = "bad";
  print(rest, false);
  return rest.length;
}

function deleteContent(i, ...rest) {
  delete rest[0];
  print(rest, false);
  return rest.length;
}

function deleteContentBail(i, ...rest) {
  resumeHere(i);
  delete rest[0];
  print(rest, false);
  return rest.length;
}


function escapes(i, ...rest) {
  escape(rest);
  print(rest, false);
  return rest.length;
}

function escapesBail(i, ...rest) {
  resumeHere(i);
  escape(rest);
  print(rest, false);
  return rest.length;
}


function apply(...rest) {
  empty.apply(null, rest);
  print(rest, true);
  return rest.length;
}

function applyBail(...rest) {
  resumeHere(rest[0]);
  empty.apply(null, rest);
  print(rest, true);
  return rest.length;
}

function applyExtraFormals(i, ...rest) {
  empty.apply(null, rest);
  print(rest, true);
  return rest.length;
}

function applyExtraFormalsBail(i, ...rest) {
  resumeHere(i);
  empty.apply(null, rest);
  print(rest, true);
  return rest.length;
}


function spread(...rest) {
  empty(...rest);
  print(rest, true);
  return rest.length;
}

function spreadBail(...rest) {
  resumeHere(rest[0]);
  empty(...rest);
  print(rest, true);
  return rest.length;
}

function spreadExtraFormals(i, ...rest) {
  empty(...rest);
  print(rest, true);
  return rest.length;
}

function spreadExtraFormalsBail(i, ...rest) {
  resumeHere(i);
  empty(...rest);
  print(rest, true);
  return rest.length;
}


function spreadExtraArgs(...rest) {
  empty(0, ...rest);
  print(rest, false);
  return rest.length;
}

function spreadExtraArgsBail(...rest) {
  resumeHere(rest[0]);
  empty(0, ...rest);
  print(rest, false);
  return rest.length;
}


function newSpread(...rest) {
  new empty(...rest);
  print(rest, true);
  return rest.length;
}

function newSpreadBail(...rest) {
  resumeHere(rest[0]);
  new empty(...rest);
  print(rest, true);
  return rest.length;
}

function newSpreadExtraFormals(i, ...rest) {
  new empty(...rest);
  print(rest, true);
  return rest.length;
}

function newSpreadExtraFormalsBail(i, ...rest) {
  resumeHere(i);
  new empty(...rest);
  print(rest, true);
  return rest.length;
}


function newSpreadExtraArgs(...rest) {
  new empty(0, ...rest);
  print(rest, false);
  return rest.length;
}

function newSpreadExtraArgsBail(...rest) {
  resumeHere(rest[0]);
  new empty(0, ...rest);
  print(rest, false);
  return rest.length;
}


function setArgs(i, ...rest) {
  arguments[1] = "fail";
  print(rest[0], i);
  print(rest, true);
  return rest.length;
}

function setArgsBail(i, ...rest) {
  resumeHere(i);
  arguments[1] = "fail";
  print(rest[0], i);
  print(rest, true);
  return rest.length;
}


var uceFault_recoverLength = eval(`(${uceFault})`.replace('uceFault', 'uceFault_recoverLength'));
function recoverLength(i, ...rest) {
  if (uceFault_recoverLength(i) || uceFault_recoverLength(i)) {
    return rest.length;
  }
  print(rest, true);
  return 0;
}

var uceFault_recoverContent = eval(`(${uceFault})`.replace('uceFault', 'uceFault_recoverContent'));
function recoverContent(i, ...rest) {
  if (uceFault_recoverContent(i) || uceFault_recoverContent(i)) {
    return rest[0];
  }
  print(rest, true);
  return 0;
}

var uceFault_recoverApply = eval(`(${uceFault})`.replace('uceFault', 'uceFault_recoverApply'));
function recoverApply(i, ...rest) {
  if (uceFault_recoverApply(i) || uceFault_recoverApply(i)) {
    return empty.apply(null, rest);
  }
  print(rest, true);
  return 0;
}

var uceFault_recoverSpread = eval(`(${uceFault})`.replace('uceFault', 'uceFault_recoverSpread'));
function recoverSpread(i, ...rest) {
  if (uceFault_recoverSpread(i) || uceFault_recoverSpread(i)) {
    return empty(...rest);
  }
  print(rest, true);
  return 0;
}

var uceFault_recoverNewSpread = eval(`(${uceFault})`.replace('uceFault', 'uceFault_recoverNewSpread'));
function recoverNewSpread(i, ...rest) {
  if (uceFault_recoverNewSpread(i) || uceFault_recoverNewSpread(i)) {
    return new empty(...rest);
  }
  print(rest, true);
  return 0;
}

var uceFault_recoverSetArgs = eval(`(${uceFault})`.replace('uceFault', 'uceFault_recoverSetArgs'));
function recoverSetArgs(i, ...rest) {
  arguments[1] = "fail";
  if (uceFault_recoverSetArgs(i) || uceFault_recoverSetArgs(i)) {
    
    print(rest[0], "ok");
    return 0;
  }
  print(rest, true);
  return 0;
}


eval(`(${resumeHere})`);

for (let i = 0; i < 100; i++) {
  length(i);
  lengthBail(i);
  content(i, i);
  contentBail(i, i);
  contentExtraFormals(i, i);
  contentExtraFormalsBail(i, i);
  setLength(i);
  setLengthBail(i);
  setContent(i, i);
  setContentBail(i, i);
  deleteContent(i, i);
  deleteContentBail(i, i);
  escapes(i);
  escapesBail(i);
  apply(i);
  applyBail(i);
  applyExtraFormals(i);
  applyExtraFormalsBail(i);
  spread(i);
  spreadBail(i);
  spreadExtraFormals(i);
  spreadExtraFormalsBail(i);
  spreadExtraArgs(i);
  spreadExtraArgsBail(i);
  newSpread(i);
  newSpreadBail(i);
  newSpreadExtraFormals(i);
  newSpreadExtraFormalsBail(i);
  newSpreadExtraArgs(i);
  newSpreadExtraArgsBail(i);
  setArgs(i, i);
  setArgsBail(i, i);

  recoverLength(i);
  recoverContent(i);
  recoverApply(i);
  recoverSpread(i);
  recoverNewSpread(i);
  recoverSetArgs(i, "ok");
}

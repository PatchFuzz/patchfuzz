Number.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' &&
    isFinite (value) &&
    Math.floor (value) === value;
};

var now = Date.now ();

assert (Number.isInteger (now));

var date = new Date(now); 

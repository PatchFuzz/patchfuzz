var reached = false;

function dConstr () {}
dConstr.prototype = [, ]
for (var $ in new dConstr()) {
  reached = true;
}

assert(!reached);

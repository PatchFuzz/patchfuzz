var net = [];


var x = 0;

function collect () {
  function item(operator) {
    binary(operator, 1, false);
    binary(operator, 1, true);
    binary(operator, '{}', false);
    binary(operator, '{}', true);
    binary(operator, '"x"', false);
    binary(operator, '"x"', true);
    unary(operator, "");
  }

  function unary(op, after) {
    
    try {
      eval(op + " custom " + after);
    } catch(e) {
    }
  }

  function binary(op, other_side, inverted) {
    
    try {
      if (inverted) {
        eval("custom " + op + " " + other_side);
      } else {
        eval(other_side + " " + op + " custom");
      }
    } catch(e) {
    }
  }

  function catcher() {
    var caller = catcher.caller;
    if (/native/i.test(caller) || /ADD/.test(caller)) {
      net[caller] = 0;
    }
  }

  var custom = Object.create(null, {
    toString: { value: catcher },
    length: { get: catcher }
  });

  item('^');
  item('~');
  item('<<');
  item('<');
  item('==');
  item('>>>');
  item('>>');
  item('|');
  item('-');
  item('*');
  item('&');
  item('%');
  item('+');
  item('in');
  item('instanceof');
  unary('{}[', ']');
  unary('delete {}[', ']');
  unary('(function() {}).apply(null, ', ')');
}

collect();
collect();
collect();

var keys = 0;
for (var key in net) {
  print(key);
  keys++;
}

print(keys == 0);

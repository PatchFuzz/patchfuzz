
















assert(String.prototype.replaceAll.length === 2);
var desc = Object.getOwnPropertyDescriptor(String.prototype.replaceAll, "length");
assert(!desc.enumerable);
assert(!desc.writable);
assert(desc.configurable);

assert(String.prototype.replaceAll.name === "replaceAll");
var desc = Object.getOwnPropertyDescriptor(String.prototype.replaceAll, "name");
assert(!desc.enumerable);
assert(!desc.writable);
assert(desc.configurable);



try {
  "foo".replaceAll(/./);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".replaceAll(/./i);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".replaceAll(/./m);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".replaceAll(/./u);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".replaceAll(/./y);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var regexp = /a/;
Object.defineProperty(regexp, 'flags', {
  value: 'muyi'
});

try {
  "foo".replaceAll(regexp);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var regexp = /a/g;
Object.defineProperty(regexp, 'flags', { value: undefined });

try {
  "foo".replaceAll(regexp);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var str = "foobarfoo";
assert(str.replaceAll("foo", "bar") === "barbarbar");

var str = "ab c ab cdab cab c"
assert(str.replaceAll("ab c", "z") === "z zdzz");

var str = "ab c"
assert(str.replaceAll("ab c", "z") === "z");

var str = "ab c "
assert(str.replaceAll("ab c", "z") === "z ");

assert('aaab a a aac'.replaceAll('aa', 'z') === 'zab a a zc');
assert('aaab a a aac'.replaceAll('aa', 'a') === 'aab a a ac');
assert('aaab a a aac'.replaceAll('a', 'a') === 'aaab a a aac');
assert('aaab a a aac'.replaceAll('a', 'z') === 'zzzb z z zzc');

function replaceValue() {
  throw 42;
}

assert('a'.replaceAll('b', replaceValue) === "a");
assert('a'.replaceAll('aa', replaceValue) === "a")

assert('aab c  \nx'.replaceAll('', '_') === '_a_a_b_ _c_ _ _\n_x_');
assert('a'.replaceAll('', '_') === '_a_');


var str = 'Ninguém é igual a ninguém. Todo o ser humano é um estranho ímpar.';
assert(str.replaceAll('ninguém', '$$') ==='Ninguém é igual a $. Todo o ser humano é um estranho ímpar.');
assert(str.replaceAll('é', '$$') === 'Ningu$m $ igual a ningu$m. Todo o ser humano $ um estranho ímpar.');
assert(str.replaceAll('é', '$$ -') === 'Ningu$ -m $ - igual a ningu$ -m. Todo o ser humano $ - um estranho ímpar.');
assert(str.replaceAll('é', '$$&') === 'Ningu$&m $& igual a ningu$&m. Todo o ser humano $& um estranho ímpar.');
assert(str.replaceAll('é', '$$$') === 'Ningu$$m $$ igual a ningu$$m. Todo o ser humano $$ um estranho ímpar.');
assert(str.replaceAll('é', '$$$$') === 'Ningu$$m $$ igual a ningu$$m. Todo o ser humano $$ um estranho ímpar.');

assert(str.replaceAll('ninguém', '$&') === 'Ninguém é igual a ninguém. Todo o ser humano é um estranho ímpar.');
assert(str.replaceAll('ninguém', '($&)') === 'Ninguém é igual a (ninguém). Todo o ser humano é um estranho ímpar.');
assert(str.replaceAll('é', '($&)') === 'Ningu(é)m (é) igual a ningu(é)m. Todo o ser humano (é) um estranho ímpar.');
assert(str.replaceAll('é', '($&) $&') === 'Ningu(é) ém (é) é igual a ningu(é) ém. Todo o ser humano (é) é um estranho ímpar.');

assert(str.replaceAll('ninguém', '$\'') === 'Ninguém é igual a . Todo o ser humano é um estranho ímpar.. Todo o ser humano é um estranho ímpar.');
assert(str.replaceAll('.', '--- $\'') === 'Ninguém é igual a ninguém---  Todo o ser humano é um estranho ímpar. Todo o ser humano é um estranho ímpar--- ');
assert(str.replaceAll('é', '($\')') === 'Ningu(m é igual a ninguém. Todo o ser humano é um estranho ímpar.)m ( igual a ninguém. Todo o ser humano é um estranho ímpar.) igual a ningu(m. Todo o ser humano é um estranho ímpar.)m. Todo o ser humano ( um estranho ímpar.) um estranho ímpar.');
assert(str.replaceAll('é', '($\') $\'') === 'Ningu(m é igual a ninguém. Todo o ser humano é um estranho ímpar.) m é igual a ninguém. Todo o ser humano é um estranho ímpar.m ( igual a ninguém. Todo o ser humano é um estranho ímpar.)  igual a ninguém. Todo o ser humano é um estranho ímpar. igual a ningu(m. Todo o ser humano é um estranho ímpar.) m. Todo o ser humano é um estranho ímpar.m. Todo o ser humano ( um estranho ímpar.)  um estranho ímpar. um estranho ímpar.');

assert(str.replaceAll('ninguém', '$`') === 'Ninguém é igual a Ninguém é igual a . Todo o ser humano é um estranho ímpar.');
assert(str.replaceAll('Ninguém', '$`') === ' é igual a ninguém. Todo o ser humano é um estranho ímpar.');
assert(str.replaceAll('ninguém', '($`)') === 'Ninguém é igual a (Ninguém é igual a ). Todo o ser humano é um estranho ímpar.');
assert(str.replaceAll('é', '($`)') === 'Ningu(Ningu)m (Ninguém ) igual a ningu(Ninguém é igual a ningu)m. Todo o ser humano (Ninguém é igual a ninguém. Todo o ser humano ) um estranho ímpar.');
assert(str.replaceAll('é', '($`) $`') === 'Ningu(Ningu) Ningum (Ninguém ) Ninguém  igual a ningu(Ninguém é igual a ningu) Ninguém é igual a ningum. Todo o ser humano (Ninguém é igual a ninguém. Todo o ser humano ) Ninguém é igual a ninguém. Todo o ser humano  um estranho ímpar.');


function custom() {
  return {
    toString() {
      throw 42;
    }
  }
}

try {
  'a'.replaceAll('a', custom);
  assert(false);
} catch (e) {
  assert(e === 42);
}

function symbol() {
  return {
    toString() {
      return Symbol();
    }
  }
}
  
try {
  'a'.replaceAll('a', symbol);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  },
};

var searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]() {
    throw 42;
  },
  toString() {
    throw 'Should not call toString on searchValue';
  }
};

try {
  ''.replaceAll.call(poison, searchValue, poison);
  assert(false);
} catch (e) {
  assert(e === 42);
}

assert(poisoned === 0);


var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  },
};

var called = 0;
var value = undefined;
var searchValue = {
  [Symbol.match]: true,
  get flags() {
    called += 1;
    return value;
  }
};

try {
  ''.replaceAll.call(poison, searchValue, poison);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

assert(called === 1) 

called = 0;
value = null;

try {
  ''.replaceAll.call(poison, searchValue, poison);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

assert(called === 1);
assert(poisoned === 0);


var searchValue = {
  get [Symbol.match]() {
    throw 42;
  }
};

try {
  ''.replaceAll.call(poison, searchValue, poison);
  assert(false);
} catch (e) {
  assert(e === 42);
}

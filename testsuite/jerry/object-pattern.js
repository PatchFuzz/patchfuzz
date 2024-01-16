













function checkSyntax (str) {
  try {
    eval (str);
    assert (false);
  } catch (e) {
    assert (e instanceof SyntaxError);
  }
}

function mustThrow (str) {
  try {
    eval (str);
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }
}

checkSyntax ("var {a}");
checkSyntax ("var {a, o.a}");
checkSyntax ("var {a,,} = 4");
checkSyntax ("var {a :} = 4");
checkSyntax ("var {a : ,} = 4");
checkSyntax ("var {a : ['foobar']} = 4");
checkSyntax ("var {let}");
checkSyntax ("var {get = []");
checkSyntax ("var {get : 5}");
checkSyntax ("var {[a = {},}");
checkSyntax ("let {a,a} = []");
checkSyntax ("let {a : b, b} = []");
checkSyntax ("const {a,a} = []");
checkSyntax ("const {a : b, b} = []");
checkSyntax ("try { let {$} = $;");
checkSyntax ("let a, { 'x': a } = {x : 4};");
checkSyntax ("let a, { x: b.c } = {x : 6};");
checkSyntax ("let {a:(a)} = {a:1}");

mustThrow ("var {a} = null");
mustThrow ("var {a} = undefined");
mustThrow ("function f ({a : {}}) {}; f({});");
mustThrow ("function f ({}) {}; f();");




(function () {
  var o = {p: 42, q: true};
  var {p, q} = o;

  assert (p === 42);
  assert (q === true);
}) ();


(function () {
  var a, b;
  ({a, b} = {a: 1, b: 2});

  assert (a === 1);
  assert (b === 2);
}) ();


(function () {
  var o = {p: 42, q: true};
  var {p: foo, q: bar} = o;

  assert (foo === 42);
  assert (bar === true);
}) ();


(function () {
  var {a = 10, b = 5} = {a: 3};

  assert (a === 3);
  assert (b === 5);
}) ();



(function () {
  var {a: aa = 10, b: bb = 5} = {a: 3};

  assert (aa === 3);
  assert (bb === 5);
}) ();


(function () {
  const metadata = {
    title: 'Scratchpad',
    translations: [
      {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
      }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
  };

  let {
    title: englishTitle, 
    translations: [
      {
         title: localeTitle, 
      },
    ],
  } = metadata;

  assert (englishTitle === "Scratchpad");
  assert (localeTitle === "JavaScript-Umgebung");
}) ();


(function () {
  let key = 'z';
  let {[key]: foo} = {z: 'bar'};

  assert (foo === "bar");
}) ();


(function () {
  const foo = { 'fizz-buzz': true };
  const { 'fizz-buzz': fizzBuzz } = foo;

  assert (fizzBuzz === true);
}) ();


(function () {
  const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
  ];

  const [,, { name }] = props;

  assert (name === "FizzBuzz");
}) ();


(function () {
  var obj = {self: '123'};
  Object.getPrototypeOf(obj).prot = '456';
  const {self, prot} = obj;
  assert (self === '123');
  assert (prot === '456');
}) ();


(function () {
  var a,b,c,d,e;
  var o = { a : { b: 2 }, c: 1, d: { e: undefined } };
  var { e: { b : a } = { b : 2, a : 1}, d: { e: { b : e = 2} = { b } } } = o;
  assert (a === 2);
  assert (b === undefined);
  assert (c === undefined);
  assert (d === undefined);
  assert (e === 2);
}) ();


(function () {
  var a,b,c,d,e;
  var o = { a : [{ b : 2 ,}, d], e : 5 };

  var { a: [{b, c  = 3}, d = 4], e } = o;
  assert (a === undefined);
  assert (b === 2);
  assert (c === 3);
  assert (d === 4);
  assert (e === 5);
}) ();


(function () {
  var {a} = {a : 1}, {b} = {b : 2};

  assert (a === 1);
  assert (b === 2);
}) ();


(function () {
  const {a} = {a : 1};
  eval();

  assert (a === 1);
}) ();


(function () {
  let {a} = {a : 1};
  eval();

  assert (a === 1);
}) ();


(function () {
  var a = 6;
  ({"a": ((a)) } = {a : 7});
  assert (a === 7);
}) ();

(function () {
  var o = {};

  ({ a : o.c } = { get a() { return 5.2 }})

  assert(o.c == 5.2);
}) ();

try {
  eval ("var a = 0; -{a} = {a:1}");
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}

var abruptObj = Object.defineProperty({}, 'a', {
  get() { throw 5.2; }
});

try {
  const { a } = abruptObj;
  assert (false);
} catch (e) {
  assert (e === 5.2);
}

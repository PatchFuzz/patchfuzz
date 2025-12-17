function print(f, msg) {
  try {
    f();
    print(0, 1);
  } catch (e) {
    print(e instanceof SyntaxError, true);
    print(e.message.endsWith(msg), true);
  }
}

print(() => {
  Reflect.parse("var break;");
}, "missing variable name, got keyword 'break'");
print(() => {
  Reflect.parse("var case;");
}, "missing variable name, got keyword 'case'");
print(() => {
  Reflect.parse("var catch;");
}, "missing variable name, got keyword 'catch'");
print(() => {
  Reflect.parse("var class;");
}, "missing variable name, got keyword 'class'");
print(() => {
  Reflect.parse("var const;");
}, "missing variable name, got keyword 'const'");
print(() => {
  Reflect.parse("var continue;");
}, "missing variable name, got keyword 'continue'");
print(() => {
  Reflect.parse("var debugger;");
}, "missing variable name, got keyword 'debugger'");
print(() => {
  Reflect.parse("var default;");
}, "missing variable name, got keyword 'default'");
print(() => {
  Reflect.parse("var delete;");
}, "missing variable name, got keyword 'delete'");
print(() => {
  Reflect.parse("var do;");
}, "missing variable name, got keyword 'do'");
print(() => {
  Reflect.parse("var else;");
}, "missing variable name, got keyword 'else'");
print(() => {
  Reflect.parse("var enum;");
}, "missing variable name, got reserved word 'enum'");
print(() => {
  Reflect.parse("var export;");
}, "missing variable name, got keyword 'export'");
print(() => {
  Reflect.parse("var extends;");
}, "missing variable name, got keyword 'extends'");
print(() => {
  Reflect.parse("var false;");
}, "missing variable name, got boolean literal 'false'");
print(() => {
  Reflect.parse("var finally;");
}, "missing variable name, got keyword 'finally'");
print(() => {
  Reflect.parse("var for;");
}, "missing variable name, got keyword 'for'");
print(() => {
  Reflect.parse("var function;");
}, "missing variable name, got keyword 'function'");
print(() => {
  Reflect.parse("var if;");
}, "missing variable name, got keyword 'if'");
print(() => {
  Reflect.parse("var import;");
}, "missing variable name, got keyword 'import'");
print(() => {
  Reflect.parse("var in;");
}, "missing variable name, got keyword 'in'");
print(() => {
  Reflect.parse("var instanceof;");
}, "missing variable name, got keyword 'instanceof'");
print(() => {
  Reflect.parse("var new;");
}, "missing variable name, got keyword 'new'");
print(() => {
  Reflect.parse("var null;");
}, "missing variable name, got null literal");
print(() => {
  Reflect.parse("var return;");
}, "missing variable name, got keyword 'return'");
print(() => {
  Reflect.parse("var super;");
}, "missing variable name, got keyword 'super'");
print(() => {
  Reflect.parse("var switch;");
}, "missing variable name, got keyword 'switch'");
print(() => {
  Reflect.parse("var this;");
}, "missing variable name, got keyword 'this'");
print(() => {
  Reflect.parse("var throw;");
}, "missing variable name, got keyword 'throw'");
print(() => {
  Reflect.parse("var true;");
}, "missing variable name, got boolean literal 'true'");
print(() => {
  Reflect.parse("var try;");
}, "missing variable name, got keyword 'try'");
print(() => {
  Reflect.parse("var typeof;");
}, "missing variable name, got keyword 'typeof'");
print(() => {
  Reflect.parse("var var;");
}, "missing variable name, got keyword 'var'");
print(() => {
  Reflect.parse("var void;");
}, "missing variable name, got keyword 'void'");
print(() => {
  Reflect.parse("var while;");
}, "missing variable name, got keyword 'while'");
print(() => {
  Reflect.parse("var with;");
}, "missing variable name, got keyword 'with'");
print(() => {
  Reflect.parse("var;");
}, "missing variable name, got ';'");
print(() => {
  Reflect.parse("var a, , b;");
}, "missing variable name, got ','");

print(() => {
  Reflect.parse("for (var else of arr) {}");
}, "missing variable name, got keyword 'else'");


var o = { a: 10 };
print(() => {
  Reflect.parse("var {a: /a/} = o;");
}, "missing variable name, got regular expression literal");
print(() => {
  Reflect.parse("var {a:} = o;");
}, "missing variable name, got '}'");
print(() => {
  Reflect.parse("var {a:1} = o;");
}, "missing variable name, got numeric literal");
print(() => {
  Reflect.parse("var {a:'a'} = o;");
}, "missing variable name, got string literal");
print(() => {
  Reflect.parse("var {a: , b} = o;");
}, "missing variable name, got ','");
print(() => {
  Reflect.parse("var {a: `template`} = o;");
}, "missing variable name, got template literal");
print(() => {
  Reflect.parse("var {a: ()=>10} = o;");
}, "missing variable name, got '('");
print(() => {
  Reflect.parse("var {a: !true} = o;");
}, "missing variable name, got '!'");
print(() => {
  Reflect.parse("var [/a/] = [];");
}, "missing variable name, got '/'");
print(() => {
  Reflect.parse("var [1] = [];");
}, "missing variable name, got numeric literal");
print(() => {
  Reflect.parse("var [, 1] = [];");
}, "missing variable name, got numeric literal");
print(() => {
  Reflect.parse("var {a: [{b: 'str'}]} = o;");
}, "missing variable name, got string literal");
print(() => {
  Reflect.parse("var {a: 10n} = o;");
}, "missing variable name, got bigint literal");
print(() => {
  Reflect.parse("var { [10]: 10 } = o;");
}, "missing variable name, got numeric literal");
print(() => {
  Reflect.parse("var {...42} = o;");
}, "missing variable name, got numeric literal");

print(() => {
  Reflect.parse("var { [propName]: } = o;");
}, "missing variable name, got '}'");

print(() => {
  Reflect.parse("var {f(): x = 10} = 0");
}, "missing variable name, got identifier");

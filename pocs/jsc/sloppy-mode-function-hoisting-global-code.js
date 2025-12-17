function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}


{
  const MY_CONST = 1e6;
  function foo1() { return MY_CONST; }
  print(foo1() === MY_CONST);
}
print(foo1() === 1e6);


try {
    throw new Error();
} catch ({foo3}) {
    { function foo3() {} }
}
print(!globalThis.hasOwnProperty("foo3"));


with ({foo4: 4}) {
  function foo5() { return foo4; }
  print(foo5() === 4);
}
print(foo5() === 4);


with({}) {
  let foo6 = 6;
  function foo7() { return foo6; }
  print(foo7() === foo6);
}
print(foo7() === 6);


let foo8 = 8;
{ function foo8 () {} }
print(foo8 === 8);
print(!globalThis.hasOwnProperty("foo8"));


print(foo10 === undefined);
{
    print(foo10() === 1);
    function foo10() { return 1; }
    print(foo10() === 1);
}
print(foo10() === 1);
{
    let foo10 = 1;

    {
        print(foo10() === 2);
        function foo10() { return 2; }
        print(foo10() === 2);
    }
}
print(foo10() === 1);


print(foo11 === undefined);
{
    print(foo11() === 1);
    function foo11() { return 1; }
    print(foo11() === 1);
}
print(foo11() === 1);
{
    {{{
        print(foo11() === 2);
        function foo11() { return 2; }
        print(foo11() === 2);
    }}}
    let foo11 = 1;
}
print(foo11() === 1);


print(foo12 === undefined);
const err12 = new Error();
try {
    print(foo12() === 1);
    function foo12() { return 1; }
    throw err12;
} catch (foo12) {
    print(foo12 === err12);
    {
        print(foo12() === 2);
        function foo12() { return 2; }
        print(foo12() === 2);
    }
    print(foo12 === err12);
}
print(foo12() === 2);


print(foo13 === undefined);
const err13 = new Error();
err13.foo13 = err13;
try {
    print(foo13() === 1);
    function foo13() { return 1; }
    throw err13;
} catch ({foo13}) {
    print(foo13 === err13);
    {
        print(foo13() === 2);
        function foo13() { return 2; }
        print(foo13() === 2);
    }
    print(foo13 === err13);
}
print(foo13() === 1);


print(foo14 === undefined);
const err14 = new Error();
err14.foo14 = err14;
try {
    print(foo14() === 1);
    function foo14() { return 1; }
    throw err14;
} catch (foo14) {
    print(foo14 === err14);
    {
        {{
            print(foo14() === 2);
            function foo14() { return 2; }
            print(foo14() === 2);
        }}
        const foo14 = 1;
    }
    print(foo14 === err14);
}
print(foo14() === 1);


if (true) { { function foo15() {} } } let foo15 = 15;
print(foo15 === 15);


if (true) { function foo16() {} } let foo16 = 16;
print(foo16 === 16);


{ if (true) function foo17() {} } let foo17 = 17;
print(foo17 === 17);


print(foo18 === undefined);
{
    print(foo18() === 1);
    function foo18() { return 1; }
    print(foo18() === 1);
    {
        print(foo18() === 2);
        function foo18() { return 2; }
        print(foo18() === 2);
    }
}
print(foo18() === 1);

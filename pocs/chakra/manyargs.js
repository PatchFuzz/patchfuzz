let str = `(function module() { "use asm";function foo(`;

const totalArgs = 550
for (let i = 0; i < totalArgs; ++i)
{
    str += `arg${i},`;
}
str += `arg${totalArgs}){`;

for (let i = 0; i <= totalArgs; ++i)
{
    str += `arg${i}=+arg${i};`;
}
str += "return 10;}function bar(){return foo(";
for (let i = 0; i < totalArgs; ++i)
{
    str += "0.0,";
}
str += "1.0)|0;}"
str += "return bar})()()";

const result = eval(str);
print(result == 10 ? "Pass" : `Fail: ${result}`);
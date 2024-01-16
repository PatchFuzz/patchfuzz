







function checkObject(object)
{
    if (object.prototype.hasOwnProperty('toString'))
    {
        throw new Error(`${object.name}.prototype should not have own property 'toString'`);
    }
    if(object.prototype.toString !== Error.prototype.toString)
    {
        throw new Error(`${object.name}.prototype.toString should === Error.prototype.toString`);
    }
}

checkObject(EvalError);
checkObject(RangeError);
checkObject(ReferenceError);
checkObject(SyntaxError);
checkObject(URIError);

if (typeof WebAssembly !== 'undefined')
{
  checkObject(WebAssembly.CompileError);
  checkObject(WebAssembly.LinkError);
  checkObject(WebAssembly.RuntimeError);
}

print('pass');

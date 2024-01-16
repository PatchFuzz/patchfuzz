



function setupFunc(inFunc)
{
    var result = inFunc.bind(inFunc, "one");
    return result;
}

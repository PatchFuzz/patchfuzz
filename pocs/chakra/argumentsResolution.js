function generateTestFunctionAndCall(
    functionTypeAndName,            
    parameterArguments,             
    nestedFunctionType,             
    varDeclarationArgumentsType,    
    callsEval)                      
{
    var typeMap =
    {
        "function": "function",
        "number": "parameter",
        "string": "var",
        "object": "arguments"
    };

    
    
    
    
    
    
    
    
    
    
    
    

    var functionCode = "";
    switch (functionTypeAndName)
    {
        case 2:
        case 3:
            functionCode += "(";
    }
    functionCode += "function";
    var functionName = "";
    switch (functionTypeAndName)
    {
        case 0:
            functionName = "foo";
            break;
        case 1:
        case 3:
            functionName = "arguments";
    }
    functionCode += " " + functionName + "(";

    if (parameterArguments)
        functionCode += "arguments";
    functionCode += "){";

    if (callsEval)
        functionCode += 'eval("");';

    switch (nestedFunctionType)
    {
        case 1:
            functionCode += "function arguments(){}";
            break;
        case 2:
            functionCode += "(function arguments(){});";
    }

    switch (varDeclarationArgumentsType)
    {
        case 1:
        case 2:
            functionCode += "var arguments";
            if (varDeclarationArgumentsType === 2)
                functionCode += '="hi"';
            functionCode += ";";
    }

    functionCode += "writeLine(typeMap[typeof(arguments)]);}";
    switch (functionTypeAndName)
    {
        case 0:
        case 1:
            functionCode += functionName;
            break;
        case 2:
        case 3:
            functionCode += ")";
    }
    functionCode += "(1);";

    writeLine(functionCode);
    eval("safeCall(function(){" + functionCode + "});");
}

var booleans = [false, true];
for (var functionTypeAndName = 0; functionTypeAndName <= 3; ++functionTypeAndName)
{
    for (var parameterArgumentsIndex in booleans)
    {
        for (var nestedFunctionType = 0; nestedFunctionType <= 2; ++nestedFunctionType)
        {
            for (var varDeclarationArgumentsType = 0; varDeclarationArgumentsType <= 2; ++varDeclarationArgumentsType)
            {
                for (var callsEvalIndex in booleans)
                {
                    var parameterArguments = booleans[parameterArgumentsIndex];
                    var callsEval = booleans[callsEvalIndex];

                    generateTestFunctionAndCall(
                        functionTypeAndName,
                        parameterArguments,
                        nestedFunctionType,
                        varDeclarationArgumentsType,
                        callsEval);
                }
            }
        }
    }
}



function writeLine(str)
{
    print("" + str);
}

function safeCall(func)
{
    try
    {
        return func();
    }
    catch (ex)
    {
        writeLine(ex.name + ": " + ex.message);
    }
}







import {throwError} from "moduleThrowAnError.js";

try
{
    throwError();
}
catch(e)
{
    let index = e.stack.indexOf("moduleThrowAnError.js");
    if(index == -1)
    {
        WScript.Echo("Fail - url not in stack for module error");
    }
    else
    {
        WScript.Echo("Pass");
    }
}

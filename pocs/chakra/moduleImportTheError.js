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
        print("Fail - url not in stack for module error");
    }
    else
    {
        print("Pass");
    }
}

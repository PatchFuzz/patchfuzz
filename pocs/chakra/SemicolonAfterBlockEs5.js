function write(a) {
    if (print == undefined) {
        document.write(a);
        document.write("</br>");
    }
    else
        print(a)
}

try
{

eval("if(true){};else{}");
}
catch(e)
{
write("'if(true){};else{}' compile failure in ES5" + e)
}
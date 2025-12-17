var createDOMJITCheckJSCastObject = print;

function calling(obj)
{
    return obj.func();
}
noInline(calling);

for (var i = 0; i < testLoopCount; ++i)
    calling(createDOMJITCheckJSCastObject());

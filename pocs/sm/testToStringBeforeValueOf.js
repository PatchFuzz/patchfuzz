function testToStringBeforeValueOf()
{
    var o = {toString: function() { return "s"; }, valueOf: function() { return "v"; } };
    var a = [];
    for (var i = 0; i < 10; i++)
        a.push(String(o));
    return a.join(",");
}
print(testToStringBeforeValueOf(), "s,s,s,s,s,s,s,s,s,s");

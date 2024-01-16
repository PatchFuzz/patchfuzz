






function GetJSONString(prefix, count)
{
    var buffer = [];    
    for (var i = 0; i < count; i++) {
        buffer.push('"' + prefix + i + '": true');
    }

    return "{ " + buffer.join(',') + " }";
}

var string1 = GetJSONString("prop", 100);
var string2 = GetJSONString("drop", 550);


var object1 = JSON.parse(string1);


object1 = null;



var k = 0;
var object2 = JSON.parse(string2, function(key, value) { return k++; });

WScript.Echo("pass");
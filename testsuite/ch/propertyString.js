




function propCacheTest()
{
   var obj = {};
   var matches = "aabccddeeffaaggaabbaabaabaab".match(/((aa))/);
   for(var str in matches)
   { 
      if(obj[matches[str]] !== undefined)
      { 
          WScript.Echo("propertyFound");
      }
   }
   return matches;
}

var props = propCacheTest();
for (var i = 0; i < props.length; i++)
{
    WScript.Echo(props[i]);
}
CollectGarbage();
CollectGarbage();
CollectGarbage();
props = propCacheTest();

for (var i = 0; i < props.length; i++)
{
    WScript.Echo(props[i]);
}


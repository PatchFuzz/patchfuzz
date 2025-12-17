function propCacheTest()
{
   var obj = {};
   var matches = "aabccddeeffaaggaabbaabaabaab".match(/((aa))/);
   for(var str in matches)
   { 
      if(obj[matches[str]] !== undefined)
      { 
          print("propertyFound");
      }
   }
   return matches;
}

var props = propCacheTest();
for (var i = 0; i < props.length; i++)
{
    print(props[i]);
}
CollectGarbage();
CollectGarbage();
CollectGarbage();
props = propCacheTest();

for (var i = 0; i < props.length; i++)
{
    print(props[i]);
}


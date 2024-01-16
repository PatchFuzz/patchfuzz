function testInt32ToId()
{
  
  
  var obj = { "-1073741828": 17 };
  var index = -1073741819;
  var a = [];
  for (var i = 0; i < 10; i++)
  {
    a.push(index in obj);
    index--;
  }

  
  
  
  
  
  
  
  var obj2 = { 0: 17 };
  var b = [];
  var index = -(1 << 28);
  for (var i = 0; i < 10; i++)
  {
    b.push(index in obj2);
    index = index - (1 << 28);
  }

  return a.join(",") + b.join(",");
}

assertEq(testInt32ToId(),   
	 "false,false,false,false,false,false,false,false,false,true" +
	 "false,false,false,false,false,false,false,false,false,false");

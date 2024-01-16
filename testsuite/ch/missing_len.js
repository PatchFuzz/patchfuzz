












function test2(){
  var ary = new Array(10);
  var d = 1;
  ary[0] = 1;
  ary[1] = 1;
  ary[2] = 1;
  ary[3] = 1;
  ary[4] = 1;
  ary[5] = 1;
  
  function v292101()
  {
    Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){ return 30;}});
    
    var _obj = new Object()
    _obj.x = ((d ? ary.length : ary.length) ? ary[(4)] : 1);
    WScript.Echo("_obj.x = " + _obj.x);
  }
  
  v292101();
  v292101();
};


test2();


test2();



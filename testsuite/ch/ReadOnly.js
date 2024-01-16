











var Failed = 0;

function FAILED()
{
    Failed++;
    WScript.Echo("FAILED");
}

function test0(){
  var obj0 = {};
  var func1 = function(){
    (obj0.prop0 /=NaN);
    return Object.create(obj0);
  }

  obj0.prop0 = 1;
  obj0.prop1 = {prop2: ( Object.defineProperty(obj0, 'prop0', {writable: false}) )};
  (new func1()).prop0;
  if (obj0.prop0 !== 1) FAILED();
  func1();
  if (obj0.prop0 !== 1) FAILED();
};

test0();


test0();

test0();

if (!Failed)
{
    WScript.Echo("Passed");
}

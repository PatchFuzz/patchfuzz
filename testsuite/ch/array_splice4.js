





var echo=WScript.Echo

function func2()
{}


function func()
{
    e="div".match(func2());
echo("e = " + e + " ; e.length = " + e.length);
    e.length=58;
echo("e = " + e + " ; e.length = " + e.length);
    e.splice(1);
echo("e = " + e + " ; e.length = " + e.length);
}


function func_test2()
{
    e="div".match(func2());
echo("e = " + e + " ; e.length = " + e.length);
    e.length=58;
echo("e = " + e + " ; e.length = " + e.length);
    e.splice(1,17);
echo("e = " + e + " ; e.length = " + e.length);
}

function start()
{
  echo ("start- func()");
  func();
  echo ("start- func_test2()");
  func_test2();
  echo ("start- done");
}

start();

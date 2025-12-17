function foo0(o,i)
{
    if (o==10 && i++,o)
    {
    }
    else
    {
        print("FAILED");
    }
}
foo0(9, 0);







function foo1() {
    var o = { p: 0 };
    var a = 0;
    for(var i = 0; i < 2; ++i) {
        a = 1;
        if(o.p && 1 || (a /= 2))
            break;
    }
}
foo1();
foo1();

function foo2(){
  var ary = new Array(10);
  var c = -1;
  var e = 1;
  var g = 1;
  ary[ary.length-1] = 1;
  ary.length = 100;
  g =((e < c)||(g < c));
  if(g)
        c=((e < c));
  c =((e < c)) + g;
  ary[ary.length-1];
};

foo2();
foo2();
foo2();

print("Passed");

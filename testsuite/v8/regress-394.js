




























function setx(){
  x=1;
}

function getx(){
  return x;
}

setx()
setx()
this.__defineSetter__('x',function(){});
this.__defineGetter__('x',function(){return 2;});
setx()
assertEquals(2, x);

assertEquals(2, getx());
assertEquals(2, getx());
assertEquals(2, getx());

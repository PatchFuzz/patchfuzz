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
print(2, x);

print(2, getx());
print(2, getx());
print(2, getx());

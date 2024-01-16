














Array.prototype.equals = function (array) {
  if (this.length != array.length)
    return false;

  for (var i = 0; i < this.length; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i]))
        return false;
      }
      else if (this[i] != array[i]) {
        return false;
    }
  }

  return true;
}

function longDenseArray(){
        var a = [0];
        for(var i = 0; i < 60; i++){
                a[i] = i;
        }
        return a;
}

function shorten(){
        currArray.length = 20;
        return 1;
}

var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,,,,,,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var currArray = longDenseArray();
currArray.copyWithin(25, {valueOf: shorten})
assert (currArray.length == 44)
assert (currArray.equals (array))






  
  function AsmModule() {
    "use asm";      
    var x1 = 10;
    function f3(x,y){
        x = x|0;
        y = +y;
        var m = 1000;
        var n = 10;
        var z = 11;

       for( m = 0; (m|0) < 50 ; m = (m+1)|0)
        {
            x = (x+1)|0
            if( (x|0) > 10)
            {
                for( n = 0; (n|0) < 100 ; n = (n+1)|0)
                {
                    if((n|0) > 50)
                        return (x + z)|0;
                    x = (x+1)|0;
                    z = (z+1)|0;
                }
            }            
        }
        return (x + z)|0;
    }
    
    return f3
}

var f3 = AsmModule();
print(f3  (1,1.5));
print(f3  (1,1.5));

let asmHeap = new ArrayBuffer(1 << 20);
let m = function (stdlib, foreign, heap) {
  'use asm';
  function f(i0) {
    i0 = i0 | 0;
    return !i0;
  }
  return f;
}({}, {}, asmHeap);
print(m());
print(m());

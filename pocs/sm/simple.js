if (getJitCompilerOptions()["ion.warmup.trigger"] != 30)
  setJitCompilerOption("ion.warmup.trigger", 30);
if (getJitCompilerOptions()["baseline.warmup.trigger"] != 10)
  setJitCompilerOption("baseline.warmup.trigger", 10);


function checkLcov(fun) {
  var keys = [ "TN", "SF", "FN", "FNDA", "FNF", "FNH", "BRDA", "BRF", "BRH", "DA", "LF", "LH" ];
  function startsWithKey(s) {
    for (k of keys) {
      if (s.startsWith(k))
        return true;
    }
    return false;
  };

  
  var source = fun.toString();
  source = source.slice(source.indexOf('{') + 1, source.lastIndexOf('}'));

  
  
  var lcovRef = [];
  var currLine = 0;
  var currFun = "<badfunction>";
  for (var line of source.split('\n')) {
    currLine++;
    for (var comment of line.split("
      if (!startsWithKey(comment))
        continue;
      comment = comment.trim();
      if (comment.startsWith("FN:"))
        currFun = comment.split(',')[1];
      comment = comment.replace('$', currLine);
      comment = comment.replace('%', currFun);
      lcovRef.push(comment);
    }
  }

  
  
  
  var g = newGlobal();
  g.eval(source);
  var lcovResRaw = getLcovInfo(g);

  
  var lcovRes = lcovResRaw.split('\n');
  for (ref of lcovRef) {
    if (lcovRes.indexOf(ref) == -1) {
      print("Cannot find `" + ref + "` in the following Lcov result:\n", lcovResRaw);
      print("In the following source:\n", source);
      print(true, false);
    }
  }
}

checkLcov(function () { 
  ",".split(','); 
  
  
  
  
});

checkLcov(function () { 
  function f() {    
    ",".split(','); 
  }
  ",".split(',');   
  
  
  
  
});

checkLcov(function () { 
  function f() {    
    ",".split(','); 
  }
  f();              
  
  
  
  
});

checkLcov(function () { ','.split(','); 
  
  
  
  
});

checkLcov(function () { function f() { ','.split(','); } 
  f(); 
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  if (l.length == 3)      
    l.push('');           
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  if (l.length == 2)      
    l.push('');           
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  if (l.length == 3)      
    l.push('');           
  else
    l.pop();              
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  if (l.length == 2)      
    l.push('');           
  else
    l.pop();              
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  if (l.length == 2)      
    l.push('');           
  else {
    if (l.length == 1)    
      l.pop();            
  }
  
  
  
  
  
  
});

checkLcov(function () { 
  function f(i) { 
    var x = 0;    
    while (i--) { 
                  
      x += i;     
      x = x / 2;  
    }
    return x;     
    
    
  }

  f(5);           
  f(5);           
  
  
});

checkLcov(function () { 
  try {                     
    var l = ",".split(','); 
    if (l.length == 2) {    
      l.push('');           
      throw l;              
    }
    l.pop();                
  } catch (x) {             
    x.pop();                
  }
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(',');   
  try {                     
    try {                   
      if (l.length == 2) {  
        l.push('');         
        throw l;            
      }
      l.pop();              
    } finally {             
      l.pop();              
    }
  } catch (x) {             
  }
  
  
  
  
  
  
});

checkLcov(function () { 
  function f() {            
    throw 1;                
    f();                    
  }
  var l = ",".split(',');   
  try {                     
    f();                    
    f();                    
  } catch (x) {             
  }
  
  
  
  
  
  
});


checkLcov(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 0:
      l.push('0');        
      break;
    case 1:
      l.push('1');        
      break;
    case 2:
      l.push('2');        
      break;
    case 3:
      l.push('3');        
      break;
  }
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 0:
      l.push('0');        
    case 1:
      l.push('1');        
    case 2:
      l.push('2');        
    case 3:
      l.push('3');        
  }
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
                          
  switch (l.length) {     
    case 5:
      l.push('5');        
    case 4:
      l.push('4');        
    case 3:
      l.push('3');        
    case 2:
      l.push('2');        
  }
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 2:
      l.push('2');        
    case 5:
      l.push('5');        
  }
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 3:
      l.push('1');        
    case 5:
      l.push('5');        
  }
  l.pop();                
  
  
  
  
  
  
});



checkLcov(function () { 
  function f(a) {         
    return a;             
  }
  var l = ",".split(','); 
  switch (l.length) {     
    case f(-42):          
      l.push('1');        
    case f(51):           
      l.push('5');        
  }
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 0:
    case 1:
      l.push('0');        
      l.push('1');        
    case 2:
      l.push('2');        
    case 3:
      l.push('3');        
  }
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 0:
      l.push('0');        
    case 1:
      l.push('1');        
    case 2:
    case 3:
      l.push('2');        
      l.push('3');        
  }
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 0:
      l.push('0');        
    case 1:
    default:
      l.push('1');        
    case 2:
      l.push('2');        
    case 3:
      l.push('3');        
  }
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 0:
      l.push('0');        
    case 1:
      l.push('1');        
    default:
    case 2:
      l.push('2');        
    case 3:
      l.push('3');        
  }
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 0:
      l.push('0');        
    case 1:
      l.push('1');        
    default:
      l.push('default');  
    case 2:
      l.push('2');        
    case 3:
      l.push('3');        
  }
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 0:
      l.push('0');        
    case 1:
      l.push('1');        
    default:
      l.push('2');        
    case 3:
      l.push('3');        
  }
  l.pop();                
  
  
  
  
  
  
});

checkLcov(function () { 
  var l = ','.split(','); 
  if (l.length === 45) {  
    switch (l[0]) {       
      case ',':
        l.push('0');      
      default:
        l.push('1');      
    }
  }
  l.pop();                
  
  
  
  
  
  
});





{
    checkLcov(function () { 
        function f() { return 0; } var l = f(); 
        
        
        
        
    });

    
    checkLcov(function () { 
        function f() { return 0; } function g() { return 1; } 
        var v = f() + g(); 
        
        
        
        
    });

    
    checkLcov(function () { 
        if (1 === 2)  
            throw "0 hits here"; function f() { return "1 hit here"; } 
        f();  
        
        
        
        
    });
}



{
  
  checkLcov(function () {
    
    

    var x = function() {};  
    let y = function() {};  

    let z = {
      z_method() { },       
      get z_prop() { },     
    }
  });
}




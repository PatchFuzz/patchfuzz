





if (getJitCompilerOptions()["ion.warmup.trigger"] != 30)
  setJitCompilerOption("ion.warmup.trigger", 30);
if (getJitCompilerOptions()["baseline.warmup.trigger"] != 10)
  setJitCompilerOption("baseline.warmup.trigger", 10);


function checkGetOffsetsCoverage(fun) {
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
  var currFun = [{name: "top-level", braces: 1}];
  for (var line of source.split('\n')) {
    currLine++;

    for (var comment of line.split("
      if (!startsWithKey(comment))
        continue;
      comment = comment.trim();
      if (comment.startsWith("FN:"))
        currFun.push({ name: comment.split(',')[1], braces: 0 });
      var name = currFun[currFun.length - 1].name;
      if (!comment.startsWith("DA:"))
        continue;
      comment = {
        offset: null,
        lineNumber: currLine,
        columnNumber: null,
        count: comment.split(",")[1] | 0,
        script: (name == "top-level" ? undefined : name)
      };
      lcovRef.push(comment);
    }

    var deltaBraces = line.split('{').length - line.split('}').length;
    currFun[currFun.length - 1].braces += deltaBraces;
    if (currFun[currFun.length - 1].braces == 0)
      currFun.pop();
  }

  
  
  var g = newGlobal({newCompartment: true});
  var dbg = Debugger(g);
  dbg.collectCoverageInfo = true;

  var topLevel = null;
  dbg.onNewScript = function (s) {
    topLevel = s;
    dbg.onNewScript = function () {};
  };

  
  g.eval(source);

  var coverageRes = [];
  function collectCoverage(s) {
    var res = s.getOffsetsCoverage();
    if (res == null)
      res = [{
        offset: null,
        lineNumber: null,
        columnNumber: null,
        script: s.displayName,
        count: 0
      }];
    else {
      res.map(function (e) {
        e.script = s.displayName;
        return e;
      });
    }
    coverageRes.push(res);
    s.getChildScripts().forEach(collectCoverage);
  };
  collectCoverage(topLevel);
  coverageRes = [].concat(...coverageRes);

  
  function match(ref) {
    return function (entry) {
      return ref.lineNumber == entry.lineNumber && ref.script == entry.script;
    }
  }
  function ppObj(entry) {
    var str = "{";
    for (var k in entry) {
      if (entry[k] != null)
        str += " '" + k + "': " + entry[k] + ",";
    }
    str += "}";
    return str;
  }
  for (ref of lcovRef) {
    var res = coverageRes.find(match(ref));
    if (!res) {
      
      
      
      var missRef = Object.create(ref);
      missRef.lineNumber = null;
      res = coverageRes.find(match(missRef));
    }

    if (!res || res.count != ref.count) {
      print("Cannot find `" + ppObj(ref) + "` in the following results:\n", coverageRes.map(ppObj).join("\n"));
      print("In the following source:\n", source);
      assertEq(true, false);
    }
  }
}

checkGetOffsetsCoverage(function () { 
  ",".split(','); 
});

checkGetOffsetsCoverage(function () { 
  function f() {    
    ",".split(','); 
  }
  ",".split(',');   
});

checkGetOffsetsCoverage(function () { 
  function f() {    
    ",".split(','); 
  }
  f();              
});

checkGetOffsetsCoverage(function () { ','.split(','); 
});

checkGetOffsetsCoverage(function () { function f() { ','.split(','); } 
  f(); 
});

checkGetOffsetsCoverage(function () { 
  var l = ",".split(','); 
  if (l.length == 3)      
    l.push('');           
  l.pop();                
});

checkGetOffsetsCoverage(function () { 
  var l = ",".split(','); 
  if (l.length == 2)      
    l.push('');           
  l.pop();                
});

checkGetOffsetsCoverage(function () { 
  var l = ",".split(','); 
  if (l.length == 3)      
    l.push('');           
  else
    l.pop();              
});

checkGetOffsetsCoverage(function () { 
  var l = ",".split(','); 
  if (l.length == 2)      
    l.push('');           
  else
    l.pop();              
});

checkGetOffsetsCoverage(function () { 
  var l = ",".split(','); 
  if (l.length == 2)      
    l.push('');           
  else {
    if (l.length == 1)    
      l.pop();            
  }
});

checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
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



checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 2:
      l.push('2');        
    case 5:
      l.push('5');        
  }
  l.pop();                
});

checkGetOffsetsCoverage(function () { 
  var l = ",".split(','); 
  switch (l.length) {     
    case 3:
      l.push('1');        
    case 5:
      l.push('5');        
  }
  l.pop();                
});



checkGetOffsetsCoverage(function () { 
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


checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
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

checkGetOffsetsCoverage(function () { 
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




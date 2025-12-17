var a=true;

try {
    eval('(function(){if(a) { function foo3() {"use strict"; function eval(a) {} }; foo3();}})();');
}
catch(e) {
    print(e.message);
}
try {
    eval('(function(){if(a) { function foo3() { function eval(a) {"use strict";} }; foo3();}})();');
}
catch(e) {
    print(e.message);
}







(function(){ "use strict", delete z; })(); 
(function(){ "invalid" + "use strict"; delete z; })();
(function(){ delete z; "use strict"; delete z; })();
(function(){ 0123; "use strict"; delete z; })();
try {
    eval("(function(eval){ \"use strict\" })();");
} catch (e) {
    WScript.Echo(e);
}
(function(){ "use strict" + "use strict"; delete z; });
(function(){ "use strict", "use strict"; delete z;});

WScript.Echo("Pass");





this.x = 'global x';
WScript.Echo(x);
delete x;
WScript.Echo(this.x);

this.y = 'global y';
WScript.Echo(y);
delete y;
WScript.Echo(this.y);

WScript.LoadScriptFile('letconst_global_shadow_deleted_2.js');






var e = Error('');
e.fileName = e;
e.toSource();
--> Crash with too much recursion in exn_toSource



function myAPI(f) { return f(); }

var contentGlobal = newGlobal({principal: 0x1});
contentGlobal.chrome = this;
contentGlobal.eval("\n" +
		   "function contentTest() { chrome.myAPI(eval.bind(undefined, 'chrome.stack = Error().stack;')) };\n" +
		   "contentTest();");




assertEq(stack, "@eval line 2 > eval:1:16\n" +
                "contentTest@eval:2:33\n" +
                "@eval:3:1\n");

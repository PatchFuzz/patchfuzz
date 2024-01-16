


























var o = ["\u56e7",   
         "\u00e6"];  

assertEquals('["\u56e7","\u00e6"]', JSON.stringify(o));
assertEquals('["\u56e7","\u00e6"]', JSON.stringify(o, null, 0));

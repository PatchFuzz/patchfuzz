





Int8Array; 
var ta = new Int8Array([1]);
ta; 


function callback() {
    return; 
}

ta2 = new Int8Array([1,2]);

ta.every(callback);
ta.filter(callback);
ta.find(callback);
ta.findIndex(callback);
ta.forEach(callback);
ta.map(callback);
ta2.reduce(callback);
ta2.reduceRight(callback);
ta.some(callback);
ta2.sort(callback);

WScript.Echo("PASS");

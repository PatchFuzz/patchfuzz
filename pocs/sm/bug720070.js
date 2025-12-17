var bytes = [0xff, 0xf7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]; 
bytes.reverse(); 
var result = new Float64Array(new Uint8Array(bytes).buffer)[0];


isNaN(result + 0);

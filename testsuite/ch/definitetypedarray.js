




let xxx = new Uint32Array(0x10000);

xxx.slice = Array.prototype.slice;

function jit(arr, index){
	let ut = arr.slice(0,0);   
	for(let i = 0; i < 0x30; i++){
		arr[i] = 0;   
	}
}

for(let i = 0;i < 0x10000; i++){
	jit(xxx, 2);
}

if (xxx[0] === 0)
{
    WScript.Echo('pass');
}


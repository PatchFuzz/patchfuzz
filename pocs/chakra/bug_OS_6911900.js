var ua = new Uint32Array(0x10);
ua.__proto__ = new Array(0xffffffff);
ua.fill(0x41, 0x41414141, 0x41414141 + 1); 
print("passed");

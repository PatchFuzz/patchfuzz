var a = new Uint8Array(1024*1024);
%ArrayBufferDetach(a.buffer);
print(() => new Uint8Array(a));

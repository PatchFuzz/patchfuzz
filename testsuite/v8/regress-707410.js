





var a = new Uint8Array(1024*1024);
%ArrayBufferDetach(a.buffer);
assertThrows(() => new Uint8Array(a));

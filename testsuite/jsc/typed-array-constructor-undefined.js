

if (new Uint8Array(new ArrayBuffer(3), 0, undefined).length != 3)
    throw "undefined length should result in the whole buffer being used";

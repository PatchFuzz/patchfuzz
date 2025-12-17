if (new BigInt64Array(new ArrayBuffer(8), 0, undefined).length != 1)
    throw "undefined length should result in the whole buffer being used";

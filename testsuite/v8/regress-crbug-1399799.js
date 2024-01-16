





const ab = new ArrayBuffer(3000);
const ta = new Uint16Array(ab);

function createOOBTA() {
    const rab = new ArrayBuffer(3000, {"maxByteLength": 4000});
    const ta = new Uint8Array(rab, 0, 3000);
    rab.resize(0);
    return ta;
}

Object.defineProperty(Uint16Array, Symbol.species,
                      { configurable: true, enumerable: true,
                        get: () => { return createOOBTA; }});
assertThrows(() => { ta.slice(); }, TypeError);

function createDetachedTA() {
    const rab = new ArrayBuffer(3000, {"maxByteLength": 4000});
    const ta = new Uint8Array(rab, 0, 3000);
    %ArrayBufferDetach(rab);
    return ta;
}

Object.defineProperty(Uint16Array, Symbol.species,
                      { configurable: true, enumerable: true,
                        get: () => { return createDetachedTA; }});
assertThrows(() => { ta.slice(); }, TypeError);


function createLengthTrackingTA() {
    const rab = new ArrayBuffer(3000, {"maxByteLength": 4000});
    const ta = new Uint16Array(rab, 0);
    return ta;
}

Object.defineProperty(Uint16Array, Symbol.species,
    { configurable: true, enumerable: true,
      get: () => { return createLengthTrackingTA; }});

ta.slice();

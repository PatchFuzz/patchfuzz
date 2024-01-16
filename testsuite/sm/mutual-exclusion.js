














const numWorkers = 4;           
const iterCount = 255;          
const sabLength = 1024;         

const oddResult = (function () {
    var v = 0;
    for ( var j=0 ; j < numWorkers ; j++ )
        v |= (iterCount << (8 * j));
    return v;
})();

const evenResult = 0;

const sab = new SharedArrayBuffer(sabLength);

setSharedObject(sab);

const iab = new Int32Array(sab);

function testRun(limit) {
    console.log("Limit = " + limit);

    
    for ( var i=0 ; i < numWorkers ; i++ ) {
        evalInWorker(`
                     const iab = new Int32Array(getSharedObject());
                     const v = 1 << (8 * ${i});
                     for ( var i=0 ; i < ${limit} ; i++ ) {
                         for ( var k=0 ; k < ${iterCount} ; k++ ) {
                             if (i & 1) {
                                 for ( var j=1 ; j < iab.length ; j++ )
                                     Atomics.sub(iab, j, v);
                             }
                             else {
                                 for ( var j=1 ; j < iab.length ; j++ )
                                     Atomics.add(iab, j, v);
                             }
                         }
                     }
                     Atomics.add(iab, 0, 1);
                     `);
    }

    
    while (Atomics.load(iab, 0) != numWorkers)
        ;
    Atomics.store(iab, 0, 0);

    
    const v = (limit & 1) ? oddResult : evenResult;
    for ( var i=1 ; i < iab.length ; i++ ) {
        assertEq(iab[i], v);
        iab[i] = 0;
    }
}




var then = new Date();
testRun(1);
if (new Date() - then < 20000) {
    testRun(2);
    if (new Date() - then < 30000) {
	testRun(3);
    }
}

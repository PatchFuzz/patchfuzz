
const dv = new DataView(new ArrayBuffer());
for (let i=0; i<1000; i++) {
    new Promise(()=>{
        dv.setUint32(0, 0, y);
        const y = 0;
    });
}

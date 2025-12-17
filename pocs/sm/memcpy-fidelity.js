var target_buf = new SharedArrayBuffer(1024);
var src_buf = new SharedArrayBuffer(1024);







fill(src_buf);


{
    let target = new Uint8Array(target_buf);
    let src = new Uint8Array(src_buf);
    clear(target_buf);
    target.set(src);
    check(target_buf, 0, 1024, 0);
}




{
    let fill = 0x79;
    clear(target_buf, fill);
    let target = new Uint8Array(target_buf, 1, 1022);
    let src = new Uint8Array(src_buf, 1, 1022);
    target.set(src);
    check_fill(target_buf, 0, 1, fill);
    check(target_buf, 1, 1023, 1);
    check_fill(target_buf, 1023, 1024, fill);
}



{
    clear(target_buf);
    let target = new Uint8Array(target_buf, 0, 1023);
    let src = new Uint8Array(src_buf, 1);
    target.set(src);
    check(target_buf, 0, 1023, 1);
    check_zero(target_buf, 1023, 1024);
}









{
    fill(target_buf);
    let target = new Uint8Array(target_buf, 9, 999);
    let src = new Uint8Array(target_buf, 1, 999);
    target.set(src);
    check(target_buf, 9, 1008, 1);
    check(target_buf, 1008, 1024, 1008 & 255);
}



{
    fill(target_buf);
    let target = new Uint8Array(target_buf, 2, 1022);
    let src = new Uint8Array(target_buf, 1, 1022);
    target.set(src);
    check(target_buf, 2, 1024, 1);
}









if (this.getBuildConfiguration && !getBuildConfiguration("debug"))
{
    let t = new Uint8Array(target_buf);
    for (let my_src_buf of [src_buf, target_buf]) {
        for (let size=0; size < 127; size++) {
            for (let src_offs=0; src_offs < 8; src_offs++) {
                for (let target_offs=0; target_offs < 8; target_offs++) {
                    clear(target_buf, Math.random()*255);
                    let target = new Uint8Array(target_buf, target_offs, size);

                    
                    let bias = (Math.random() * 100 % 12) | 0;

                    
                    let src = new Uint8Array(my_src_buf, src_offs, size);
                    for ( let i=0; i < size; i++ )
                        src[i] = i+bias;

                    
                    let below = target_offs > 0 ? t[target_offs - 1] : 0;
                    let above = t[target_offs + size];

                    
                    target.set(src);

                    
                    check(target_buf, target_offs, target_offs + size, bias);
                    if (target_offs > 0)
                        print(t[target_offs-1], below);
                    print(t[target_offs+size], above);
                }
            }
        }
    }
}




function clear(buf, fill) {
    let a = new Uint8Array(buf);
    for ( let i=0; i < a.length; i++ )
        a[i] = fill;
}

function fill(buf) {
    let a = new Uint8Array(buf);
    for ( let i=0; i < a.length; i++ )
        a[i] = i & 255
}

function check(buf, from, to, startingWith) {
    let a = new Uint8Array(buf);
    for ( let i=from; i < to; i++ ) {
        print(a[i], startingWith);
        startingWith = (startingWith + 1) & 255;
    }
}

function check_zero(buf, from, to) {
    check_fill(buf, from, to, 0);
}

function check_fill(buf, from, to, fill) {
    let a = new Uint8Array(buf);
    for ( let i=from; i < to; i++ )
        print(a[i], fill);
}

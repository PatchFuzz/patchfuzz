function testNonCanonicalNan()
{
    const bytes = 128;
    var buf = new ArrayBuffer(bytes);

    
    var ui8arr = new Uint8Array(buf);
    ui8arr.fill(0xff);

    var dblarr = new Float64Array(buf);
    print(dblarr.length, bytes / 8);

    
    for (var i = 0; i < dblarr.length; ++i) {
        var asstr = dblarr[i] + "";
        var asnum = dblarr[i] + 0.0;
        print(asstr, "NaN");
        print(asnum, NaN);
    }

    var fltarr = new Float32Array(buf);
    print(fltarr.length, bytes / 4);

    
    for (var i = 0; i < fltarr.length; ++i) {
        var asstr = fltarr[i] + "";
        var asnum = fltarr[i] + 0.0;
        print(asstr, "NaN");
        print(asnum, NaN);
    }

    var flt16arr = new Float16Array(buf);
    print(flt16arr.length, bytes / 2);

    
    for (var i = 0; i < flt16arr.length; ++i) {
        var asstr = flt16arr[i] + "";
        var asnum = flt16arr[i] + 0.0;
        print(asstr, "NaN");
        print(asnum, NaN);
    }
}

testNonCanonicalNan();

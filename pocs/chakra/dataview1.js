if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
    print("util.js");
}

function test1() {
    var intArray = Array(0x100); 
    var arrayBuffer = (new Uint32Array(intArray)).buffer;
    var viewStart = 0;
    var viewLength = arrayBuffer.byteLength;
    var view = new DataView(arrayBuffer, viewStart, viewLength);
    for (var i = 0; i <= 8; i++) {
        try {
            print('view.getUint32(-' + i + '): 0x' + view.getUint32(-i).toString(16));
        } catch (e) {
            print(e.message);
        }
    }
    for (var i = 0; i <= 8; i++) {
        try {
            print('view.setUint32(-' + i + '): 0x' + view.setUint32(-i, 10).toString(16));
        } catch (e) {
            print(e.message);
        }
    }
}

function test2() {
    var arrayBuffer = new ArrayBuffer(10);

    try{
        var view1 = new DataView(arrayBuffer, undefined);
    } catch (e) {
        if (e instanceof RangeError) {
            if(e.message !== "DataView constructor argument byteOffset is invalid"){
                print('FAIL');
            }
        } else {
            print('FAIL');
        }
    }

    try{
        var view2 = new DataView(arrayBuffer, 1.5);
    } catch (e) {
        if (e instanceof RangeError) {
            if (e.message !== "DataView constructor argument byteOffset is invalid") {
                print('FAIL');
            }
        } else {
            print('FAIL');
        }
    }
    print('PASS');
}

function test3() {
    var v1 = new DataView(new ArrayBuffer(), 0, 0);
    var v2 = new DataView(new ArrayBuffer(1), 1, 0);
}

function test4() {
    var arrayBuffer = (new Uint32Array([0, 1, 2, 3])).buffer;
    var view1 = new DataView(arrayBuffer);
    var view2 = new DataView(arrayBuffer, 0);
    var view3 = new DataView(arrayBuffer, 0, undefined);
    if ((view1.byteLength === view2.byteLength) && (view2.byteLength === view3.byteLength)) {
        print('PASS');
        for (var i = 0; i < 4; i++) {
            if ((view1.getUint32(i) === view2.getUint32(i)) && (view2.getUint32(i) === view3.getUint32(i))) {
                print('PASS');
            } else {
                print('FAIL');
                print(view1.getUint32(i));
                print(view2.getUint32(i));
                print(view3.getUint32(i));
            }
        }
    } else {
        print('FAIL');
        print(view1.byteLength);
        print(view2.byteLength);
        print(view3.byteLength);
    }
}

function test5() {
    print(
        function () { var dv = new DataView(new ArrayBuffer(0x100000), 1, 0xffffffff); },
        RangeError,
        "DataView constructor argument byteLength is invalid");
}

function TestDataViewConstructorWithOffset()
{
    var arrayBuffer = new ArrayBuffer(16);
    print(arrayBuffer.byteLength);
    
    var dataView2 = new DataView(arrayBuffer, 4);
    print(dataView2.byteLength);
}

function TestDataViewConstructorWithOffsetAndLength()
{
    var arrayBuffer = new ArrayBuffer(16);
    print(arrayBuffer.byteLength);
    
    var dataView3 = new DataView(arrayBuffer, 8, 2);
    print(dataView3.byteLength);
}

function TestDataViewConstructorCalledWithoutNew()
{
    var arrayBuffer = new ArrayBuffer(16);
    var dataView4 = DataView(arrayBuffer, 8, 2);
}

function TestDataViewConstructorCalledWithoutArguments()
{
    var dataView5 = new DataView();
}

function TestDataViewCostructorCalledWithJavascriptArray()
{
    var normalArray = [1, 2, 3, 4, 5];
    var dataView6 = new DataView(normalArray);
}

function TestDataViewCostructorOffsetBeyondArrayBufferByteLength()
{
    var arrayBuffer = new ArrayBuffer(16);
    var dataView7 = new DataView(arrayBuffer, 17);
}

function TestDataViewCostructorOffsetPlusLengthBeyondArrayBufferByteLength()
{
    var arrayBuffer = new ArrayBuffer(16);
    var dataView7 = new DataView(arrayBuffer, 14, 16);
}

test1();
test2();
test3();
test4();
test5();

TestDataViewConstructorWithOffset();
TestDataViewConstructorWithOffsetAndLength();
print(TestDataViewConstructorCalledWithoutNew, TypeError, "", "DataView: cannot be called without the new keyword");
print(TestDataViewConstructorCalledWithoutArguments, TypeError, "", "Required argument buffer in DataView method is not specified");
print(TestDataViewCostructorCalledWithJavascriptArray, TypeError, "", "buffer is not an ArrayBuffer");
print(TestDataViewCostructorOffsetBeyondArrayBufferByteLength, RangeError, "", "DataView constructor argument byteOffset is invalid");
print(TestDataViewCostructorOffsetPlusLengthBeyondArrayBufferByteLength, RangeError, "", "DataView constructor argument byteLength is invalid");

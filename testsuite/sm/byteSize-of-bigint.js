












const config = getBuildConfiguration();

const pointerByteSize = config["pointer-byte-size"];
assertEq(pointerByteSize === 4 || pointerByteSize === 8, true);

const m32 = pointerByteSize === 4;



const SIZE_OF_BIGINT = 16;


const SIZE_OF_DIGIT = pointerByteSize;


const SIZE_OF_VALUE = 8;


const SIZE_OF_BIGINT_HEADER = 8;

const SIZE_OF_TENURED_BIGINT = SIZE_OF_BIGINT;
const SIZE_OF_NURSERY_BIGINT = SIZE_OF_BIGINT + SIZE_OF_BIGINT_HEADER;

function nurseryDigitSize(length) {
  
  
  if (m32) {
    length += (length & 1);
  }
  return length * SIZE_OF_DIGIT;
}

function mallocDigitSize(length) {
  
  
  if (m32) {
    length += (length & 1);
  }

  
  return 1 << Math.ceil(Math.log2(length * SIZE_OF_DIGIT));
}


assertEq(byteSize(10n), SIZE_OF_TENURED_BIGINT);
assertEq(byteSize(0xffff_ffff_ffff_ffffn), SIZE_OF_TENURED_BIGINT);


assertEq(byteSize(0x1_0000_0000_0000_0000n),
         SIZE_OF_TENURED_BIGINT + mallocDigitSize(m32 ? 3 : 2));
assertEq(byteSize(0x1_0000_0000_0000_0000_0000_0000n),
         SIZE_OF_TENURED_BIGINT + mallocDigitSize(m32 ? 4 : 2));
assertEq(byteSize(0x1_0000_0000_0000_0000_0000_0000_0000_0000n),
         SIZE_OF_TENURED_BIGINT + mallocDigitSize(m32 ? 5 : 3));







{
  const sample_nursery = BigInt(123456789);

  const before = byteSize(sample_nursery);
  gc();
  const after = byteSize(sample_nursery);

  let nursery_disabled = before == after;
  if (nursery_disabled) {
    printErr("nursery BigInts appear to be disabled");
    quit(0);
  }
}



function copyBigInt(bi) {
  var plusOne = bi + 1n;
  return plusOne - 1n;
}


function nByteSize(bi) {
  
  return byteSize(copyBigInt(bi));
}


assertEq(nByteSize(10n), SIZE_OF_NURSERY_BIGINT);
assertEq(nByteSize(0xffff_ffff_ffff_ffffn), SIZE_OF_NURSERY_BIGINT);




assertEq(nByteSize(0x1_0000_0000_0000_0000n),
         SIZE_OF_NURSERY_BIGINT + nurseryDigitSize(m32 ? 3 : 2));
assertEq(nByteSize(0x1_0000_0000_0000_0000_0000_0000n),
         SIZE_OF_NURSERY_BIGINT + nurseryDigitSize(m32 ? 4 : 2));
assertEq(nByteSize(0x1_0000_0000_0000_0000_0000_0000_0000_0000n),
         SIZE_OF_NURSERY_BIGINT + nurseryDigitSize(m32 ? 5 : 3));






assertEq(nByteSize(2n ** (64n * 1000n)),
         SIZE_OF_NURSERY_BIGINT + mallocDigitSize(m32 ? 2002 : 1001));

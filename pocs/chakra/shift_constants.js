var id=0;
function verify(get_actual,get_expected,testid,testdesc)

{

    if(get_actual!=get_expected)
        print(testid+":"+testdesc+"\t"+"failed"+"\n"+"got"+get_actual+"\t for\t"+get_expected)
}



verify(0xffffffff>>>-1, 1, id++,"\"Testing the unsigned right shift with negative count\"")
verify(0xffffffff>>>31, 1, id++,"\"Testing the unsigned right shift by maximum possible digits\"")
verify(0xffffffff>>>32, 4294967295,id++, "\"Testing the unsigned right shift greater than 31 count and testing for &1F\"")
verify(-1>>>1, 2147483647, id++,"\"Testing the unsigned right shift with negative numbers\"")
verify(0xffffffff>>>33, 2147483647, id++,"\"Testing the unsigned right shift by 33 which is ~1\"")



verify(0xffffffff >>-1, -1, id++,"\"Testing Signed Right Shift with negative count\"");
verify(0x7fffffff >>-1, 0,id++, "\"Testing Signed Right Shift with negative count for tagged integer\"");
verify(0x7fffffff >>-2, 1,id++, "\"Testing Signed Right Shift with negative count\"");
verify(0x7fffffff >>32, 2147483647,id++, "\"Testing Signed Right Shift greater than  31\"");
verify(0x7fffffff >>31, 0,id++, "\"Testing Signed Right Shift by 31 for positive number\"");
verify(-1 >>31, -1, id++,"\"Testing Signed Right Shift by 31 for negative number \"");



verify(0xffffffff<<-1,-2147483648, id++, "\"Testing Signed Left Shift with negative count\"");
verify(0x7fffffff<<-1, -2147483648,id++,  "\"Testing Signed Left Shift with negative count for tagged integer\"");
verify(-0x7fffffff<<-1,-2147483648, id++, "\"Testing Signed Left Shift with negative count\"");
verify(0x7fffffff<<32,  2147483647,id++,  "\"Testing Signed Left Shift greater than  31\"");
verify(0x7fffffff<<31, -2147483648,id++,  "\"Testing Signed Left Shift by 31 for positive number\"");
verify(1 <<31, -2147483648, id++, "\"Testing Signed Left Shift by 31 for 1 \"");
verify(-1 <<31, -2147483648, id++, "\"Testing Signed Left Shift by 31 for negative number \"");


verify((0x7fffffff>>32)|1, 2147483647, id++, "\" Testing whether the shift operation does not change the tagged integer to a normal integer for Or \"");
verify((0x7fffffff>>32)^0x2, 2147483645, id++, "\"Testing whether the shift operation does not change the tagged integer to a normal integer for xor\"");

print("pass");

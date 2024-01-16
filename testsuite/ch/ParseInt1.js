





var id=0;
function verify(get_actual,get_expected,id,testdesc)
{
    if(isNaN(get_actual) && isNaN(get_expected))
    {
        return;
    }
    if(get_actual !==get_expected)
            WScript.Echo(id+":"+testdesc+"\t"+"failed Actual:" + get_actual + " Excpected:" + get_expected);
}



verify(parseInt("     123",10),123,id++,"\"Testing WhiteSpace at the begining of the string\"")



verify(parseInt("\t\n\f\r123",10),123,id++,"\"Testing WhiteSpace with escape at the begining of the string\"")



verify(parseInt("\t\n\f\r",10), NaN,id++,"\"Only whitespaces\"")


verify(parseInt("32\032",10), 32,id++,"\"Embedded null\"")



verify(parseInt("123     ",10),123,id++,"\"Testing WhiteSpace at the End of the string\"")



verify(parseInt("123\t\n\f\r",10),123,id++,"\"Testing WhiteSpace with escape at the end of the string\"")



verify(parseInt("12  3",10),12,id++,"\"Testing WhiteSpace in between strings\"")



verify(parseInt("12\n\t\r\f3",10),12,id++,"\"Testing Escape Characters in between of the strings\"")



verify(parseInt("123",null),123,id++,"\"Default Radix Null\"")



verify(parseInt("123",NaN),123,id++,"\"Default Radix NaN\"")



verify(parseInt("123",undefined),123,id++,"\"Default Radix Undefined\"")



verify(parseInt("123",0),123,id++,"\"Default Radix 0\"")



verify(parseInt("0x19",16),25,id++,"\"Default Radix With 0x String: Basic\"")



verify(parseInt("0xFF",null),255,id++,"\"Default Radix With 0x String: Null\"")



verify(parseInt("0xFF",NaN),255,id++,"\"Default Radix With 0x String:NaN\"")



verify(parseInt("0xFF",undefined),255,id++,"\"Default Radix With 0x String: undefined\"")



verify(parseInt("0xFF",0),255,id++,"\"Default Radix With 0x String: 0\"")



verify(parseInt("0XFF",null),255,id++,"\"Default Radix With 0X String: Null\"")



verify(parseInt("0XFF",NaN),255,id++,"\"Default Radix With 0X String:NaN\"")



verify(parseInt("0XFF",undefined),255,id++,"\"Default Radix With 0X String: undefined\"")



verify(parseInt("0XFF",0),255,id++,"\"Default Radix With 0X String: 0\"")



var x=parseInt("A123",null)

verify(isNaN(x),true,id++,"\"Default Radix:null  Negative Testing Null\"")



var x=parseInt("A123",NaN)

verify(isNaN(x),true,id++,"\"Default Radix Negative Testing NaN\"")



var x=parseInt("A123",undefined)

verify(isNaN(x),true,id++,"\"Default Radix Negative Testing undefined\"")



var x=parseInt("A123",0)

verify(isNaN(x),true,id++,"\"Default Radix Negative Testing 0\"")



var x=parseInt("0xG123",null)

verify(isNaN(x),true,id++,"\"Default Radix with 0x String  Negative Testing Null\"")



var x=parseInt("0xG123",NaN)

verify(isNaN(x),true,id++,"\"Default Radix with 0x String  Negative Testing NaN\"")



var x=parseInt("0xG123",undefined)

verify(isNaN(x),true,id++,"\"Default Radix with 0x String  Negative Testing undefined\"")



var x=parseInt("0xG123",0)

verify(isNaN(x),true,id++,"\"Default Radix with 0x String  Negative Testing 0\"")



var x=parseInt("0XG123",null)

verify(isNaN(x),true,id++,"\"Default Radix with 0X String  Negative Testing Null\"")



var x=parseInt("0XG123",NaN)

verify(isNaN(x),true,id++,"\"Default Radix with 0X String  Negative Testing NaN\"")



var x=parseInt("0XG123",undefined)

verify(isNaN(x),true,id++,"\"Default Radix with 0X String  Negative Testing undefined\"")



var x=parseInt("0XG123",0)

verify(isNaN(x),true,id++,"\"Default Radix with 0X String  Negative Testing 0\"")



verify(parseInt("101",2),5,id++,"\"Radix Testing Limits: Lower Limit 2\"");



verify(parseInt("aAzZ",36),480815,id++,"\"Radix Testing Limits: Upper Limit 36\"");



verify(parseInt("11",+0),11,id++,"\"Radix Testing Limits: +0\"");



verify(parseInt("11",-0),11,id++,"\"Radix Testing Limits: -0\"");



verify(parseInt("11",-0.0),11,id++,"\"Radix Testing Limits: -0.0\"");



verify(parseInt("11",Infinity),11,id++,"\"Radix Testing Limits: Infinity\"");



var x=parseInt("10",1)

verify(isNaN(x),true,id++,"\"Radix Testing Limits check for 1\"")



var x=parseInt("10",-1)

verify(isNaN(x),true,id++,"\"Radix Testing Limits check for -1\"")



var x=parseInt("10",37)

verify(isNaN(x),true,id++,"\"Radix Testing Limits check for 37\"")



verify(parseInt("11","+2"),3,id++,"\"Radix Testing : Non Integer: String \"")



var x=parseInt("10",true)

verify(isNaN(x),true,id++,"\"Radix Testing : Non Integer : Boolean:true is replaced with a 1\"")



verify(parseInt("11",false),11,id++,"\"Radix Testing : Non Integer : Boolean: false is replaced with a 0 \"")



verify(parseInt("A",new Number(16)),10,id++,"\"Radix testing: Constructor-Number \"");



verify(parseInt("A",new String("16")),10,id++,"\"Radix testing: Constructor-String \"");



var obj=36

verify(parseInt("aAzZ",obj.toString()),480815,id++,"\"Radix testing: Variable \"");



function fun()
{
    return "35"
}

verify(parseInt("bY",fun()),419,id++,"\"Radix testing:Function \"");



verify(isNaN(parseInt("",10)),true,id++,"\"String Testing :null\"");



verify(parseInt("4294967296",10),4294967296,id++,"\"String Testing :2^32 \"");



verify(parseInt("-4294967296",10),-4294967296,id++,"\"String Testing :2^32 \"");

verify(parseInt("999999999",10),999999999,id++,"\"Large int :999999999 \"");

verify(parseInt("-FFFFFFFF",16),-0xFFFFFFFF,id++,"\"Max Neg int (Base 16) :FFFFFFFF \"");

verify(parseInt("-0xFFFFFFFF",16),-0xFFFFFFFF,id++,"\"Max Neg int (Base 16) :FFFFFFFF \"");

verify(parseInt("-0xABCDEF",16),-0xabcdef,id++,"\"Base 16 number\"");

verify(parseInt("-0xabcdef",16),-0xabcdef,id++,"\"Base 16 number\"");

verify(parseInt("abcdefghijklm",34), 24661871785383067000,id++,"\" Base 34 number \"");

verify(parseInt("lmnXYZ",36), 1307858363,id++,"\"Base 36 number - fast path \"");

verify(parseInt("lmnXYZabc",36), 61019439797496,id++,"\"Base 36 number - slow path \"");


verify(parseInt("AB",11),10,id++,"\"String Testing: unmatched numbers for radix\"");



verify(parseInt("A+5",11),10,id++,"\"String Testing: Expressions\"");



verify(parseInt("5.67",10),5,id++,"\"String Testing: Floating point numbers\"");



verify(parseInt("00789",008),7,id++,"\"String Testing: Octal Numbers\"");


var strings = [
    { str: "+0x32", start: 0, length: 1, expected: NaN, expectedBase10: NaN },
    { str: "+0x32", start: 0, length: 1, expected: NaN, expectedBase10: NaN },
    { str: "+0x32", start: 0, length: 2, expected: 0, expectedBase10:0  },
    { str: "+0x32", start: 0, length: 3, expected: NaN, expectedBase10: 0 },
    { str: "+0x32", start: 0, length: 4, expected: 3, expectedBase10:0 }
    ];

for(var i =0; i < strings.length; i++)
{
    var current = strings[i];
    var substr = current.str.substring(current.start, current.length);
    verify(parseInt(substr), current.expected, id++, "Substring testing base: implicit string:" + substr);
    verify(parseInt(substr, 10), current.expectedBase10, id++,  "Substring testing base: 10 string:" + substr);
    verify(parseInt(substr, 16), current.expected, id++, "Substring testing base: 16 string:" + substr);
}

WScript.Echo("Done")

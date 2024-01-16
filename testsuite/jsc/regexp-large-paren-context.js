


function testLargeRegExp(terms)
{
    let s = '';
    for (let i = 0; i < terms; i++) {
        s += '(?:a){0,2}';
    }

    let r = new RegExp(s);
    for (let i = 0; i < 10; i++)
        ''.match(r);
}

testLargeRegExp(127);
testLargeRegExp(128);
testLargeRegExp(255);
testLargeRegExp(256);
testLargeRegExp(1000);



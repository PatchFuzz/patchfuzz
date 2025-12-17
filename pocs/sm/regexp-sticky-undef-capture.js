var re = /abc(WHOO!)?def/y;
var input = 'abcdefabcdefabcdef';
var count = 0;
while ((match = re.exec(input)) !== null) {
    print(count++);
    print(match[0], 'abcdef');
    print(match[1], undefined);
}

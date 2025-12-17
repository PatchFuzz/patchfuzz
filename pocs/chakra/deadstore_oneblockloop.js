function test(num) {
    var str = "";
    do
    {
        str += "0";
    } while (str.length < num);
    return str;
}

print(test(4));


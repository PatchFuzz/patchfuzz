var str = ' ';

for (var i = 0; i < 22; i++) {
    str = str + str;
}
str += 'var a = 1 + 1;';


eval(str);

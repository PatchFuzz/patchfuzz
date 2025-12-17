var testCount = 0;
function test(re, str, lastIndex, loopCount) 
{
    var formattedStr = str.replace('\n', '\\n');
    print('********** Test #' + ++testCount + " **********");
    
    re.lastIndex = lastIndex;
    for(var i = 0; i < loopCount; i++) {
        print(' ***   Iteration#' + (i+1))
        print(' var re=' + re);
        print(' var str=\'' + formattedStr + '\'');
        print(' re.lastIndex = '+re.lastIndex);
        print(' Result = ' + re.exec(str));
        print(' re.lastIndex = ' + re.lastIndex);
    }
}

 
 test(/b12/y, "b12asd\nb12", 1, 4);
 test(/b12/y, "ab12asd\nb12", 1, 4);
 test(/b/y, "ab", 1, 4);
 test(/abc/y, "abcabcababc", 3, 4);

 
 test(/b12/my, "ab12asd\nb12", 0, 4); 
 test(/b12/my, "ab12asd\nb12", 1, 4); 
 test(/b12/my, "b12asd\nb12", 1, 4);

 
 test(/^b12/y, "b12asd\nb12", 1, 4);
 test(/^b12/y, "ab12asd\nb12", 0, 4); 
 test(/^b12/y, "ab12asd\nb12", 1, 4); 
 test(/^b12/y, "b12b12", 3, 4); 
 test(/a|^b/gy, "baba", 0, 4); 

 
 test(/^b12/my, "b12asd\nb12", 0, 4); 
 test(/^b12/my, "b12asd\nb12", 1, 4); 
 test(/^b12/my, "b12asd\nb12", 7, 4); 
 test(/^b12/my, "asdsa123asd\nb12", 1, 4); 
 test(/^b12/my, "ab12asd\nb12", 1, 4); 
 test(/^b12/my, "ab12asd\nb12", 0, 4); 
 test(/^b/my, "a\nb", 2, 4);

print("abc\ndef\nghi\njkl\nmno\npqr\nstu\nvwx\nyz".match(/^.*\n/myg));


 test(/^ba/my, "ba\nba", 0, 4);
 test(/^ba/my, "ba\nba", 1, 4);


 test(/\b\w+\b/y, "( ab )", 0, 4);
 test(/\b\w+\b/y, "( ab )", 2, 4);


 test(/b/my, "ba\nb", 0, 4);
 test(/b/my, "ba\nb", 1, 4);
 test(/b/y, "ba\nb", 0, 4);
 test(/b/y, "ba\nb", 1, 4);
 test(/b/y, "a\nb", 0, 4);
 test(/b/my, "a\nb", 0, 4);


 var re = /^\s*|\s*$/;
 test(/^\s*|\s*$/y, " ab", 1, 1);















print(JSON.stringify (/(?:(a)*){3,}/.exec("aaaab")) === '["aaaa",null]');
print(JSON.stringify (/((a)*){3,}/.exec("aaaab")) === '["aaaa","",null]');
print(JSON.stringify (/((a)+){3,}/.exec("aaaab")) === '["aaaa","a","a"]');
print(JSON.stringify (/((.)*){3,}/.exec("abcd")) === '["abcd","",null]');
print(JSON.stringify (/((.)+){3,}/.exec("abcd")) === '["abcd","d","d"]');

print(JSON.stringify (/((.){1,2}){1,2}/.exec("abc")) === '["abc","c","c"]');
print(JSON.stringify (/(?:(a)*?)asd/.exec("aaasd")) === '["aaasd","a"]');
print(JSON.stringify (/(?:(a)*)asd/.exec("aaasd")) === '["aaasd","a"]');

print(JSON.stringify (/(.)*((a)*|(b)*)/.exec("ab")) === '["ab","b","",null,null]');
print(JSON.stringify (/(.)*((x)|(y))+/.exec("xy")) === '["xy","x","y",null,"y"]');
print(JSON.stringify (/(.)*((y)|(x))+/.exec("xy")) === '["xy","x","y","y",null]');

print(JSON.stringify (/((?:a)*)/.exec("aaaad")) === '["aaaa","aaaa"]');
print(JSON.stringify (/((y)+|x)+/.exec("x")) === '["x","x",null]');
print(JSON.stringify (/((?:y)*|x)+/.exec("x")) === '["x","x"]');
print(JSON.stringify (/((y)*|x)+/.exec("x")) === '["x","x",null]');
print(JSON.stringify (/((y)*|x)*/.exec("x")) === '["x","x",null]');
print(JSON.stringify (/(?:(y)*|x)*/.exec("x")) === '["x",null]');
print(JSON.stringify (/(?:(y)*|(x))*/.exec("x")) === '["x",null,"x"]');

print(JSON.stringify (/((?:a)*)asd/.exec("aaasd")) === '["aaasd","aa"]');
print(JSON.stringify (/((?:a)+)asd/.exec("aaasd")) === '["aaasd","aa"]');
print(JSON.stringify (/((?:a)*?)asd/.exec("aaasd")) === '["aaasd","aa"]');
print(JSON.stringify (/((?:a)+?)asd/.exec("aaasd")) === '["aaasd","aa"]');

print(JSON.stringify (/((y)|(z)|(a))*/.exec("yazx")) === '["yaz","z",null,"z",null]');
print(JSON.stringify (/((y)|(z)|(.))*/.exec("yaz")) === '["yaz","z",null,"z",null]');
print(JSON.stringify (/((y)*|(z)*|(a)*)*/.exec("yazx")) === '["yaz","z",null,"z",null]')
print(JSON.stringify (/((y)|(z)|(a))*/.exec("yazx")) === '["yaz","z",null,"z",null]')
print(JSON.stringify (/(?:(y)|(z)|(a))*/.exec("yazx")) === '["yaz",null,"z",null]')
print(JSON.stringify (/((y)|(z)|(a))+?/.exec("yazx")) === '["y","y","y",null,null]')
print(JSON.stringify (/(?:(y)|(z)|(a))+?/.exec("yazx")) === '["y","y",null,null]')

print(JSON.stringify (/(?:(x|y)*|z)*/.exec("yz")) === '["yz",null]');
print(JSON.stringify (/((x|y)*|z)*/.exec("yz")) == '["yz","z",null]');
print(JSON.stringify (/(((x|y)*|(v|w)*|z)*)asd/.exec("xyzwvxzasd")) === '["xyzwvxzasd","xyzwvxz","z",null,null]');

print(JSON.stringify (/((a)*){1,3}b/.exec("ab")) === '["ab","a","a"]')
print(JSON.stringify (/((a)*){2,3}b/.exec("ab")) === '["ab","",null]')
print(JSON.stringify (/((a)*){3,3}b/.exec("ab")) === '["ab","",null]')

print(JSON.stringify (/((a)*){3,}b/.exec("aaaab")) === '["aaaab","",null]');
print(JSON.stringify (/((a)*)*b/.exec("aaaab")) === '["aaaab","aaaa","a"]');

print(JSON.stringify (/((bb?)*)*a/.exec("bbba")) === '["bbba","bbb","b"]');
print(JSON.stringify (/((b)*)*a/.exec("bbba")) === '["bbba","bbb","b"]');

print(JSON.stringify (/(aa|a)a/.exec("aa")) === '["aa","a"]');
print(JSON.stringify (/(aa|a)?a/.exec("aa")) === '["aa","a"]');
print(JSON.stringify (/(aa|a)+?a/.exec("aa")) === '["aa","a"]');
print(JSON.stringify (/(?:aa|a)a/.exec("aa")) === '["aa"]');
print(JSON.stringify (/(?:aa|a)?a/.exec("aa")) === '["aa"]');
print(JSON.stringify (/(?:aa|a)+?a/.exec("aa")) === '["aa"]');

print(JSON.stringify (/(aa|a)a/.exec("a")) === 'null');
print(JSON.stringify (/(aa|a)?a/.exec("a")) === '["a",null]');
print(JSON.stringify (/(aa|a)+?a/.exec("a")) === 'null');
print(JSON.stringify (/(?:aa|a)a/.exec("a")) === 'null');
print(JSON.stringify (/(?:aa|a)?a/.exec("a")) === '["a"]');
print(JSON.stringify (/(?:aa|a)+?a/.exec("a")) === 'null');

print(JSON.stringify (/a+/.exec("aaasd")) === '["aaa"]');
print(JSON.stringify (/a+?/.exec("aaasd")) === '["a"]');

print(JSON.stringify (/a+sd/.exec("aaasd")) === '["aaasd"]');
print(JSON.stringify (/a+?sd/.exec("aaasd")) === '["aaasd"]');

print(JSON.stringify (/a{2}sd/.exec("aaasd")) === '["aasd"]');
print(JSON.stringify (/a{3}sd/.exec("aaasd")) === '["aaasd"]');

print(JSON.stringify (/(?=a)/.exec("a")) === '[""]');
print(JSON.stringify (/(?=a)+/.exec("a")) === '[""]');
print(JSON.stringify (/(?=a)*/.exec("a")) === '[""]');
print(JSON.stringify (/(?=(a))?/.exec("a")) === '["",null]');
print(JSON.stringify (/(?=(a))+?/.exec("a")) === '["","a"]');
print(JSON.stringify (/(?=(a))*?/.exec("a")) === '["",null]');

print(JSON.stringify (/(?!a)/.exec("a")) === '[""]');
print(JSON.stringify (/(?!a)+/.exec("a")) === '[""]');
print(JSON.stringify (/(?!a)*/.exec("a")) === '[""]');
print(JSON.stringify (/(?!(a))?/.exec("a")) === '["",null]');
print(JSON.stringify (/(?!(a))+?/.exec("a")) === '["",null]');
print(JSON.stringify (/(?!(a))*?/.exec("a")) === '["",null]');

print(JSON.stringify (/al(?=(ma))*ma/.exec("alma")) === '["alma",null]');
print(JSON.stringify (/al(?!(ma))*ma/.exec("alma")) === '["alma",null]');
print(JSON.stringify (/al(?=(ma))+ma/.exec("alma")) === '["alma","ma"]');
print(JSON.stringify (/al(?!(ma))+ma/.exec("alma")) === 'null');

print(JSON.stringify (/(?=())x|/.exec("asd")) === '["",null]');
print(JSON.stringify (/(?!())x|/.exec("asd")) === '["",null]');

print(JSON.stringify (/(().*)+.$/.exec("abcdefg")) === '["abcdefg","abcdef",""]');
print(JSON.stringify (/(().*)+?.$/.exec("abcdefg")) === '["abcdefg","abcdef",""]');
print(JSON.stringify (/(?:().*)+.$/.exec("abcdefg")) === '["abcdefg",""]');
print(JSON.stringify (/(?:().*)+?.$/.exec("abcdefg")) === '["abcdefg",""]');

print(JSON.stringify(/((?=())|.)+^/.exec("a")) === '["","",""]');
print(JSON.stringify(/(?:(|\b\w+?){2})+$/.exec("aaaa")) === '["aaaa","aaaa"]');

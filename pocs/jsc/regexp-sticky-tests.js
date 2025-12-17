function print(b)
{
    if (!b)
        throw new Error("Bad assertion");
}

let re = new RegExp("a|aa", "y");
let s1 = "_aaba";
let m = null;


print(re.exec(s1) === null);
print(re.lastIndex === 0);


re.lastIndex = 1;
m = re.exec(s1);
print(m[0] === 'a');
print(re.lastIndex === 2);


m = re.exec(s1);
print(m[0] === 'a');
print(re.lastIndex === 3);


m = re.exec(s1);
print(m === null);
print(re.lastIndex === 0);


re.lastIndex = 4;
m = re.exec(s1);
print(m[0] === 'a');
print(re.lastIndex === 5);


m = re.exec(s1);
print(m === null);

re = new RegExp("ax|a", "y");

print(re.exec(s1) === null);
print(re.lastIndex === 0);


re.lastIndex = 1;
m = re.exec(s1);
print(m[0] === 'a');
print(re.lastIndex === 2);


m = re.exec(s1);
print(m[0] === 'a');
print(re.lastIndex === 3);


m = re.exec(s1);
print(m === null);
print(re.lastIndex === 0);


re.lastIndex = 4;
m = re.exec(s1);
print(m[0] === 'a');
print(re.lastIndex === 5);


m = re.exec(s1);
print(m === null);

re = new RegExp("aa|a", "y");

re.lastIndex = 0;

print(re.exec(s1) === null);
print(re.lastIndex === 0);


re.lastIndex = 1;
m = re.exec(s1);
print(m[0] === 'aa');
print(re.lastIndex === 3);


m = re.exec(s1);
print(m === null);
print(re.lastIndex === 0);


re.lastIndex = 4;
m = re.exec(s1);
print(m[0] === 'a');
print(re.lastIndex === 5);


m = re.exec(s1);
print(m === null);

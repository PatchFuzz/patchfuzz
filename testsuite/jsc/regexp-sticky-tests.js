

function assert(b)
{
    if (!b)
        throw new Error("Bad assertion");
}

let re = new RegExp("a|aa", "y");
let s1 = "_aaba";
let m = null;


assert(re.exec(s1) === null);
assert(re.lastIndex === 0);


re.lastIndex = 1;
m = re.exec(s1);
assert(m[0] === 'a');
assert(re.lastIndex === 2);


m = re.exec(s1);
assert(m[0] === 'a');
assert(re.lastIndex === 3);


m = re.exec(s1);
assert(m === null);
assert(re.lastIndex === 0);


re.lastIndex = 4;
m = re.exec(s1);
assert(m[0] === 'a');
assert(re.lastIndex === 5);


m = re.exec(s1);
assert(m === null);

re = new RegExp("ax|a", "y");

assert(re.exec(s1) === null);
assert(re.lastIndex === 0);


re.lastIndex = 1;
m = re.exec(s1);
assert(m[0] === 'a');
assert(re.lastIndex === 2);


m = re.exec(s1);
assert(m[0] === 'a');
assert(re.lastIndex === 3);


m = re.exec(s1);
assert(m === null);
assert(re.lastIndex === 0);


re.lastIndex = 4;
m = re.exec(s1);
assert(m[0] === 'a');
assert(re.lastIndex === 5);


m = re.exec(s1);
assert(m === null);

re = new RegExp("aa|a", "y");

re.lastIndex = 0;

assert(re.exec(s1) === null);
assert(re.lastIndex === 0);


re.lastIndex = 1;
m = re.exec(s1);
assert(m[0] === 'aa');
assert(re.lastIndex === 3);


m = re.exec(s1);
assert(m === null);
assert(re.lastIndex === 0);


re.lastIndex = 4;
m = re.exec(s1);
assert(m[0] === 'a');
assert(re.lastIndex === 5);


m = re.exec(s1);
assert(m === null);

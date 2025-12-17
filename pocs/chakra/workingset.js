print('hello');
var a = print();
print("workingset = " + a.workingSet);
print("maxworkingset = " + a.maxWorkingSet);
print("pagefaultcount = " + a.pageFault);
print("private usage = " + a.privateUsage);

function print(obj, name)
{
  print("print object " + name);
  for (i in obj)
  {
    print(i + ' = ' + obj[i]);
  }
}

var c = Debug.getHostInfo();
print(c, "hostinfo");

var d = Debug.getMemoryInfo();
for (i in d)
{
print(d[i], i);
}

var b = Debug.getWorkingSet();
print("workingset = " + b.workingSet);
print("maxworkingset = " + b.maxWorkingSet);
print("pagefaultcount = " + b.pageFault);
print("private usage = " + b.privateUsage);
